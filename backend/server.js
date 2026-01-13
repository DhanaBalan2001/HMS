// Load environment variables FIRST
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const result = dotenv.config({ path: path.join(__dirname, '.env') });
console.log('Dotenv result:', result);
console.log('Environment variables loaded:', {
  PORT: process.env.PORT,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? 'Present' : 'Missing'
});

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import healthRecordRoutes from './routes/healthRecordRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import medicationRoutes from './routes/medicationRoutes.js';
import healthScoreRoutes from './routes/healthScoreRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import { markMissedMedications } from './controllers/medicationController.js';

// Connect to database
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/health-records', healthRecordRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin', prescriptionRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/health-scores', healthScoreRoutes);

// Schedule missed medication check every 30 minutes
setInterval(markMissedMedications, 30 * 60 * 1000);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'HMS Backend is running!' });
});

// Debug route for health records
app.get('/api/health-records-test', (req, res) => {
  console.log('Test route reached');
  res.json({ message: 'Test route working' });
});

// Direct test route
app.post('/api/test-upload', (req, res) => {
  console.log('Direct test route hit');
  res.json({ success: true, message: 'Direct test working' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Socket.io for video consultation
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join consultation room
  socket.on('join-consultation', (appointmentId) => {
    socket.join(appointmentId);
    socket.to(appointmentId).emit('user-joined', socket.id);
    console.log(`User ${socket.id} joined consultation ${appointmentId}`);
  });

  // WebRTC signaling
  socket.on('offer', (data) => {
    socket.to(data.appointmentId).emit('offer', {
      offer: data.offer,
      from: socket.id
    });
  });

  socket.on('answer', (data) => {
    socket.to(data.appointmentId).emit('answer', {
      answer: data.answer,
      from: socket.id
    });
  });

  socket.on('ice-candidate', (data) => {
    socket.to(data.appointmentId).emit('ice-candidate', {
      candidate: data.candidate,
      from: socket.id
    });
  });

  // Real-time chat
  socket.on('chat-message', (data) => {
    io.to(data.appointmentId).emit('chat-message', {
      message: data.message,
      sender: data.sender,
      senderRole: data.senderRole,
      timestamp: new Date()
    });
  });

  // Leave consultation
  socket.on('leave-consultation', (appointmentId) => {
    socket.to(appointmentId).emit('user-left', socket.id);
    socket.leave(appointmentId);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
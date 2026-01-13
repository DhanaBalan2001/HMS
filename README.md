# 🏥 MediCare Plus - Healthcare Management System

<div align="center">

<img src="./ChatGPT Image Jan 13, 2026, 08_48_57 AM.png" alt="MediCare Plus Banner" width="100%" />

<img width="100%" alt="Healthcare Management System" src="https://github.com/user-attachments/assets/cf279b5d-8e8d-4750-9cf1-cd4fc01dba16" />

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=30&duration=3000&pause=1000&color=0EA5E9&center=true&vCenter=true&width=600&lines=Healthcare+Management+System;Patient+Doctor+Admin+Portals;Real-time+Communication;Secure+Medical+Records" alt="Typing SVG" />

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.0-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

</div>

## 🏗️ **Technical Implementation**

### **Frontend Stack**
- **React 19** with Hooks and Context API
- **Vite** for fast development and building
- **Bootstrap 5** for responsive UI components
- **Socket.io Client** for real-time communication
- **Axios** for HTTP requests
- **React Router** for navigation

### **Backend Stack**
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time WebSocket connections
- **JWT** for authentication and authorization
- **Bcrypt** for password hashing
- **Multer** for file uploads

### **Payment Integration**
- **Stripe Payment Gateway** for secure transactions
- Payment intent creation and confirmation
- Webhook handling for payment status updates

### **Real-time Communication**
- **Socket.io** implementation for:
  - Video consultation rooms
  - Real-time chat messaging
  - Live appointment updates
  - WebRTC signaling for video calls

### **Database Design**
- **User Management** with role-based access (Patient, Doctor, Admin)
- **Appointment System** with scheduling and status tracking
- **Medication Management** with daily tracking
- **Health Records** with secure document storage
- **Review System** for doctor ratings

## 🚀 **Installation & Setup**

### **Prerequisites**
```bash
Node.js 18+
MongoDB 6+
Git
```

### **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
```

### **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
```

### **Environment Configuration**

**Backend (.env)**
```env
MONGODB_URI=mongodb://localhost:27017/hms
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## 📱 **Application Structure**

### **Multi-Portal System**

#### **Patient Portal**
- Dashboard with health metrics
- Doctor search and appointment booking
- Medication tracking with daily reminders
- Health record management
- Payment processing with Stripe
- Real-time chat with doctors

#### **Doctor Portal**
- Clinical dashboard with patient analytics
- Appointment management and scheduling
- Patient health score monitoring
- Prescription and medication management
- Video consultation platform
- Patient review system

#### **Admin Portal**
- User management and approval system
- System analytics and reporting
- Doctor verification and approval
- Platform configuration
- Security monitoring

## 🔧 **Key Technical Implementations**

### **Authentication System**
```javascript
// JWT-based authentication with role-based access
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};
```

### **Real-time Socket Implementation**
```javascript
// Video consultation room management
io.on('connection', (socket) => {
  socket.on('join-consultation', (appointmentId) => {
    socket.join(appointmentId);
    socket.to(appointmentId).emit('user-joined', socket.id);
  });
});
```

### **Payment Processing**
```javascript
// Stripe payment intent creation
const paymentIntent = await stripe.paymentIntents.create({
  amount: appointment.consultationFee * 100,
  currency: 'usd',
  metadata: { appointmentId: appointment._id.toString() }
});
```

### **Medication Tracking System**
```javascript
// Daily medication status tracking
const updateMedicationStatus = async (medicationId, day, status) => {
  const medication = await Medication.findById(medicationId);
  medication.dailyStatus.set(day.toString(), status);
  await medication.save();
};
```

## 🗄️ **Database Schema**

### **User Model**
```javascript
const userSchema = {
  name: String,
  email: String,
  password: String, // Bcrypt hashed
  role: ['patient', 'doctor', 'admin'],
  isApproved: Boolean,
  specialization: String, // For doctors
  consultationFee: Number, // For doctors
  profileImage: String
};
```

### **Appointment Model**
```javascript
const appointmentSchema = {
  patient: ObjectId,
  doctor: ObjectId,
  date: Date,
  time: String,
  status: ['pending', 'confirmed', 'completed', 'cancelled'],
  consultationFee: Number,
  paymentStatus: ['pending', 'paid'],
  paymentIntentId: String,
  chatMessages: [{
    sender: ObjectId,
    message: String,
    timestamp: Date
  }]
};
```

## 🔒 **Security Implementation**

- **Password Hashing** with Bcrypt (12 rounds)
- **JWT Token** authentication with expiration
- **Role-based Access Control** for different user types
- **Input Validation** and sanitization
- **CORS** configuration for cross-origin requests
- **Environment Variables** for sensitive data

## 📊 **Performance Optimizations**

- **MongoDB Indexing** for faster queries
- **Image Optimization** with Cloudinary
- **Lazy Loading** for React components
- **API Response Caching** with appropriate headers
- **Bundle Optimization** with Vite

## 🚀 **Deployment**

### **Frontend (Netlify)**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### **Backend (Railway/Heroku)**
```bash
# Set environment variables in platform dashboard
git push origin main
```

## 🛠️ **Development Tools**

- **ESLint** for code linting
- **Prettier** for code formatting
- **Postman** for API testing
- **MongoDB Compass** for database management
- **Git** for version control

## 📈 **System Metrics**

- **Response Time**: < 200ms average
- **Database Queries**: Optimized with indexing
- **File Upload**: Cloudinary integration
- **Real-time Latency**: < 50ms for Socket.io
- **Payment Processing**: Stripe webhook handling

---

<div align="center">

**Built with modern web technologies for healthcare management**

<img src="https://github-readme-stats.vercel.app/api?username=DhanaBalan2001&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=0EA5E9&text_color=ffffff&icon_color=0EA5E9" />

</div>

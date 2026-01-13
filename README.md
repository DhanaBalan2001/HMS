<div align="center">

# 🩺 MediCare Plus
*Revolutionary Healthcare Management Platform*

<img src="./ChatGPT Image Jan 13, 2026, 08_48_57 AM.png" alt="MediCare Plus Banner" width="100%" />

<img width="100%" alt="Healthcare Management System" src="https://github.com/user-attachments/assets/cf279b5d-8e8d-4750-9cf1-cd4fc01dba16" />

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=900&size=35&duration=1500&pause=500&color=0EA5E9&center=true&vCenter=true&multiline=true&repeat=true&width=1000&height=200&lines=%F0%9F%A9%BA+ADVANCED+HEALTHCARE+PLATFORM;%E2%9A%A1+REAL-TIME+MEDICAL+COMMUNICATION;%F0%9F%92%8A+SMART+MEDICATION+TRACKING;%F0%9F%94%92+SECURE+PAYMENT+PROCESSING;%F0%9F%93%8A+PREDICTIVE+HEALTH+ANALYTICS;%F0%9F%8E%AF+AI-POWERED+DIAGNOSTICS" />

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

</div>

## 🌟 **REVOLUTIONARY TECH STACK**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385061f794.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif" width="100">

**React 19** • **Node.js** • **MongoDB** • **Socket.io** • **Stripe**

</div>

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

## 🏥 **MULTI-PORTAL ECOSYSTEM**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="400">

</div>

### 👨⚕️ **DOCTOR PORTAL**
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Clinical Dashboard with Real-time Analytics**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Advanced Patient Health Monitoring**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Smart Prescription Management System**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **HD Video Consultation Platform**  

### 🏥 **PATIENT PORTAL**
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Personalized Health Dashboard**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **AI-Powered Doctor Matching**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Secure Stripe Payment Integration**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Daily Medication Tracking System**  

### ⚙️ **ADMIN CONTROL CENTER**
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Advanced User Management System**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Doctor Verification & Approval**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Real-time System Analytics**  
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="25"> **Security & Compliance Monitoring**  

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## ⚡ **ADVANCED IMPLEMENTATION**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif" width="400">
</div>

### 🔐 **JWT AUTHENTICATION SYSTEM**
```javascript
// Advanced Role-Based Authentication
const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (user.role === 'doctor' && !user.isApproved) {
      return res.status(403).json({ message: 'Doctor approval pending' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

### 🚀 **REAL-TIME SOCKET.IO ENGINE**
```javascript
// Live Video Consultation & Chat System
io.on('connection', (socket) => {
  // Join consultation room
  socket.on('join-consultation', (appointmentId) => {
    socket.join(appointmentId);
    socket.to(appointmentId).emit('doctor-joined', {
      socketId: socket.id,
      timestamp: new Date()
    });
  });

  // Real-time messaging
  socket.on('send-message', (data) => {
    io.to(data.appointmentId).emit('receive-message', {
      message: data.message,
      sender: data.sender,
      timestamp: new Date()
    });
  });

  // WebRTC signaling for video calls
  socket.on('webrtc-offer', (data) => {
    socket.to(data.appointmentId).emit('webrtc-offer', data);
  });
});
```

### 💳 **STRIPE PAYMENT INTEGRATION**
```javascript
// Secure Payment Processing
const createPaymentIntent = async (appointmentData) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: appointmentData.consultationFee * 100,
    currency: 'usd',
    metadata: {
      appointmentId: appointmentData._id,
      patientId: appointmentData.patient,
      doctorId: appointmentData.doctor
    }
  });

  await Appointment.findByIdAndUpdate(appointmentData._id, {
    paymentIntentId: paymentIntent.id,
    paymentStatus: 'processing'
  });

  return paymentIntent.client_secret;
};
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## 💊 **SMART MEDICATION SYSTEM**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="300">
</div>

```javascript
// Advanced Daily Medication Tracking
const updateMedicationStatus = async (medicationId, day, status) => {
  const medication = await Medication.findById(medicationId);
  
  medication.dailyStatus.set(day.toString(), {
    status: status,
    timestamp: new Date(),
    reminderSent: status === 'taken' ? false : true
  });

  // Calculate adherence rate
  const totalDays = medication.duration;
  const takenDays = Array.from(medication.dailyStatus.values())
    .filter(day => day.status === 'taken').length;
  
  medication.adherenceRate = (takenDays / totalDays) * 100;
  await medication.save();
  
  // Real-time update to patient
  io.to(medication.patient.toString()).emit('medication-updated', {
    medicationId,
    adherenceRate: medication.adherenceRate,
    status: status
  });
};
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## 🗄️ **DATABASE ARCHITECTURE**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif" width="300">
</div>

### 👤 **USER SCHEMA**
```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['patient', 'doctor', 'admin'] },
  isApproved: { type: Boolean, default: false },
  specialization: { type: String },
  consultationFee: { type: Number, min: 0 },
  profileImage: { type: String }
}, { timestamps: true });
```

### 📅 **APPOINTMENT SCHEMA**
```javascript
const appointmentSchema = new mongoose.Schema({
  patient: { type: ObjectId, ref: 'User', required: true },
  doctor: { type: ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed'] },
  consultationFee: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid'] },
  paymentIntentId: { type: String },
  chatMessages: [{ sender: ObjectId, message: String, timestamp: Date }]
}, { timestamps: true });
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## 🚀 **QUICK SETUP**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="300">
</div>

### **BACKEND SETUP**
```bash
cd backend
npm install

# Environment Configuration
MONGODB_URI=mongodb://localhost:27017/hms
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-name

npm run dev
```

### **FRONTEND SETUP**
```bash
cd frontend
npm install

# Environment Configuration
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000

npm run dev
```

<div align="center">

**🎯 Access: http://localhost:5173**

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

</div>

## 📊 **PERFORMANCE STATS**

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=DhanaBalan2001&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=0EA5E9&text_color=ffffff&icon_color=0EA5E9" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=DhanaBalan2001&theme=tokyonight&hide_border=true&background=0D1117&stroke=0EA5E9&ring=0EA5E9&fire=FF6B6B&currStreakLabel=0EA5E9" />

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## 🌟 **TECHNOLOGY SHOWCASE**

<div align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,mongodb,express,javascript,html,css,bootstrap,vite,git,github,vscode&perline=6&theme=dark" />

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

## 🎯 **KEY ACHIEVEMENTS**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif" width="400">

**🏥 Multi-Portal Healthcare System** • **⚡ Real-time Communication** • **💊 Smart Medication Tracking**  
**💳 Secure Payment Processing** • **📊 Health Analytics** • **🔒 Enterprise Security**  
**📱 Responsive Design** • **🗄️ Scalable Database** • **🎯 Role-Based Access Control**

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">

### 🏥 **Transforming Healthcare Through Innovation** 🏥

[![GitHub stars](https://img.shields.io/github/stars/DhanaBalan2001/HMS?style=for-the-badge&logo=github&color=yellow&labelColor=000000)](https://github.com/DhanaBalan2001/HMS)
[![GitHub forks](https://img.shields.io/github/forks/DhanaBalan2001/HMS?style=for-the-badge&logo=github&color=blue&labelColor=000000)](https://github.com/DhanaBalan2001/HMS)

</div>

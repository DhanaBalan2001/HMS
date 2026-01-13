<!--- MediCare Plus Healthcare Management System --->

<div align="center">

# 🩺 MediCare Plus
## *Intelligent Healthcare Management Platform*

<img src="./ChatGPT Image Jan 13, 2026, 08_48_57 AM.png" alt="MediCare Plus Banner" width="100%" />

<img width="100%" alt="Healthcare Management System" src="https://github.com/user-attachments/assets/cf279b5d-8e8d-4750-9cf1-cd4fc01dba16" />

</div>

---

<table width="100%">
<tr>
<td width="50%" valign="top">

## 🏥 **What We Built**

A comprehensive healthcare management system connecting **patients**, **doctors**, and **administrators** through a unified digital platform.

### **Core Functionality**
- **Multi-Portal System** (Patient/Doctor/Admin)
- **Real-time Video Consultations** 
- **Smart Appointment Scheduling**
- **Medication Tracking System**
- **Secure Payment Processing**
- **Health Records Management**

</td>
<td width="50%" valign="top">

## ⚡ **Tech Stack Used**

```javascript
Frontend: React 19 + Vite + Bootstrap 5
Backend:  Node.js + Express + MongoDB
Auth:     JWT + Bcrypt
Payment:  Stripe API
Storage:  Cloudinary
Realtime: Socket.io + WebRTC
```

### **Key Integrations**
- **Stripe** for payment processing
- **Socket.io** for real-time communication
- **MongoDB** with Mongoose ODM
- **JWT** authentication system
- **Cloudinary** for file uploads

</td>
</tr>
</table>

---

## 🎯 **System Overview**

<div align="center">

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   👥 PATIENTS   │    │   👨‍⚕️ DOCTORS    │    │   ⚙️ ADMINS     │
│                 │    │                 │    │                 │
│ • Book Appts    │    │ • Manage Appts  │    │ • User Control  │
│ • Pay Online    │    │ • Video Calls   │    │ • Analytics     │
│ • Track Meds    │    │ • Prescriptions │    │ • Approvals     │
│ • Health Score  │    │ • Patient Data  │    │ • Reports       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  🔄 REAL-TIME   │
                    │   SYNC ENGINE   │
                    │                 │
                    │ • Socket.io     │
                    │ • WebRTC        │
                    │ • Live Updates  │
                    └─────────────────┘
```

</div>

---

## 🛠️ **Implementation Details**

<table>
<tr>
<td width="50%">

### **Authentication Flow**
```javascript
// JWT-based auth with role checking
const auth = async (req, res, next) => {
  const token = req.header('Authorization')
    ?.replace('Bearer ', '');
  
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.id);
  
  if (user.role === 'doctor' && !user.isApproved) {
    return res.status(403).json({ 
      message: 'Doctor approval pending' 
    });
  }
  
  req.user = user;
  next();
};
```

</td>
<td width="50%">

### **Real-time Communication**
```javascript
// Socket.io for live consultations
io.on('connection', (socket) => {
  socket.on('join-consultation', (appointmentId) => {
    socket.join(appointmentId);
    socket.to(appointmentId).emit('doctor-joined');
  });
  
  socket.on('send-message', (data) => {
    io.to(data.appointmentId).emit('new-message', {
      message: data.message,
      sender: data.sender,
      timestamp: new Date()
    });
  });
});
```

</td>
</tr>
</table>

---

## 💳 **Payment Integration**

<div align="center">

**Stripe Payment Flow Implementation**

</div>

```javascript
// Create payment intent for appointments
const createPayment = async (appointmentId) => {
  const appointment = await Appointment.findById(appointmentId);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: appointment.consultationFee * 100, // Convert to cents
    currency: 'usd',
    metadata: { 
      appointmentId: appointment._id.toString(),
      patientId: appointment.patient.toString()
    }
  });
  
  appointment.paymentIntentId = paymentIntent.id;
  await appointment.save();
  
  return paymentIntent.client_secret;
};
```

---

## 📊 **Database Schema**

<table>
<tr>
<td width="33%">

### **Users Collection**
```javascript
{
  name: String,
  email: String,
  password: String, // bcrypt hashed
  role: ['patient', 'doctor', 'admin'],
  isApproved: Boolean,
  specialization: String,
  consultationFee: Number,
  profileImage: String
}
```

</td>
<td width="33%">

### **Appointments Collection**
```javascript
{
  patient: ObjectId,
  doctor: ObjectId,
  date: Date,
  time: String,
  status: String,
  consultationFee: Number,
  paymentStatus: String,
  paymentIntentId: String,
  chatMessages: Array
}
```

</td>
<td width="33%">

### **Medications Collection**
```javascript
{
  patient: ObjectId,
  doctor: ObjectId,
  name: String,
  dosage: String,
  frequency: String,
  duration: Number,
  dailyStatus: Map,
  adherenceRate: Number
}
```

</td>
</tr>
</table>

---

## 🚀 **Getting Started**

<div align="center">

### **Quick Setup Guide**

</div>

<table>
<tr>
<td width="50%">

### **Backend Setup**
```bash
cd backend
npm install

# Create .env file
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret

npm run dev
```

</td>
<td width="50%">

### **Frontend Setup**
```bash
cd frontend
npm install

# Create .env file
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000

npm run dev
```

**Access:** http://localhost:5173

</td>
</tr>
</table>

---

## 🔒 **Security Implementation**

<div align="center">

| Security Layer | Implementation | Status |
|---|---|---|
| **Authentication** | JWT with 7-day expiry | ✅ |
| **Password Security** | Bcrypt with 12 rounds | ✅ |
| **Role-based Access** | Patient/Doctor/Admin roles | ✅ |
| **Input Validation** | Mongoose schema validation | ✅ |
| **CORS Protection** | Express CORS middleware | ✅ |
| **Environment Variables** | Sensitive data protection | ✅ |

</div>

---

## 📱 **Key Features Implemented**

<table>
<tr>
<td width="25%" align="center">

### 👥 **Patient Features**
- Account registration
- Doctor search & booking
- Stripe payment integration
- Medication tracking
- Health score monitoring
- Video consultations

</td>
<td width="25%" align="center">

### 👨‍⚕️ **Doctor Features**
- Profile management
- Appointment scheduling
- Patient health scores
- Prescription management
- Video consultations
- Patient reviews

</td>
<td width="25%" align="center">

### ⚙️ **Admin Features**
- User management
- Doctor approvals
- System analytics
- Platform monitoring
- Security oversight
- Report generation

</td>
<td width="25%" align="center">

### 🔄 **Real-time Features**
- Live video calls
- Instant messaging
- Appointment updates
- Notification system
- Status synchronization
- WebRTC signaling

</td>
</tr>
</table>

---

## 📈 **Performance Metrics**

<div align="center">

```
API Response Time: < 200ms
Database Queries: Optimized with indexing
Real-time Latency: < 50ms (Socket.io)
Payment Processing: Stripe webhook integration
File Upload: Cloudinary CDN
Authentication: JWT token validation
```

</div>

---

## 🎯 **Project Structure**

```
HMS/
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   ├── middleware/     # Auth & validation
│   └── utils/          # Helper functions
│
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Route pages
│   │   ├── styles/     # CSS files
│   │   └── utils/      # Frontend utilities
│   └── public/         # Static assets
```

---

<div align="center">

## 🌟 **Built With Modern Technologies**

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

---

### **Healthcare Management Made Simple** 🏥

*Connecting patients, doctors, and administrators through intelligent technology*

[![GitHub stars](https://img.shields.io/github/stars/DhanaBalan2001/HMS?style=social)](https://github.com/DhanaBalan2001/HMS)

</div>

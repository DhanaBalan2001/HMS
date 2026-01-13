<div align="center">

# 🏥 MediCare Plus
*Digital Healthcare Revolution*

<img src="./ChatGPT Image Jan 13, 2026, 08_48_57 AM.png" alt="MediCare Plus Banner" width="100%" />

<img width="100%" alt="Healthcare Management System" src="https://github.com/user-attachments/assets/cf279b5d-8e8d-4750-9cf1-cd4fc01dba16" />

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=2000&pause=800&color=DC2626&center=true&vCenter=true&multiline=true&repeat=true&width=1200&height=150&lines=🩺+COMPREHENSIVE+MEDICAL+PLATFORM;💊+INTELLIGENT+PRESCRIPTION+SYSTEM;📊+PREDICTIVE+HEALTH+MONITORING;🔒+HIPAA+COMPLIANT+ARCHITECTURE;⚡+REAL-TIME+TELEMEDICINE" />

<img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" width="800">

</div>

## 🧬 **MEDICAL TECHNOLOGY STACK**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212748830-4c709398-a386-4761-84d7-9e10b98fbe6e.gif" width="80">
<img src="https://user-images.githubusercontent.com/74038190/212748842-9fcbad5b-6173-4175-8a61-521f3dbb7514.gif" width="80">
<img src="https://user-images.githubusercontent.com/74038190/212748843-c7084c71-342b-4334-81c2-64b98a4e9a52.gif" width="80">
<img src="https://user-images.githubusercontent.com/74038190/212748849-4ed062b4-4a31-4d14-8b5a-6d4314c4c4c5.gif" width="80">
<img src="https://user-images.githubusercontent.com/74038190/212748851-9a47ab55-8d3e-4347-98a0-e7a8b8c4e4c6.gif" width="80">

**React 19** ◦ **Node.js** ◦ **MongoDB** ◦ **Socket.io** ◦ **Stripe**

</div>

<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">

## 🏥 **CLINICAL PORTAL ARCHITECTURE**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif" width="500">

</div>

### 👨⚕️ **PHYSICIAN DASHBOARD**
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Advanced Clinical Decision Support**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Electronic Health Record Integration**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Telemedicine Consultation Suite**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Prescription Management Workflow**  

### 🏥 **PATIENT CARE PORTAL**
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Personal Health Record Access**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Appointment Scheduling Engine**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Medication Adherence Tracking**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Health Metrics Visualization**  

### ⚙️ **ADMINISTRATIVE COMMAND CENTER**
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Healthcare Provider Management**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Clinical Quality Assurance**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Healthcare Analytics Dashboard**  
<img src="https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2848-41c2-8c8b-8e3d70524c42.gif" width="30"> **Regulatory Compliance Monitor**  

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## ⚡ **CLINICAL IMPLEMENTATION**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif" width="500">
</div>

### 🔐 **HEALTHCARE AUTHENTICATION**
```javascript
// Medical-Grade Security Implementation
const authenticateHealthcareUser = async (req, res, next) => {
  const authToken = req.header('X-Medical-Auth')?.replace('Bearer ', '');
  
  try {
    const decodedCredentials = jwt.verify(authToken, process.env.MEDICAL_JWT_SECRET);
    const healthcareUser = await User.findById(decodedCredentials.id).select('-password');
    
    if (healthcareUser.role === 'physician' && !healthcareUser.medicalLicenseVerified) {
      return res.status(403).json({ message: 'Medical license verification required' });
    }
    
    req.healthcareUser = healthcareUser;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid medical credentials' });
  }
};
```

### 🚀 **TELEMEDICINE COMMUNICATION ENGINE**
```javascript
// Real-Time Medical Consultation System
io.on('connection', (socket) => {
  // Medical consultation room initialization
  socket.on('initiate-medical-consultation', (consultationId) => {
    socket.join(consultationId);
    socket.to(consultationId).emit('physician-connected', {
      socketId: socket.id,
      consultationStart: new Date()
    });
  });

  // Clinical data transmission
  socket.on('transmit-medical-data', (data) => {
    io.to(data.consultationId).emit('receive-clinical-data', {
      medicalData: data.clinicalInformation,
      transmitter: data.healthcareProvider,
      timestamp: new Date()
    });
  });

  // Medical imaging sharing
  socket.on('share-medical-imaging', (data) => {
    socket.to(data.consultationId).emit('receive-medical-imaging', data);
  });
});
```

### 💳 **HEALTHCARE PAYMENT PROCESSING**
```javascript
// Medical Billing Integration
const processHealthcarePayment = async (medicalServiceData) => {
  const medicalPaymentIntent = await stripe.paymentIntents.create({
    amount: medicalServiceData.consultationFee * 100,
    currency: 'usd',
    metadata: {
      consultationId: medicalServiceData._id,
      patientId: medicalServiceData.patient,
      physicianId: medicalServiceData.physician,
      medicalServiceType: medicalServiceData.serviceType
    }
  });

  await MedicalConsultation.findByIdAndUpdate(medicalServiceData._id, {
    paymentIntentId: medicalPaymentIntent.id,
    billingStatus: 'processing'
  });

  return medicalPaymentIntent.client_secret;
};
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## 💊 **PHARMACEUTICAL MANAGEMENT SYSTEM**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212750996-938b257b-266c-45a7-9af7-655341c0f58b.gif" width="400">
</div>

```javascript
// Advanced Pharmaceutical Tracking
const updatePharmaceuticalAdherence = async (medicationId, day, adherenceStatus) => {
  const pharmaceuticalRecord = await Medication.findById(medicationId);
  
  pharmaceuticalRecord.dailyAdherence.set(day.toString(), {
    adherenceStatus: adherenceStatus,
    recordedTimestamp: new Date(),
    clinicalNotificationSent: adherenceStatus === 'administered' ? false : true
  });

  // Calculate pharmaceutical adherence metrics
  const totalTherapyDays = pharmaceuticalRecord.treatmentDuration;
  const adherentDays = Array.from(pharmaceuticalRecord.dailyAdherence.values())
    .filter(day => day.adherenceStatus === 'administered').length;
  
  pharmaceuticalRecord.adherencePercentage = (adherentDays / totalTherapyDays) * 100;
  await pharmaceuticalRecord.save();
  
  // Real-time clinical update
  io.to(pharmaceuticalRecord.patient.toString()).emit('pharmaceutical-update', {
    medicationId,
    adherencePercentage: pharmaceuticalRecord.adherencePercentage,
    clinicalStatus: adherenceStatus
  });
};
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## 🗄️ **MEDICAL DATABASE ARCHITECTURE**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212750147-854a394f-fee9-4080-9770-78a4b7ece53f.gif" width="400">
</div>

### 👤 **HEALTHCARE USER SCHEMA**
```javascript
const healthcareUserSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  medicalEmail: { type: String, required: true, unique: true },
  securePassword: { type: String, required: true, minlength: 8 },
  healthcareRole: { type: String, enum: ['patient', 'physician', 'administrator'] },
  medicalLicenseVerified: { type: Boolean, default: false },
  medicalSpecialization: { type: String },
  consultationRate: { type: Number, min: 0 },
  medicalProfileImage: { type: String }
}, { timestamps: true });
```

### 📅 **MEDICAL CONSULTATION SCHEMA**
```javascript
const medicalConsultationSchema = new mongoose.Schema({
  patient: { type: ObjectId, ref: 'HealthcareUser', required: true },
  physician: { type: ObjectId, ref: 'HealthcareUser', required: true },
  consultationDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  clinicalStatus: { type: String, enum: ['scheduled', 'in-progress', 'completed'] },
  consultationFee: { type: Number, required: true },
  billingStatus: { type: String, enum: ['pending', 'processed'] },
  paymentIntentId: { type: String },
  clinicalNotes: [{ provider: ObjectId, note: String, timestamp: Date }]
}, { timestamps: true });
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## 🚀 **MEDICAL SYSTEM DEPLOYMENT**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212750e67-435a-4b06-8b8e-9d1b4e4f8b8a.gif" width="400">
</div>

### **CLINICAL BACKEND CONFIGURATION**
```bash
cd backend
npm install

# Medical Environment Variables
MONGODB_URI=mongodb://localhost:27017/medical_hms
MEDICAL_JWT_SECRET=your-medical-jwt-secret
STRIPE_MEDICAL_KEY=sk_test_your-medical-stripe-key
CLOUDINARY_MEDICAL_NAME=your-medical-cloudinary-name

npm run dev
```

### **HEALTHCARE FRONTEND SETUP**
```bash
cd frontend
npm install

# Clinical Environment Configuration
VITE_MEDICAL_API_URL=http://localhost:5000/api
VITE_TELEMEDICINE_URL=http://localhost:5000

npm run dev
```

<div align="center">

**🏥 Medical Access Portal: http://localhost:5173**

<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">

</div>

## 📊 **CLINICAL PERFORMANCE METRICS**

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=DhanaBalan2001&show_icons=true&theme=radical&hide_border=true&bg_color=1a1a2e&title_color=DC2626&text_color=ffffff&icon_color=DC2626" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=DhanaBalan2001&theme=radical&hide_border=true&background=1a1a2e&stroke=DC2626&ring=DC2626&fire=FF6B6B&currStreakLabel=DC2626" />

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## 🌟 **MEDICAL TECHNOLOGY SHOWCASE**

<div align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,mongodb,express,javascript,html,css,bootstrap,vite,git,github,vscode&perline=6&theme=light" />

</div>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif" width="600">
</div>

## 🎯 **HEALTHCARE INNOVATION ACHIEVEMENTS**

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif" width="500">

**🏥 Comprehensive Medical Platform** ◦ **⚡ Telemedicine Integration** ◦ **💊 Pharmaceutical Tracking**  
**💳 Medical Billing System** ◦ **📊 Clinical Analytics** ◦ **🔒 HIPAA Compliance**  
**📱 Mobile Health Interface** ◦ **🗄️ Medical Database** ◦ **🎯 Healthcare Access Control**

<img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" width="800">

### 🏥 **Advancing Digital Healthcare Innovation** 🏥

[![GitHub stars](https://img.shields.io/github/stars/DhanaBalan2001/HMS?style=for-the-badge&logo=github&color=DC2626&labelColor=1a1a2e)](https://github.com/DhanaBalan2001/HMS)
[![GitHub forks](https://img.shields.io/github/forks/DhanaBalan2001/HMS?style=for-the-badge&logo=github&color=0EA5E9&labelColor=1a1a2e)](https://github.com/DhanaBalan2001/HMS)

</div>

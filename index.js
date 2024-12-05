const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const groupRoutes = require('./routes/groupRoutes');
const messageRoutes = require('./routes/messagesRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
// app.use(cors());

const MONGO_URI = 'mongodb+srv://aviralnitish345:oHuSnQRxdE34A71M@cluster0.l76tg.mongodb.net/'
// Routes
// app.get('/',() =>{
//   res.send('server is runing')
// })
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/message',messageRoutes)

// Connect to MongoDB{ useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(MONGO_URI )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

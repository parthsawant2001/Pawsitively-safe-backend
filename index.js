const express = require('express');
const dotenv = require('dotenv');
// const { chats } = require('./data/data');
const connectDB = require('./config/db');
const useRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const ngoRoutes = require('./routes/ngoRoutes');
const animalRoutes = require('./routes/animalRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

app.use('/api/user', useRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/ngo', ngoRoutes);
app.use('/api/animal', animalRoutes);

const server = app.listen(PORT, console.log(`Server running on PORT:${PORT}`));

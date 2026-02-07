import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import arcjetMiddleware from './middlewares/arcjet.js';
import authRoutes from './routes/authRoutes.js';
import authorize from './middlewares/authMiddleware.js';




const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));

if(process.env.NODE_ENV === 'production') {
  app.use(arcjetMiddleware);
}


app.use('/api/auth',authRoutes);
app.use('/api/pitches',(req,res)=>{  res.json({message: "Pitches endpoint"});
});

app.get('/', (req, res) => {
  res.send('Welcome to the Startup Pitch API');
});

app.get('/api/protected', authorize, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("DB Connection Failed:", err.message);
    process.exit(1);
  }
};

startServer();

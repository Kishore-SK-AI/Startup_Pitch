import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const authRouter = express.Router();
import{ register, login }from '../controllers/authController.js';


authRouter.post('/register',register);

authRouter.post('/login',login);

export default authRouter;
            

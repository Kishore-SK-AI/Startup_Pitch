import express from "express";
import getuserData from '../controllers/userController.js';
import authorize from '../middlewares/authMiddleware.js';
import User from "../models/user.model.js";

const userRouter = express.Router();

userRouter.get('/:id', authorize, getuserData);


export default userRouter;


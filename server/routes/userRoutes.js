import express from "express";
import getuserData from '../controllers/userController.js';
import authorize from '../middlewares/authMiddleware.js';
import User from "../models/user.model.js";

const userRouter = express.Router();

userRouter.get('/:id', authorize, getuserData);

userRouter.put('/:id', authorize, async (req, res) => {
  const userId = req.params.id;
  const { isPro } = req.body; // 👈 get from frontend

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ Update isPro field
    if (typeof isPro === "boolean") {
      user.isPro = isPro;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });

  } catch (error) {
    console.error("Update User Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


export default userRouter;


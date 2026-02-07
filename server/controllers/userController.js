import User from "../models/user.model.js";

const getuserData = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: ensure user can access only their own data
    if (req.userId !== id) {
      return res.status(403).json({ message: "Access denied" });
    }
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.error("Get User Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default getuserData;

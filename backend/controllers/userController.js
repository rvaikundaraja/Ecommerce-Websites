import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ token: generateToken(user._id) });
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    res.json({ token: generateToken(user._id) });
  } else {
    res.status(401).json("Invalid credentials");
  }
};

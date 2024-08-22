import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Make sure this is imported
import { User } from "../../models/User.js";
import auth from "../../middleware/Auth.js";

const router = express.Router();

// Protected route using auth middleware
router.get("/protected", auth, (req, res) => {
  res.send("This is a protected route");
});

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(`Error registering user: ${error}`);
    res.status(500).send("Server error");
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(`Error logging in: ${error}`);
    res.status(500).send("Server error");
  }
});

router.get("/check", (req, res) => {
  res.send("yes router working");
});

export default router;

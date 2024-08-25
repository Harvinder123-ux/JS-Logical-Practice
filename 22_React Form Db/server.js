import express from "express";
const app = express();
const port = 3003;
import { User } from "./models/User.js";
import cors from "cors";

app.use(express.json())

app.use(cors());
app.use(express.static("public"));

import mongoose from "mongoose";
let conn = mongoose.connect("mongodb://localhost:27017/sundayForm");

app.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  let newUser = new User({
    username: username,
    email: email,
    password: password,
  });

  try {
    await newUser.save();
    console.log("new user saved successfull");
  } catch (error) {
    console.log("some error occured while saving: ", error);
  }
});
app.get("/", (req, res) => {
  res.send("This is server");
});

app.listen(port, () => {
  console.log(`App listening at the port ${port}`);
});

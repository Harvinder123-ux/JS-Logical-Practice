import express from "express";
const app = express();
const port = 3004;
import bodyParser from "body-parser";
import cors from "cors";
import { User } from "./models/User.js";
import mongoose from "mongoose";

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"))

const conn = mongoose
  .connect("mongodb://localhost:27017/practiceSession")
  .then(() => {
    console.log("Connected to the mongo database sucessfully");
  })
  .catch((e) => {
    console.log(`here is some error occured in connecting with db ${e}`);
  });

app.get("/", (req, res) => {
  res.send("This is Enndpoints server backend");
});

app.post("/submit-id", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username: username,
    passwrod: password,
  });
  try {
    await newUser.save();
    console.log("new user saved successfull");
  } catch (error) {
    console.log("some error occured while saving: ", error);
  }
});

app.listen(port, () => {
  console.log(`App listening at the port of ${port}`);
});

import express from "express";
const app = express();
const port = 3009;
import fs from "fs/promises";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import cors from 'cors'
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"))

const conn = mongoose
  .connect("mongodb://localhost:27017/harleenData")
  .then(() => {
    console.log("You are connected with your database successfully");
  })
  .catch((e) => {
    console.log(`Some error occured while connecting ${e}`);
  });

fs.writeFile("Harvi.txt", "Hello this is harviTextFile");
let myfile = await fs.readFile("Harvi.txt");
console.log(myfile.toString());

app.get("/", (req, res) => {
  res.send("Hello this is Home Page endpoint");
});

app.post("/submit-data", async(req, res) => {
  const { id, title, phone, desc } = req.body;

  const newUser = new User({
    id: id,
    title: title,
    phone: phone,
    desc: desc,
  });

  try {
    await newUser.save();
    console.log("new user saved successfull")
  } catch (error) {
    console.log("some error occured while saving: ", error)
  }
});

app.listen(port, () => {
  console.log(`App Listening at the port : ${port}`);
});

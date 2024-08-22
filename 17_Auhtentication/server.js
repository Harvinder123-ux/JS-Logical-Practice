import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/api/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/AuthProject";

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", userRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB successfully!");
})
.catch((e) => {
  console.log(`Error connecting to MongoDB: ${e}`);
});

app.get("/", (req, res) => {
  res.send("Hey, this is the Server Auth home!");
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

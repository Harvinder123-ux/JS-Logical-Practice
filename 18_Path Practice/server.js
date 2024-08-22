import express from "express";
import cors from "cors";

const app = express();
const port = 3005;

app.use(cors());
app.use(express.static("public"));
app.use(express.json()); // Add this to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this to parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send("This is Server");
});

app.post("/", async (req, res) => {
  const { user, role, salary } = req.body;
  console.log({ user, role, salary });
  res.send("Data received"); // Send a response to the client
});

app.listen(port, () => {
  console.log(`App listening at Port ${port}`);
});

import express from "express";
const app = express();
import cors from "cors";
const port = 3000;

app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/", async(req, res) => {
  const { name, gender, salary } = req.body;
  const data =  {
    name: name,
    gender : gender,
    salary: salary,
  };
  
  console.log(data)

});

app.get("/", (req, res) => {
  res.send("Hello this is server");
});

app.listen(port, () => {
  console.log(`App listening at port http://localhost:${port}`);
});

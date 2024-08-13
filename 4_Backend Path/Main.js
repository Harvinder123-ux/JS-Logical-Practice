import express from "express";
const app = express();
import path, { parse } from "path";
const port = 3003;
import fs from "fs/promises";
// import { fileURLToPath } from 'url';

// console.log(path)

//YOU CAN ALSO USE THIS BUT I'm GONNA DO THIS LOGICALLY
// Use `fileURLToPath` to get the directory name in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//the directory path
// let dirPath = "C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path";

//Get the directory name
let dirName = path.dirname(
  "C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path/Main.js"
);
console.log(dirName);

//get the extension name
let extName = path.extname(
  "C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path/Main.js"
);
console.log(extName);

//get the file name
let fileName = path.basename(
  "C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path/Main.js"
);
console.log(fileName);

//The main character it will return every property of our url/path in object
// console.log(path.parse("C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path/Main.js"))

let newObj = path.parse("C:/Users/ASUS/Documents/JS Logical Practice/4_Backend Path/Main.js")
console.log(newObj.root)
console.log(newObj.name)
console.log(newObj.ext)
// Create the directory
fs.mkdir("public", { recursive: true }, () => {});
// Check if `public` directory exists, if not, create it
// let publicDir = path.join(dirName, "Public")
// if (!fs.existsSync(publicDir)) {
//     fs.mkdirSync(publicDir);
// }




//MOVING THE FILE INTO THE DIRECTORY

//in this i'm going to create the new fs file and then move it with public folder
fs.writeFile("Harvinder.txt", "Hello this is harvinder and this file is about to move in the public folder")

//path.join used for joid the path of file or folder with other
let oldPath = path.join(dirName, "Harvinder.txt")
let newPath  = path.join(dirName, "public", "Harvinder.txt")

//in this is used the fs rename method for moving the file into new path
fs.rename(oldPath, newPath)

app.get("/", (req, res) => {
  res.send("Hello this is Path Folder Server");
});

app.listen(port, () => {
  console.log(`App listening at the port of: ${port}`);
});

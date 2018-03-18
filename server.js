const express = require("express");
const app = express();
const multer = require("multer");



const upload = multer();

app.post('/upload', upload.single("file"), (req, res)=>{
res.writeHead(200, {"Content-Type":"application/json"}); 

  const file = req.file
  const data = {size : file.size}
  
res.end(JSON.stringify(data)) ; 

  
})


app.use(express.static("public"));

app.get("/", (req, res)=>{
  
  res.sendFile(__dirname + '/views/index.html');


})

app.listen(process.env.PORT);
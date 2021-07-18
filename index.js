const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = process.env.PORT||3000
app.use(express.static(__dirname))
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
http.createServer(app).listen(port,()=>console.log(`listening on port ${port}`))
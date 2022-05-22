const express = require("express");
const app = express();
const connectedDB = require("./config/db")
const PORT = process.env.PORT || 5000;

connectedDB();

app.get("/",(req,res)=>{
    // res.status(200);
    res.send(`server`)
})
app.listen(PORT,()=>{
    console.log('ddd',`${PORT} listening`)
})

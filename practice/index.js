const express = require('express')
const app =express()
const PORT = 8080

app.use((req,res,next)=>{
    console.log(req,'req',res,'res',next)
    next();
})
app.get('/', function (req, res) {
    // res.status(200)
    // res.send('Hello World')
    // chainable
    res.status(200).send('Hello World')
})


app.get('/test', function (req, res) {
    // console.log(req,'eee',res,'ddd27')
    res.status(200).json('{test json}')
})

app.listen(PORT,()=>{
    console.log(`${PORT}`)
});
console.log("ddd")

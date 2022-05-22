let fs = require("fs")
console.log("Im going to get a file synchronously");
// const File = fs.readFileSync("readFileSync.js");
fs.readFile("readFileSync.js",(err,file)=>
    {
        console.log(err,'err',file,'d','')
        console.log("ve gotten the fiel");
    }
);
// console.log("ve gotten the fiel");
console.log("App continues")

console.log("Hello Node");
let reason = ()=>{
    console.log("variable")
}
let calculate = ()=>{
    console.log(10 + 10)
}
var privateExample =()=>{
    return 1+1;
};

module.exports ={
    reason,
    calculate
}

const mongoose = require('mongoose');
const config = require("./keys");
const db = config.mongoURL;

const connectDB = async () =>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('upper')

    } catch (err){
        console.log('tried',err)
        process.exit(1);
    }
}



module.exports = connectDB;

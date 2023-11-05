
require("dotenv").config();
const mongoose = require('mongoose');
const URL = process.env.URI

module.exports=( ()=>{
  return  mongoose.connect(URL)
  
})

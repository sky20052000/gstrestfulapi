const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/gstdata").then((data)=>{
    console.log("conection Successful")
}).catch((error)=>{
    console.log("No connection")
});
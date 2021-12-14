const express = require('express');
require("./db/conn");
const Gst = require("./models/gst");
const app = express();
 const port = process.env.PORT || 5000;

app.use(express.json());
// creating gst api
 app.post("/gst", async(req,res)=>{
    try{
    const user = new Gst(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    } catch(err){
        res.status(400).send(err);
    }
})

// get gst data
app.get("/gsts", async(req,res)=>{
    try{
       const getData = await Gst.find();
       res.send(getData);
    } catch(err) {
        res.send(err)
    }
})


app.listen(port,()=>{
    console.log(`server is running on the ${port}`);
})
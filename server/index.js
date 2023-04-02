const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const RegUser = require('./routes/Userregister')
const ShowUser = require('./routes/ShowUSer')
const UPDATEUser = require('./routes/UpdateUSer')

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



app.use("/Reguser",RegUser);
app.use("/Showuser",ShowUser)
app.use("/updateuser",UPDATEUser)

const PORT = process.env.PORT ||8000;
const URI = process.env.URI;
app.listen(PORT,()=> console.log(`server start at ${PORT}`))


mongoose.connect(URI,{
    useNewUrlParser:true,
    USeunifiedTopology:true,
})
.then(()=>console.log("database connect suscessfully"))
.catch((err)=>console.log('database connected failed',err.message))
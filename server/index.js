const express=require('express');
require('dotenv').config();
const app=express();
const db=require("./config/dbConfig");
const port=8000;

app.listen(port,()=>console.log(`Server running on port ${port}`));

import  express from  'express';
import dotenv from "dotenv";
import connectDB from "./dbconnect.js";

connectDB();
dotenv.config();
const app =express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
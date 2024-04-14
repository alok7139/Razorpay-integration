import express from "express";
import { config } from "dotenv";
import router from "./routes/paymentroutes.js";
import cors from 'cors';

config({path:"./config/config.env"});

export const app = express();

app.use(cors({
    
        origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST" , "GET"],
        credentials:true,

    
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/api'  ,router);

app.get('/api/getkey' , (req,res) => res.status(200).json({key:process.env.RAZORPAY_API_KEY}))
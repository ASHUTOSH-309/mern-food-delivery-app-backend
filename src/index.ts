
import express from "express"
import { Request, Response } from "express";
import cors from "cors"
import "dotenv/config"
import myUserRoute from "./routes/MyUserRoute"
import myRestaurantRoute from "./routes/MyRestaurantRoute"
import mongoose from "mongoose";

import {v2 as cloudinary} from "cloudinary"

mongoose.connect(process.env.MONGODB_CONENCTION_STRING as string)
.then(()=>{

console.log("connected to database")

})

cloudinary.config({

        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET,


})


const app=express()
app.use(express.json())
app.use(cors())

/* app.get("/test",async(req: Request,res: Response)=>{

        res.json({message:"Hello!"})

}) */

app.get("/health",async (req:Request,res:Response)=>{
        res.send({message:"health OK!"})
})


app.use("/api/my/user",myUserRoute)
app.use("/api/my/restaurant",myRestaurantRoute)

app.listen(8800,()=>{

    console.log(`server started on localhost:8800`)

})
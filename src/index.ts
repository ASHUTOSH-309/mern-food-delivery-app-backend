
import express from "express"
import { Request, Response } from "express";
import cors from "cors"
import "dotenv/config"
import myUserRoute from "./routes/MyUserRoute"
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONENCTION_STRING as string)
.then(()=>{

console.log("connected to database")

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

app.listen(8800,()=>{

    console.log(`server started on localhost:8800`)

})
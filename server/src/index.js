require('dotenv').config()
import express from 'express';
import cors from 'cors';
import { StreamChat} from 'stream-chat';
import {v4 as uuidv4} from "uuid";
import bcrpt from 'bcrypt';
const app =express();

app.use(cors());
app.use(express.json());
const api_key=process.env.API_KEY;
const api_secret=process.env.API_SECRET;
const serverClient= StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res)=>{
    try{
        const {firstName, lastName, username, password}=req.body;
        const userId=uuidv4();
        const hasedPassword= await bcrpt.hash(password, 10);
        const token =serverClient.createToken(userId);
        res.json({token, userId, firstName, lastName, username, hasedPassword });
    } catch (error) {
        res.json(error);
    }
        
});
app.post("/login")

app.listen(3001,()=>{
    console.log("Server running on port 3001");
});
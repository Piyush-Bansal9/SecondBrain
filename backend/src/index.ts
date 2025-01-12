import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { z } from "zod"
import {userModel, contentModel, tagsModel} from "./db"
import { auth } from "./middlewares"
import bcrypt from "bcrypt"

dotenv.config();
const port = process.env.PORT;
const jwt_secret = process.env.JWT_SECRET;
const database_url = process.env.DATABASE_URL;

mongoose.connect(database_url as string);

const app = express();
app.use(express.json())

const passwordSchema = z
    .string()
    .min(8, {message: "Min length: 8"})
    .max(20, {message: "Password is too long"})
    .regex(/[A-Z]/, {message: "Password should have atleast one uppercase character."})
    .regex(/[a-z]/, {message: "Password should have atleast one lowercase character."})
    .regex(/[0-9]/, {message: "Passowrd should contain atleast 1 number."})
    .regex(/[^A-Za-z0-9]/, {message: "Password should contain atleast one special character."})

const signupSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    name: z.string().min(3, {message: "Name is too short. Minimum length: 3"}).max(10, {message: "Name is too long. Maximum length: 10"}),
    password: passwordSchema
})

app.post("/api/v1/signup", async (req, res)=> {
    try {
        const validationResult = signupSchema.safeParse(req.body);
        if (!validationResult.success) {
            res.status(411).json({
                message: "Input Errors.",
                errors: validationResult.error.errors
            });
            return;
        }else{
            const foundData = await userModel.findOne({
                email: validationResult.data?.email
            });
            if (!foundData) {
                const password = validationResult.data.password;
                const hashedPassword = await bcrypt.hash(password, 5);
                await userModel.create({
                    email: validationResult.data?.email,
                    name: validationResult.data?.name,
                    password: hashedPassword
                });
                res.status(200).json({
                    message: "You have signed up!"
                });
                return;
            } else {
                res.status(403).json({
                    message: "Email already exists." 
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error."
        });
        return; 
    }
});

app.post("/api/v1/signin", async (req, res) => {
    try{
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        const foundData = await userModel.findOne({
            email: email,
            name: name
        })
        if(!foundData){
            res.status(403).json({
                message: "Wrong usenrame or email."
            })
        }else{
            const passwordMatch = bcrypt.compare(password, foundData.password);
            if(passwordMatch as object){
                const token = jwt.sign({
                    id: foundData._id
                }, jwt_secret as string)
                res.json({
                    token
                })
            }else{
                res.status(403).json({
                    message: "Wrong password."
                })
            }
        }
    }catch(e){
        res.status(500).json({
            message: "Internal server error."
        })
    }
})

app.post("/api/v1/content", auth, async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    await contentModel.create({
        title: title,
        link: link,
        type: type,
        //@ts-ignore
        user: req.userID,
        tags: []
    })
    res.json({
        message: "Content added."
    })
})

app.get("/api/v1/content", auth, async (req, res) => {
    //@ts-ignore
    const userID = req.userID;
    const foundContent = await contentModel.find({
        user: userID
    }).populate("userID", "name")
    res.json({
        foundContent
    })
})

app.delete("/api/v1/content", auth, async (req, res) => {
    const contentID = req.body.contentID;
    
    await contentModel.deleteMany({
        contentID,
        //@ts-ignore
        user: req.userID
    })
})

app.post("/api/v1/brain/share", auth, (req, res) => {

})
app.listen(port);
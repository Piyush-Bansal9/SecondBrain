import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod"
import {userModel, contentModel, tagsModel} from "./db"
mongoose.connect("mongodb+srv://piyush_bansal9:q91h6gb0kblzqQMz@cluster0.f3dh4.mongodb.net/SecondBrainDatabase");
const JWT_variable = "abcdefghijkl-0123456"

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
            console.log(foundData);
            if (!foundData) {
                await userModel.create({
                    email: validationResult.data?.email,
                    name: validationResult.data?.name,
                    password: validationResult.data?.password
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
app.listen(3000);
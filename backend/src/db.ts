import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
})

const contentSchema = new Schema({
    type: {type: String, required: true},
    link: String,
    
})
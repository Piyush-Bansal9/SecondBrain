import mongoose, { mongo, Schema } from "mongoose";
import { string } from "zod";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
})

const contentSchema = new Schema({
    type: {type: String, required: true},
    link: String,
    user: { type: Schema.Types.ObjectId, required: true}
})

const tagsSchema = new Schema({
    title: String,
})

export const userModel = mongoose.model("user", userSchema);
export const contentModel = mongoose.model("content", contentSchema);
export const tagsModel = mongoose.model("tags", tagsSchema);
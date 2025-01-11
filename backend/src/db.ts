import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
})
export const userModel = mongoose.model("user", userSchema);

const tagSchema = new Schema({
    tag: {type: String, required: true, unique: true}
})
export const tagsModel = mongoose.model("tags", tagSchema);

const contenTypes = ['image', 'video', 'article', 'audio']
const contentSchema = new Schema({
    type: {type: String, enum: contenTypes,  required: true},
    link: {type: String, required: true, unique: true},
    title: {type: String, unique: true, required: true},
    tags: [{type: Schema.Types.ObjectId, required: true, ref: "tags"}],
    user: { type: Schema.Types.ObjectId, required: true, ref: "user"}
})
export const contentModel = mongoose.model("content", contentSchema);
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number },
});

export default model("User", userSchema);

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true, cast: false }, //cast: false bewirkt, dass der value nicht automatisch zum String gecastet wird, sondern akzeptiert ihn nur, wenn er bereits ein String ist
  last_name: { type: String, required: true, cast: false },
  age: { type: Number },
});

export default model("User", userSchema);

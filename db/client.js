import mongoose from "mongoose";

try {
  const url = process.env.MONGO_URI;
  await mongoose.connect(url);
  console.log("DB connected");
} catch (error) {
  console.log(error);
}

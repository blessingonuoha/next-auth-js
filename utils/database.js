import mongoose from "mongoose";

export default async function connetDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "user",
    });
    console.log("database connected");
  } catch (error) {
    console.log("connection failed", error);
  }
}

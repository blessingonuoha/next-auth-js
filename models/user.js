// define the types for ur db schema

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  id: { type: String },
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  email_verified: { type: Boolean, default: false },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// create a model with the schema
const User = models.User || model("User", UserSchema);

export default User;

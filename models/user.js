import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  roll_no: Number,
  name: String,
  subject: String,
});

const Class = new mongoose.model("Class", dataSchema);

export default Class;

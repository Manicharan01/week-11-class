import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);

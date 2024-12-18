import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      enum: ["red", "blue", "green", "yellow", "purple", "white", "black"],
      default: "white",
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;

import express from "express";
import { verifyToken } from "../utils/verfyUser.js";
import {
  createNote,
  getNotesByUserId,
  updateNotePinnedStatus,
  searchNotes,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/note.controller.js";

const router = express.Router();

//Note Routes

router.post("/create-note", verifyToken, createNote);
router.get("/getNotesByUserId", verifyToken, getNotesByUserId);
router.put("/update-note/:id", verifyToken, updateNote);
router.delete("/delete-note/:id", verifyToken, deleteNote);
router.put(
  "/update-note-pinned-status/:id",
  verifyToken,
  updateNotePinnedStatus
);
router.get("/search-notes", verifyToken, searchNotes);
router.get("/get-note-by-id/:id", verifyToken, getNoteById);

export default router;

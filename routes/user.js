import express from "express";
const router = express.Router();

import {
  deleteUser,
  getAllUser,
  getById,
  newUser,
  specialUser,
  updateUser,
} from "../controllers/user.js";

router.get("/all", getAllUser);

router.post("/new", newUser);

router.get("/special", specialUser);

router.get("/:id", getById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
export default router;

import express from "express";
import { users_get, users_post } from "../controllers/users_controller.js";
const router = express.Router();

router.get("/users", users_get);
router.post("/users", users_post);

export default router;

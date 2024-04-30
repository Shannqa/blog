import express from "express";
import { posts_get, posts_post } from "../controllers/posts_controller.js";

const router = express.Router();

router.get("/posts", posts_get);
router.post("/posts", posts_post);

export default router;

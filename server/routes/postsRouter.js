import express from "express";
import {
  posts_get,
  posts_post,
  post_get,
} from "../controllers/posts_controller.js";
import { authJWT } from "../config/auth.js";

const router = express.Router();

router.get("/", posts_get);
router.post("/", authJWT, posts_post);
router.get("/:id", post_get);

export default router;

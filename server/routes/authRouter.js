import express from "express";
import {
  login_get,
  login_post,
  auth_check,
} from "../controllers/auth_controller.js";
import passport from "passport";
import { LocalAuth } from "../config/auth.js";
import User from "../models/userSchema.js";

const router = express.Router();

router.use(passport.session());
passport.use(LocalAuth);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

router.get("/check", auth_check);
router.get("/login", login_get);
router.post("/login", login_post);

export default router;

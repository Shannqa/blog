import express from "express";
import {
  login_get,
  login_post,
  auth_check,
  signup_get,
  signup_post,
  logout_get,
  prot,
} from "../controllers/auth_controller.js";
import passport from "passport";
import { LocalAuth, JwtAuth, authJWT } from "../config/auth.js";
import User from "../models/userSchema.js";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const router = express.Router();

router.use(passport.session());
passport.use(LocalAuth);
passport.use(JwtAuth);

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
router.get("/signup", signup_get);
router.post("/signup", signup_post);
router.get("/logout", logout_get);
router.get("/prot", authJWT, prot);
export default router;

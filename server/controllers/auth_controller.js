import User from "../models/userSchema.js";
import passport from "passport";

const auth_check = async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send(req.body);
  }
};

const login_get = async (req, res) => {};

const login_post = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-failure",
  })(req, res, next);
};

export { login_get, login_post, auth_check };

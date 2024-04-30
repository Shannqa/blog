import session from "express-session";
import passport from "passport";
// import passport-jwt from "passport-jwt";
// import jwt from "jsonwebtoken";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";

const LocalAuth = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return done(null, false, { message: "Incorect username" });
    }
    // const match = await bcrypt.compare(password, user.password);
    const match = password === user.password;
    if (!match) {
      return done(null, false, { message: "Incorect password" });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export { LocalAuth };

/*

curl http://localhost:3000/auth/check

curl http://localhost:3000/auth/login -X POST -H "Content-Type: application/json" -d '{"username": "admin", "password": ""}'

curl http://localhost:3000/api/ -X POST -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiYXNpYSJ9LCJpYXQiOjE3MTQ1MDE3Nzd9.T0vxq5qjDsjX70Ta1zfQdCNBhTXC0tUoOX2e29oOcoo" -d '{"title": "Second article", "content": "This is the content"}'

*/

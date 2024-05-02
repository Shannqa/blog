import createError from "http-errors";
import { configDotenv } from "dotenv";
import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import authRouter from "./routes/authRouter.js";
import postsRouter from "./routes/postsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import apiRouter from "./routes/apiRouter.js";
import connectDB from "./config/db.js";
import MongoStore from "connect-mongo";
import cors from "cors";
const app = express();
app.use(cors());
// to do cors options
/*
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
*/

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

connectDB();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// view engine setup
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/api", apiRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error" });
});

export default app;

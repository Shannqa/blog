import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    message: "Welcome!",
  });
});

router.get("/log", function (req, res) {
  res.json({
    message: "get!",
  });
});

router.post("/log", function (req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body);
  res.send("good");
});

///////////

router.post("/", verifyToken, function (req, res) {
  jwt.verify(req.token, process.env.TOKEN_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "post created!",
        authData,
      });
      // result: {"message":"post created!","authData":{"user":{"id":1,"name":"asia"},"iat":1714501777}}
    }
  });
});

router.get("/login", function (req, res) {
  res.json({
    message: "log",
  });
});

router.post("/login", function (req, res) {
  const user = {
    id: 1,
    name: "asia",
  };
  jwt.sign(
    { user: user },
    process.env.TOKEN_KEY,
    { expiresIn: "7d" },
    (err, token) => {
      res.json({ token: token });
    }
  );
});

// format of token
// Authorization: Bearer <access_token>

function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space
    const bearer = bearerHeader.split(" ");
    // get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

export default router;

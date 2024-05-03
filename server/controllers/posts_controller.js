import Post from "../models/postSchema.js";
import { body, validationResult } from "express-validator";

const posts_get = async (req, res) => {
  try {
    const allPosts = await Post.find()
      .sort({ date: -1 })
      .populate("author")
      .exec();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const posts_post = async (req, res) => {
  console.log(req.user);
  let body = req.body;
  body = { ...body, author: req.user._id };
  console.log(body);
  const post = new Post(body);

  try {
    await post.save();
    res.status(200).json({
      success: true,
      message: "successful",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const post_get = async (req, res) => {
  console.log(req.params.id);
  try {
    const post = await Post.findById(req.params.id).populate("author").exec();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

const post_edit = [
  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Content must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // Process request after validation and sanitization.
  async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Product object with escaped and trimmed data.
    const post = {
      title: req.body.title,
      content: req.body.content,
    };

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      res.status(400).json({
        message: "failure",
        title: post.title ? post.title : "",
        content: post.content ? post.content : "",
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid. Update product.
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, {});
      res.status(200).json({
        success: true,
        message: "successful",
      });
    }
  },
];

export { posts_get, posts_post, post_get, post_edit };

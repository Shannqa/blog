import Post from "../models/postSchema.js";

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

export { posts_get, posts_post, post_get };

import Post from "../models/postSchema.js";

const posts_get = async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ date: 1 }).exec();
    res.send(allPosts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const posts_post = async (req, res) => {
  const post = new Post(req.body);

  try {
    await post.save();
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { posts_get, posts_post };

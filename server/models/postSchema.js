import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectID,
    ref: "User",
    required: false,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;

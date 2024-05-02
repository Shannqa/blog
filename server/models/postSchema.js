import mongoose from "mongoose";
import { DateTime } from "luxon";

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
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
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

PostSchema.virtual("date_formatted").get(function () {
  let date = this.date
    ? DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATETIME_MED)
    : "";
  return date;
});

const Post = mongoose.model("Post", PostSchema);

export default Post;

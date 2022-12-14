import mongoose from "mongoose";

interface books {
  title: string;
  category: string;
  summary: string;
  views: [];
  ISBN: string;
  author: string;
  authorImage: string;
  coverImage: string;
}

interface Ibooks extends books, mongoose.Document {}

const bookShema = new mongoose.Schema(
  {
    title: String,
    category: String,
    summary: String,
    views: [],
    ISBN: String,
    author: String,
    authorImage: String,
    coverImage: String,
  },
  { timestamps: true }
);

export default mongoose.model<Ibooks>("books", bookShema);

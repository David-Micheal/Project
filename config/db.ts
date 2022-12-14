import mongoose from "mongoose";

const URI: string = "mongodb://localhost";
const lifeURI: string =
  "mongodb+srv://David-Micheal:Davidmicheal2003@cluster0.oljuddh.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })

  .once("error", () => {
    console.log("Failed to Connect to DataBase");
  });

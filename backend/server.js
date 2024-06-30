import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

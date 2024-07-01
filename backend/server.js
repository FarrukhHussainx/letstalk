import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./router/auth.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

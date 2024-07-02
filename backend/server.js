import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./router/auth.js";
import messageRouter from "./router/message.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

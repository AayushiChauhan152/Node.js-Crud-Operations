import express from "express";
import userRouter from "./routes/user.js";
import "dotenv/config";

export const app = express();

//using middlewares
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("I am working");
});

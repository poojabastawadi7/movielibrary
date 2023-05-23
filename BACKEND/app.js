import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-route";

const app = express();

app.use(cors({
   origin: "http://localhost:3000",
   methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(express.json());
//middleware
app.use("/users", userRouter);
mongoose
.connect('mongodb://127.0.0.1:27017/moviesdb')
  .then(() => app.listen(5000, () => {
    console.log("Connected to database and server is running");
    }) )
   .catch((e) => console.log(e));





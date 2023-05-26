import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-route";
import adminRouter from "./routes/admin.route";
import dotenv from "dotenv";
import movieRouter from "./routes/movie.route";

dotenv.config();

const app = express();

app.use(cors({
   origin: "http://localhost:3000",
   methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(express.json());
//middleware
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);


mongoose
.connect('mongodb://127.0.0.1:27017/moviesdb')
  .then(() => app.listen(5000, () => {
    console.log("Connected to database and server is running");
    }) )
   .catch((e) => console.log(e));





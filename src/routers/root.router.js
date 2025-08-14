import express from "express";
import resRouter from "./res.Router";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import likeRouter from "./like.router";
import ratingRouter from "./rating.router";


const rootRouter = express.Router();
rootRouter.use("/auth", authRouter);
// rootRouter.use(protect); // Apply the protect middleware to all routes
rootRouter.use("/user", userRouter);
rootRouter.use("/res", resRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/rating", ratingRouter);

export default rootRouter;
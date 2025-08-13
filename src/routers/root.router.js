import express from "express";
import resRouter from "./res.Router";
import userRouter from "./user.router";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/res", resRouter);

export default rootRouter;
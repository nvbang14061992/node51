import express from "express";
import resRouter from "./res.Router";
import uesrRouter from "./user.router";

const rootRouter = express.Router();

uesrRouter.use("/user", uesrRouter);
rootRouter.use("/res", resRouter);

export default rootRouter;
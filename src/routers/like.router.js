import likeController from "../controllers/like.controller";
import express from "express";
import { protect } from "../common/middlewares/protect.middleware";

const likeRouter = express.Router();

likeRouter.use(protect);

likeRouter.post("/toggle-like", likeController.toggleLike);

export default likeRouter;
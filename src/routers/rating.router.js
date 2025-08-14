import ratingController from "../controllers/rating.controller";
import express from "express";
import { protect } from "../common/middlewares/protect.middleware";

const ratingRouter = express.Router();

ratingRouter.use(protect);

ratingRouter.post("/create-rate", ratingController.createRating);

export default ratingRouter;

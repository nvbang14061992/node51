
import express from "express";
import { protect } from "../common/middlewares/protect.middleware";
import orderController from "../controllers/order.controller";

const orderRouter = express.Router();

orderRouter.use(protect);

orderRouter.get("/foods", orderController.getAllFoods);
orderRouter.get("/subfoods", orderController.getAllSubfoods);
orderRouter.post("/create-order", orderController.createNewOrder);

export default orderRouter;
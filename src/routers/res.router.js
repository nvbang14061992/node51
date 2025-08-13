import express from "express";
import resController from "../controllers/res.controller";
import { protect } from "../common/middlewares/protect.middleware";

const resRouter = express.Router();
/**
 * - Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
 */

resRouter.use(protect); // Apply the protect middleware to all routes
// lay danh sach nhà hàng
resRouter.get("/", resController.getAllRestaurants);

// lay danh sach like theo nha hang
resRouter.get("/:restaurantId/likes", resController.getLikesByRestaurant);

export default resRouter;
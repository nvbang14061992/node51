import express from "express";
import resController from "../controllers/res.controller";

const resRouter = express.Router();
/**
 * - Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
 */
// lay danh sach nhà hàng
resRouter.get("/", resController.getAllRestaurants);

// lay danh sach like theo nha hang
resRouter.get("/:restaurantId/likes", resController.getLikesByRestaurant);

// lay danh sach unlike theo nha hang
resRouter.get("/:restaurantId/unlikes", resController.getUnlikesByRestaurant);

export default resRouter;
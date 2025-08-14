import { protect } from "../common/middlewares/protect.middleware";
import userController from "../controllers/user.controller";

import express from "express";

const userRouter = express.Router();
/**
 * - Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
 */
// lay danh sach user
userRouter.use(protect); // Apply the protect middleware to all routes
userRouter.get("/", userController.getAllUsers);

// lay danh sach like theo user
userRouter.get("/likes", userController.getLikesByUser);
userRouter.get("/ratings", userController.getRatingsByUser);

export default userRouter;
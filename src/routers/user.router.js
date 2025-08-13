import userController from "../controllers/user.controller";

import express from "express";

const userRouter = express.Router();
/**
 * - Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
 */
// lay danh sach user
userRouter.get("/", userController.getAllUsers);

// lay danh sach like theo user
userRouter.get("/:userId/likes", userController.getLikesByUser);

export default userRouter;
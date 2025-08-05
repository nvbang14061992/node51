import userController from "../controllers/user.controller";

import express from "express";

const uesrRouter = express.Router();
/**
 * - Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và
user)
 */
// lay danh sach user
uesrRouter.get("/", userController.getAllUsers);

// lay danh sach like theo user
uesrRouter.get("/:userId/likes", userController.getLikesByUser);

// lay danh sach unlike theo user
uesrRouter.get("/:userId/unlikes", userController.getUnlikesByUser);

export default uesrRouter;
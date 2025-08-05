import userService from "../services/user.service";
import { responseSuccess } from "../helpers/response.helper";

const userController = {

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            if (!users || users.length === 0) {
                return res.status(404).json({ message: "No users found." });
            }
            const resData = responseSuccess(users, "Users retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },
    //
    getLikesByUser: async (req, res, next) => {
        try {
            const likes = await userService.getLikesByUser(req.params.userId);
            if (!likes || likes.length === 0) {
                return res.status(404).json({ message: "No likes found for this user." });
            }
            const resData = responseSuccess(likes, "Likes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    getUnlikesByUser: async (req, res, next) => {
        try {
            const unlikes = await userService.getUnlikesByUser(req.params.userId);
            if (!unlikes || unlikes.length === 0) {
                return res.status(404).json({ message: "No unlikes found for this user." });
            }
            const resData = responseSuccess(unlikes, "Unlikes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default userController;
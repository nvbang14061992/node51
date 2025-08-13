import userService from "../services/user.service";
import { responseSuccess } from "../common/helpers/response.helper";

const userController = {

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
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
            const likes = await userService.getLikesByUser(req.user.user_id);
            const resData = responseSuccess(likes, "Likes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default userController;
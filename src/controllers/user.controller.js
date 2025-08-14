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
    
    getLikesByUser: async (req, res, next) => {
        try {
            const result = await userService.getLikesByUser(req.user.user_id);
            const message = result.length === 0 ? "User did not like any restaurant" :  "Likes retrieved successfully"
            const resData = responseSuccess(result, message);
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    getRatingsByUser: async (req, res, next) => {
        try {
            const result = await userService.getRatingsByUser(req.user.user_id);
            const message = result.length === 0 ? "User did not rate any restaurant" :  "Ratings retrieved successfully"
            const resData = responseSuccess(result, message);
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    createNewOrder: async (req, res, next) => {
        try {
            const result = await userService.createNewOrder(req);
            const resData = responseSuccess(result, "Order created successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default userController;
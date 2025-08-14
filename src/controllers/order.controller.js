import { responseSuccess } from "../common/helpers/response.helper";
import orderService from "../services/order.service";


const orderController = {
    getAllFoods: async (req, res, next) => {
        try {
            const result = await orderService.getAllFoods(req);
            const resData = responseSuccess(result, "Get all foods successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    getAllSubfoods: async (req, res, next) => {
        try {
            const result = await orderService.getAllSubfoods(req);
            const resData = responseSuccess(result, "Get all foods successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    createNewOrder: async (req, res, next) => {
        try {
            const result = await orderService.createNewOrder(req);
            const resData = responseSuccess(result, "Order created successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default orderController;
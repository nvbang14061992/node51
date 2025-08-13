import { responseSuccess } from "../helpers/response.helper";
import resService from "../services/res.service";

const resController = {

    getAllRestaurants: async (req, res, next) => {
        try {
            const restaurants = await resService.getAllRestaurants();
            const resData = responseSuccess(restaurants, "Restaurants retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },
    //
    getLikesByRestaurant: async (req, res, next) => {
        try {
            const result = await resService.getLikesByRestaurant(req.params.restaurantId);
            const resData = responseSuccess(result, "Likes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default resController;
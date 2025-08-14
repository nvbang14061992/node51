import { responseSuccess } from "../common/helpers/response.helper";
import resService from "../services/res.service";

const resController = {

    getAllRestaurants: async (req, res, next) => {
        const result = await resService.getAllRestaurants();
        const resData = responseSuccess(result, "Restaurants retrieved successfully");
        res.status(resData.statusCode).json(resData);
    },
    //
    getLikesByRestaurant: async (req, res, next) => {
        const result = await resService.getLikesByRestaurant(req.params.restaurantId);
        const message = result.length === 0 ? "The restaurant got no like" : "Likes retrieved successfully"
        const resData = responseSuccess(result, message);
        res.status(resData.statusCode).json(resData);
    },

    getRatingsByRestaurant: async (req, res, next) => {
        const result = await resService.getRatingsByRestaurant(req.params.restaurantId);
        const message = result.length === 0 ? "The restaurant got no rating" : "Ratings retrieved successfully"
        const resData = responseSuccess(result, message);
        res.status(resData.statusCode).json(resData);
    }
}


export default resController;
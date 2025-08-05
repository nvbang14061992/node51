import { responseSuccess } from "../helpers/response.helper";
import resService from "../services/res.service";

const resController = {

    getAllRestaurants: async (req, res, next) => {
        try {
            const restaurants = await resService.getAllRestaurants();
            if (!restaurants || restaurants.length === 0) {
                return res.status(404).json({ message: "No restaurants found." });
            }
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
            const result = resService.getLikesByRestaurant(req.params.restaurantId);
            if (!result) {
                return res.status(404).json({ message: "No likes found for this restaurant." });
            }
            const resData = responseSuccess(result, "Likes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    },

    getUnlikesByRestaurant: async (req, res, next) => {
        try {
            const result = resService.getUnlikesByRestaurant(req.params.restaurantId);
            if (!result) {
                return res.status(404).json({ message: "No unlikes found for this restaurant." });
            }
            const resData = responseSuccess(result, "Unlikes retrieved successfully");
            res.status(resData.statusCode).json(resData);
        } catch (error) {
            // move all error to appError middleware
            next(error);
        }
    }
}


export default resController;
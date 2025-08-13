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
        const resData = responseSuccess(result, "Likes retrieved successfully");
        res.status(resData.statusCode).json(resData);
    }
}


export default resController;
import ratingService from "../services/rating.service";
import { responseSuccess } from "../common/helpers/response.helper";

const ratingController = {
    createRating: async (req, res, next) => {
        const result = await ratingService.createRating(req.user.user_id, req.body.restaurantId, req.body.amount);
        const message = !result ? "You have already rated this restaurant" : "Rating created successfully";
        const resData = responseSuccess(result, message);
        res.status(resData.statusCode).json(resData);
    },
}

export default ratingController;
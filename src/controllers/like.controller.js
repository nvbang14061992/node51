import likeService from "../services/like.service";

import { responseSuccess } from "../common/helpers/response.helper";

const likeController = {
    toggleLike: async (req, res, next) => {
        const result = await likeService.toggleLike(req.user.user_id, req.params.restaurantId);
        const resData = responseSuccess(result, "Like toggled successfully");
        res.status(resData.statusCode).json(resData);
    }
};


export default likeController;
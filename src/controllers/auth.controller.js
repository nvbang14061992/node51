import { responseSuccess } from "../common/helpers/response.helper";
import { authService } from "../services/auth.service";

const authController = {
    login: async (req, res, next) => {
        const result = await authService.login(req);
        const resData = responseSuccess(result, "Login successful");
        res.status(resData.statusCode).json(resData);
    },

    getInfo: async (req, res, next) => {},

    refeshToken: async (req, res, next) => {
        const result = await authService.refeshToken(req);
        const resData = responseSuccess(result, "Login successful");
        res.status(resData.statusCode).json(resData);
    }
};

export default authController;
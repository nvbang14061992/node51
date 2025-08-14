import { responseSuccess } from "../common/helpers/response.helper";
import { authService } from "../services/auth.service";

const authController = {
    register: async (req, res, next) => {
        const result = await authService.register(req);
        const resData = responseSuccess(result, "Register successfully");
        res.status(resData.statusCode).json(resData);
    },

    login: async (req, res, next) => {
        const result = await authService.login(req);
        const resData = responseSuccess(result, "Login successfully");
        res.status(resData.statusCode).json(resData);
    },

    refeshToken: async (req, res, next) => {
        const result = await authService.refeshToken(req);
        const resData = responseSuccess(result, "Refresh accessToken successfully");
        res.status(resData.statusCode).json(resData);
    }
};

export default authController;
import { responseError } from "../helpers/response.helper";

export const appError = (err, req, res, next) => {
    const resData = responseError(err?.message, err?.code, err?.stack);
    res.status(resData.statusCode).json(resData);
    console.log("-->>>>>>>>>>>> Special Middleware");
};
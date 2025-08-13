import jwt from 'jsonwebtoken';
import {
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRED_IN,
    REFRESH_TOKEN_EXPIRED_IN
} from '../common/constant/app.constant.js';

export const tokenService = {
    generateTokens: (userId) => {
        const accessToken = jwt.sign(
            { userId }, 
            ACCESS_TOKEN_SECRET, 
            { expiresIn: ACCESS_TOKEN_EXPIRED_IN });

        const refreshToken = jwt.sign(
            { userId }, 
            REFRESH_TOKEN_SECRET, 
            { expiresIn: REFRESH_TOKEN_EXPIRED_IN });

        return {accessToken: accessToken, refreshToken: refreshToken};
    },
    verifyAccessToken: (accessToken, option) => {
        const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET, option);
        return decoded;
    },
    verifyRefreshToken: (refreshToken) => {
        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
        return decoded;
    },
}; 
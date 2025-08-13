import { BadRequestException } from "../common/helpers/exception.helper";
import bcrypt from "bcrypt";
import { tokenService } from "./token.service";
import prismaObj from "../common/prisma/init.prisma";


export const authService = {
    login: async (req) => {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new BadRequestException("Email and password are required");
        }
        console.log({ email, password });
        // fetch user from database
        const user = await prismaObj.user.findUnique({
            where: { 
                email: email
            }
        });


        if (!user) {
            throw new BadRequestException("User not found");
        }

        // verify password
        // verify for old password, not hashed password
        let isPasswordValid = false;
        if (user.user_id <= 10) {
            isPasswordValid = password === user.password;
        }
        else {
            isPasswordValid = await bcrypt.compare(password, user.password);
        }

        if (!isPasswordValid) {
            throw new BadRequestException("Invalid password");
        }

        // generate tokens
        const tokens = tokenService.generateTokens(user.user_id);

        return tokens;
    },

    refeshToken: async (req) => {
        const { accessToken, refreshToken } = req.body;
        // can not use verifying access token here because it was expired
        const decodeAccessToken =  tokenService.verifyAccessToken(accessToken, { ignoreExpiration: true }); 
        const decodeRefeshToken =  tokenService.verifyRefreshToken(refreshToken); 

        if (decodeAccessToken.userId !== decodeRefeshToken.userId) throw new UnauthrozedException(`Invalid tokens`);

        const user = await prismaObj.user.findUnique({
            where: {
                user_id: Number(decodeAccessToken.userId)
            }
        })

        if (!user) throw new UnauthrozedException(`User not found`);

        const tokens = tokenService.generateTokens(user.user_id);
        return tokens;
   },
}
import prismaObj from "../common/prisma/init.prisma";
import { BadRequestException, ForbiddenException, UnauthrozedException } from "../helpers/exception.helper";
import likeService from "./like.service";

const userService = {
    getAllUsers: async () => {
        // Fetching users from a database via sequelize or prisma
        const users = await prismaObj.user.findMany();
        if (!users || users.length === 0) {
            throw new BadRequestException("No users found.");
        }
        return users;
    },

    getLikesByUser: async (userId) => {
        // Fetching likes from a database via sequelize or prisma
        const likes = await likeService.getAllLikes();
        if (!likes || likes.length === 0) {
            throw new BadRequestException("No likes found for this restaurant");
        }
        const result = likes.filter(like => like.user_id === Number(userId));
        if (!result || result.length === 0) {
            throw new BadRequestException("No likes found for this user");
        }
        return result;
    }
}


export default userService;
import prismaObj from "../common/prisma/init.prisma";
import { BadRequestException } from "../common/helpers/exception.helper";
import likeService from "./like.service";
import ratingService from "./rating.service";
import { responseSuccess } from "../common/helpers/response.helper";



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
            throw new BadRequestException("No likes data found");
        }
        const result = likes.filter(like => like.user_id === Number(userId));
        return result;
    },

    getRatingsByUser: async (userId) => {
        // fetching ratings from a database via sequelize or prisma
        const ratings = await ratingService.getAllRating();
        if (!ratings || ratings.length === 0) {
            throw new BadRequestException("No ratings found");
        }
        const result = ratings.filter(rate => rate.user_id === Number(userId));
        return result;
    },
}


export default userService;
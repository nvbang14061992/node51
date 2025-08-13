import prismaObj from "../common/prisma/init.prisma";
import { BadRequestException, ForbiddenException, UnauthrozedException } from "../helpers/exception.helper";
import likeService from "./like.service";


const resService = {
    _getAllRestaurants: async () => {
        // Fetching restaurants from a database via sequelize or prisma
        const restaurants = await prismaObj.restaurant.findMany();
        return restaurants;
    },

    getAllRestaurants: async () => {
        // Fetching restaurants from a database via sequelize or prisma
        const restaurants = await resService._getAllRestaurants();
        if (!restaurants || restaurants.length === 0) {
            throw new BadRequestException("No restaurants found");
        }
        return restaurants;
    },
    
    getLikesByRestaurant: async (restaurantId) => {
        // Fetching likes from a database via sequelize or prisma
        const likes = await likeService.getAllLikes();
        if (!likes || likes.length === 0) {
            throw new BadRequestException("No likes found for this restaurant");
        }
        const result = likes.filter(like => like.res_id === Number(restaurantId));
        if (!result || result.length === 0) {
            throw new BadRequestException("No likes found for this restaurant");
        }
        return result;
    }
}


export default resService;
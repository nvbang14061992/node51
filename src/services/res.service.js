import prismaObj from "../common/prisma/init.prisma";
import { BadRequestException } from "../common/helpers/exception.helper";
import likeService from "./like.service";
import ratingService from "./rating.service";


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
            throw new BadRequestException("No likes data found");
        }
        const result = likes.filter(like => like.res_id === Number(restaurantId));
        return result;
    },

    getRatingsByRestaurant: async (restaurantId) => {
        // Fetching likes from a database via sequelize or prisma
        const rates = await ratingService.getAllRating();
        if (!rates || rates.length === 0) {
            throw new BadRequestException("No ratings data found");
        }
        const result = rates.filter(rate => rate.res_id === Number(restaurantId));
        return result;
    },
}


export default resService;
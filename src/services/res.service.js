import { BadRequestException, ForbiddenException, UnauthrozedException } from "../helpers/exception.helper";



const resService = {
    getAllRestaurants: async () => {
        // Fetching restaurants from a database via sequelize or prisma
        const restaurants = []
        return restaurants;
    },
    
    getLikesByRestaurant(restaurantId) {
        // Fetching likes from a database via sequelize or prisma
        const likes = [];
        return likes.filter(like => like.restaurantId === restaurantId);
    },

    getUnlikesByRestaurant(restaurantId) {
        // Fetching unlikes from a database via sequelize or prisma
        const unlikes = [];
        return unlikes.filter(unlike => unlike.restaurantId === restaurantId);
    }
}

export default resService;
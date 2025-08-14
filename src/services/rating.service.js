import prismaObj from "../common/prisma/init.prisma";

const ratingService = {
    createRating: async (userId, resId, amount) => {
        // check if user has already rated the restaurant, if yes, prevent duplicate ratings, else create a new rating
        const existingRate = await prismaObj.rate_res.findFirst({
            where: {
                    user_id: userId,             // string variable with user ID
                    res_id: resId  // string variable with restaurant ID
            }});

        if (existingRate) {
            return null;
        } else {
            const newRating = await prismaObj.rate_res.create({
                data: {
                    user_id: userId,
                    res_id: resId,
                    amount: amount
                }
            })
            return {message: "Rating added", rate: newRating};
        }
    },
    
    getAllRating: async () => {
        // Fetching likes from a database via sequelize or prisma
        const rates = await prismaObj.rate_res.findMany();
        return rates;
    },
};

export default ratingService;
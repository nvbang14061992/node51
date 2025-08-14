import prismaObj from "../common/prisma/init.prisma";

const likeService = {
    toggleLike: async (userId, resId) => {
        // toggle like restaurant (like -> unlike or unlike -> like), via prisma with given userId and restaurantId
        
        // Check if the user has already liked the restaurant, remove like if exists, otherwise create a new like
        const existingLike = await prismaObj.like_res.findFirst({
            where: {
                    user_id: userId,             // string variable with user ID
                    res_id: resId  // string variable with restaurant ID
            }});
        
        if (existingLike) {
            // If like exists, delete it
            await prismaObj.like_res.delete({
                where: {
                    id: existingLike.id
                }
            });
            return {message: "Like removed"};
        } else {
            // If like does not exist, create a new like
            const newLike = await prismaObj.like_res.create({
                data: {
                    user_id: userId,
                    res_id: resId
                }
            });
            return {message: "Like added", like: newLike};
        }
    },
    
    getAllLikes: async () => {
        // Fetching likes from a database via sequelize or prisma
        const likes = await prismaObj.like_res.findMany();
        return likes;
    },
};

export default likeService;
import prismaObj from "../common/prisma/init.prisma";

const likeService = {
    toggleLike: async () => {
        // toggle like restaurant (like -> unlike or unlike -> like), via prisma with given u
        const likes = [];
        return likes;
    },
    
    getAllLikes: async () => {
        // Fetching likes from a database via sequelize or prisma
        const likes = await prismaObj.like_res.findMany();
        return likes;
    },
};

export default likeService;
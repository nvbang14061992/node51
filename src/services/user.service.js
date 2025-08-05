const userService = {
    getAllUsers: async () => {
        // Fetching users from a database via sequelize or prisma
        const users = [];
        return users;
    },

    getLikesByUser: async (userId) => {
        // Fetching likes from a database via sequelize or prisma
        const likes = [];
        return likes.filter(like => like.userId === userId);
    },

    getUnlikesByUser: async (userId) => {
        // Fetching unlikes from a database via sequelize or prisma
        const unlikes = [];
        return unlikes.filter(unlike => unlike.userId === userId);
    }
}


export default userService;
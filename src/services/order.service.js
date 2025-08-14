import { where } from "sequelize";
import { BadRequestException } from "../common/helpers/exception.helper";
import prismaObj from "../common/prisma/init.prisma";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStringWithRandomNumber(min, max, message = "Random number") {
  const num = getRandomNumber(min, max);
  return `${message}${num}`;
}

const orderService = {
    getAllFoods: async (req) => {
        // Fetching foods from a database via prisma
        const result = await prismaObj.food.findMany();
        if (!result || result.length === 0) {
            throw new BadRequestException("No food data!!!")
        }

        return result;
    },

    getAllSubfoods: async (req) => {
        // Fetching foods from a database via prisma
        const result = await prismaObj.sub_food.findMany();
        if (!result || result.length === 0) {
            throw new BadRequestException("No sub food data!!!")
        }

        return result;
    },

    createNewOrder: async (req) => {
        const userId = req.user.user_id;
        const {food_id, arr_sub_id, amount} = req.body;
        // check if valid food_id
        const isExistingFoodId = await prismaObj.food.findUnique({
            where: {
                food_id: food_id
            }
        });
        if (!isExistingFoodId) throw new BadRequestException("Food id does not exist!!!")

        const isExistingSubFoodId = await prismaObj.sub_food.findUnique({
            where: {
                sub_id: arr_sub_id
            }
        });
        if (!isExistingSubFoodId) throw new BadRequestException("Subfood id does not exist!!!")
        
        // new order
        const newOrderCode = createStringWithRandomNumber(0, 10000000, "ORD")
        const newOrder = prismaObj.order.create({
            data: {
                user_id: userId,
                food_id: food_id,
                arr_sub_id: `${arr_sub_id}`,
                amount: amount,
                code: newOrderCode
            }
        });
        return newOrder
    }
};

export default orderService;
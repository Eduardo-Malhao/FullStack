import { IBodyFavoites } from "../interfaces/IBodyFavorites";

export default class FavoritesDto{
    
    public static BodyToFavorites(body: any, id: number) : IBodyFavoites {
        return {
            userId: id,
            mealId: body?.mealId,
            drinkId: body?.drinkId
        };
    }
}
import Model from '../model/FavoritesModel';
import { IFavorites } from '../interfaces/IFavorites';
import { IBodyFavoites } from '../interfaces/IBodyFavorites';

export default class FavoritesService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async favorite(ids: IBodyFavoites): Promise<any> {
    try {
      if(ids.drinkId) {
        const response = await this.model.favorite(ids);
        return { status: 'SUCCESS', data: response };
      }
      if (ids.mealId) {
        const response = await this.model.favorite(ids);
        return { status: 'SUCCESS', data: response };
      }

      return { status: 'NOT_FOUND', data: 'Meal or Drink Not Found' };

    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
    }


  public async getAllFavorites(id: number): Promise<any> {
      try {
        const response = await this.model.getAllFavorites(id);
        if (response !== null) return { status: 'SUCCESS', data: response };

        return { status: 'NOT_FOUND', data: `You don't have favorites` };
        
			} catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
      }
  }

  public async getAllMealsFavorites(id: number): Promise<any> {
      try {
        const response = await this.model.getAllMealsFavorites(id);
        if (response !== null) return { status: 'SUCCESS', data: response };

        return { status: 'NOT_FOUND', data: `You don't have Meals favorites` };
        
			} catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
      }
	}

  public async getAllDrinksFavorites(id: number): Promise<any> {
    try {
      const response = await this.model.getAllDrinksFavorites(id);
      if (response !== null) return { status: 'SUCCESS', data: response };

      return { status: 'NOT_FOUND', data: `You don't have Drinks favorites` };

    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
  }


  public async unfavorite(ids: IBodyFavoites)
	: Promise<any> {
		try{
			const response = await this.model.unfavorite(ids);
			if (response !== null) return { status: 'SUCCESS', data: `Favorite deleted` };

			return { status: 'NOT_FOUND', data: `Favorite not found` };

		} catch (error) {
			return { status: 'CONFLICT', data: 'Internal error' };
		}
  }
}

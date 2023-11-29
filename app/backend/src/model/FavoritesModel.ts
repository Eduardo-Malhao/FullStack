import { Op } from 'sequelize';
import Model from '../database/models/Favorites';
import { IBodyFavoites } from '../interfaces/IBodyFavorites';
import { IFavorites } from '../interfaces/IFavorites';
import FreeAPIMealsSequelize from '../database/models/FreeAPIMealsSequelize';
import FreeAPIDrinksSequelize from '../database/models/FreeAPIDrinksSequelize';

export default class UsersModel {
  private model = Model;

    public async favorite(ids: IBodyFavoites)
        : Promise<IFavorites> {
            const response = await this.model.create({
                userId: ids.userId,
                mealId: ids?.mealId,
                drinkId: ids?.drinkId,
            });
            return response;
        }
        
        public async getAllFavorites(id: number)
        : Promise<any> {
            const response = await this.model.findAll({ where: { userId: id } })

            return response;
        }

        public async getAllMealsFavorites(id: number)
        : Promise<any> {
            const response = await this.model.findAll({
                where: { userId: id },
                include: [ { model: FreeAPIMealsSequelize, as: 'meal', attributes: { exclude: ['id'] } } ]
                        // where: { user_id: userId, meal_id: {[this.Sequelize.Op.ne]: null} },
            })

            return response;
        }


        public async getAllDrinksFavorites(id: number)
        : Promise<any> {
					const response = await this.model.findAll({
						where: { userId: id },
						include: [ { model: FreeAPIDrinksSequelize, as: 'drink', attributes: { exclude: ['id'] } } ]
										// where: { user_id: userId, meal_id: {[this.Sequelize.Op.ne]: null} },
				})

				return response;
        }
    
        public async unfavorite(ids: IBodyFavoites)
        : Promise<any> {
					const response = await this.model.destroy({
						where: {
							userId: ids.userId,
							mealId: ids?.mealId,
							drinkId: ids?.drinkId
						}
					})

					return response;
        }
}

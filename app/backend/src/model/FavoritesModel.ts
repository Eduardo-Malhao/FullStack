import { Op } from 'sequelize';
import Model from '../database/models/Favorites';
import { IBodyFavorites } from '../interfaces/IBodyFavorites';
import { IFavorites } from '../interfaces/IFavorites';
import FreeAPIMealsSequelize from '../database/models/FreeAPIMealsSequelize';
import FreeAPIDrinksSequelize from '../database/models/FreeAPIDrinksSequelize';

export default class UsersModel {
  private model = Model;

    public async favorite(ids: IBodyFavorites)
        : Promise<IFavorites> {
            console.log('ssss');
            
            const response = await this.model.create({
                user_id: ids.user_id,
                meal_id: ids?.meal_id,
                drink_id: ids?.drink_id,
            });
            console.log(response);
            
            return response;
        }
        
        public async getAllFavorites(id: number)
        : Promise<any> {
            const response = await this.model.findAll({ where: { user_id: id } })

            return response;
        }

        public async getAllMealsFavorites(id: number)
        : Promise<any> {
            const response = await this.model.findAll({
                where: { user_id: id },
                include: [ { model: FreeAPIMealsSequelize, as: 'meal', attributes: { exclude: ['id'] } } ]
                        // where: { user_id: userId, meal_id: {[this.Sequelize.Op.ne]: null} },
            })

            return response;
        }


        public async getAllDrinksFavorites(id: number)
        : Promise<any> {
					const response = await this.model.findAll({
						where: { user_id: id },
						include: [ { model: FreeAPIDrinksSequelize, as: 'drink', attributes: { exclude: ['id'] } } ]
										// where: { user_id: userId, meal_id: {[this.Sequelize.Op.ne]: null} },
				})

				return response;
        }
    
        public async unfavorite(ids: IBodyFavorites)
        : Promise<any> {
					const response = await this.model.destroy({
						where: {
							user_id: ids.user_id,
							meal_id: ids?.meal_id,
							drink_id: ids?.drink_id
						}
					})

					return response;
        }
}

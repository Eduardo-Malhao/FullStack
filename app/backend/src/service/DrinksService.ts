import Model from '../model/DrinksModel';
import { IServiceDrinks } from '../interfaces/IServiceDrinks';

export default class DrinksService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async getDrinks(search: string | null | undefined)
    : Promise<IServiceDrinks> {
        try {
            if(search.name) {
                const response = await this.model.findByName(search.name);
                if (response) return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: 'Not Found' };
            }
            if (search.first) {
                const response = await this.model.findByLetter(search.first);
                if (response) return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: 'Not Found' };
            }
            if (search.ingredient) {
                const response = await this.model.findByIngredient(search.ingredient);
                if (response) return { status: 'SUCCESS', data: response };
                return { status: 'NOT_FOUND', data: 'Not Found' };
            }
            const response = await this.model.findAll();
            return { status: 'SUCCESS', data: response };
        } catch (error) {
            return { status: 'CONFLICT', data: 'Internal error' };
        }
  }
}

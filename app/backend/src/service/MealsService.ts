import { ParsedQs } from 'qs';
import Model from '../model/MealsModel';
import { IServiceMeals } from '../interfaces/IServiceMeals';

export default class DrinksService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async getMeals(search: ParsedQs | null | undefined): Promise<IServiceMeals> {
    try {
      if (search) {
        if (typeof search === 'string') {
          // Handle the case where search is a string
          // For example, you might want to search for a specific drink by ID
        } else if (typeof search === 'object') {
          if (search.ingredient) {
            const response = await this.model.findByIngredient(search.ingredient as string);
            if (response) return { status: 'SUCCESS', data: response };
            return { status: 'NOT_FOUND', data: 'Not Found' };
          }
          if (search.name) {
            const response = await this.model.findByName(search.name as string);
            if (response) return { status: 'SUCCESS', data: response };
            return { status: 'NOT_FOUND', data: 'Not Found' };
          }
          if (search.first) {
            const response = await this.model.findByLetter(search.first as string);
            if (response) return { status: 'SUCCESS', data: response };
            return { status: 'NOT_FOUND', data: 'Not Found' };
          }
        }
      }

      // If no specific search parameters are provided, fetch all drinks
      const response = await this.model.findAll();
      return { status: 'SUCCESS', data: response };
    } catch (error) {
      return { status: 'CONFLICT', data: 'Internal error' };
    }
  }
}

import { IIngredients } from './IIngredients';

export interface IDrinks {
    id: number;
    drink_name: string;
    drink_category: string;
    drink_glass: string;
    alcoholic: string;
    drink_instructions: string;
    drink_image: string;
    drink_tag: string;
    drink_video: string;
    drink_ingredients: IIngredients[];
}
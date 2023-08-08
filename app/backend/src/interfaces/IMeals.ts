import { IIngredients } from "./IIngredients";

export interface IMeals {
    id: number;
    meal_name: string;
    meal_category: string;
    meal_area: string;
    meal_Instructions: string;
    meal_image: string;
    meal_tag: string;
    meal_video: string;
    meal_ingredients: IIngredients[];
}
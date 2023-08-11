// import {
//     DataTypes,
//     Model,
//     InferAttributes,
//     InferCreationAttributes,
//     CreationOptional,
//   } from 'sequelize';
//   import db from '.';
  
//   class MealsIngredients extends Model<
//     InferAttributes<MealsIngredients>,
//     InferCreationAttributes<MealsIngredients>
//   > {
//     declare id: CreationOptional<number>;
//     declare quantity: string;
//   }
  
//   MealsIngredients.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       quantity: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize: db,
//       modelName: 'meals_ingredients',
//       timestamps: false,
//       underscored: true,
//     }
//   );
  
//   import Meals from './__MealsModel';
//   import Ingredients from './__IngredientsModel';
  
//   MealsIngredients.belongsTo(Meals, { foreignKey: 'meal_id', onDelete: 'CASCADE' });
//   MealsIngredients.belongsTo(Ingredients, { foreignKey: 'ingredient_id', onDelete: 'CASCADE' });
  
//   export default MealsIngredients;
  
// import {
//     DataTypes,
//     Model,
//     InferAttributes,
//     InferCreationAttributes,
//     CreationOptional,
//   } from 'sequelize';
//   import db from '.';
  
//   class DrinksIngredients extends Model<
//     InferAttributes<DrinksIngredients>,
//     InferCreationAttributes<DrinksIngredients>
//   > {
//     declare id: CreationOptional<number>;
//     declare quantity: string;
//   }
  
//   DrinksIngredients.init(
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
//       modelName: 'drinks_ingredients',
//       timestamps: false,
//       underscored: true,
//     }
//   );
  
//   import Drinks from './__DrinksModel';
//   import Ingredients from './__IngredientsModel';
  
//   DrinksIngredients.belongsTo(Drinks, { foreignKey: 'drink_id', onDelete: 'CASCADE' });
//   DrinksIngredients.belongsTo(Ingredients, { foreignKey: 'ingredient_id', onDelete: 'CASCADE' });
  
//   export default DrinksIngredients;
  
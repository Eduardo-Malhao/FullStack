// import {
//     DataTypes,
//     Model,
//     InferAttributes,
//     InferCreationAttributes,
//     CreationOptional,
//   } from 'sequelize';
//   import db from '.';
  
//   class MealsSequelize extends Model<InferAttributes<MealsSequelize>,
//   InferCreationAttributes<MealsSequelize>> {
//     declare id: CreationOptional<number>;
//     declare meal_name: string;
//     declare meal_category: string;
//     declare meal_area: string;
//     declare meal_instructions: string;
//     declare meal_image: string;
//     declare meal_tag: string;
//     declare meal_video: string;
//     declare meal_ingredients: Array<{
//         name: string,
//         quantity: string
//     }>;
//   }
  
//   MealsSequelize.init({
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     meal_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     meal_category: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     meal_area: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     meal_instructions: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     meal_image: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     meal_tag: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     meal_video: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     meal_ingredients: {
//         type: DataTypes.JSON,
//         allowNull: true,
//     },
//   }, {
//     sequelize: db,
//     modelName: 'meals',
//     timestamps: false,
//     underscored: true,
//   });

// export default MealsSequelize;
  
// import {
//     DataTypes,
//     Model,
//     InferAttributes,
//     InferCreationAttributes,
//     CreationOptional,
//   } from 'sequelize';
//   import db from '.';
  
//   class IngredientsModel extends Model<InferAttributes<IngredientsModel>,
//   InferCreationAttributes<IngredientsModel>> {
//     declare id: CreationOptional<number>;
//     declare ingredient_name: string;
//   }
  
//   IngredientsModel.init({
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     ingredient_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//   }, {
//     sequelize: db,
//     modelName: 'ingredients',
//     timestamps: false,
//     underscored: true,
//   });

// export default IngredientsModel;
  
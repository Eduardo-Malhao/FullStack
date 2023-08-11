// import { Model, QueryInterface, DataTypes } from 'sequelize';
// import { IMeals } from '../../interfaces/IMeals';

// export default {
//   up(queryInterface: QueryInterface) {
//     return queryInterface.createTable<Model<IMeals>>('meals', {
//         id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         },
//         meal_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         meal_category: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         meal_area: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         meal_instructions: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         meal_image: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         meal_tag: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         meal_video: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         meal_ingredients: {
//             type: DataTypes.JSON,
//             allowNull: true,
//         },
//     });
//   },
//   down(queryInterface: QueryInterface) {
//     return queryInterface.dropTable('meals');
//   },
// };
import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDrinks } from '../../src/interfaces/IDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrinks>>('drinks', {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_glass: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        alcoholic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_instructions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        drink_tag: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        drink_video: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        drink_ingredients: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks');
  },
};
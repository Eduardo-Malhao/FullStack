"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('meals', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            meal_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            meal_category: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            meal_area: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            meal_instructions: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            meal_image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            meal_tag: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            meal_video: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            meal_ingredients: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('meals');
    },
};
//# sourceMappingURL=MealsMigrartion.js.map
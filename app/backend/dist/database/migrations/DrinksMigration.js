"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            drink_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drink_category: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drink_glass: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            alcoholic: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drink_instructions: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drink_image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            drink_tag: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            drink_video: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            drink_ingredients: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('drinks');
    },
};
//# sourceMappingURL=DrinksMigration.js.map
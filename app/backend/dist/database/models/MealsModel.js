"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class MealsSequelize extends sequelize_1.Model {
}
MealsSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
}, {
    sequelize: _1.default,
    modelName: 'meals',
    timestamps: false,
    underscored: true,
});
exports.default = MealsSequelize;
//# sourceMappingURL=MealsModel.js.map
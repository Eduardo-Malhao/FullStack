"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class DrinkSequelize extends sequelize_1.Model {
}
DrinkSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
}, {
    sequelize: _1.default,
    modelName: 'drinks',
    timestamps: false,
    underscored: true,
});
exports.default = DrinkSequelize;
//# sourceMappingURL=DrinksModel.js.map
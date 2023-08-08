import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class DrinkSequelize extends Model<InferAttributes<DrinkSequelize>,
InferCreationAttributes<DrinkSequelize>> {
  declare id: CreationOptional<number>;
  declare drink_name: string;
  declare drink_category: string;
  declare drink_glass: string;
  declare alcoholic: string;
  declare drink_Instructions: string;
  declare drink_image: string;
  declare drink_tag: string;
  declare drink_video: string;
  declare drink_ingredients: Array<{
      name: string,
      quantity: string
  }>;
}

DrinkSequelize.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  drink_Instructions: {
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
}, {
  sequelize: db,
  modelName: 'drinks',
  timestamps: false,
  underscored: true,
});

export default DrinkSequelize;

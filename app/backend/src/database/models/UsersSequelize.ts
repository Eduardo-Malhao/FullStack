import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';

  class Users extends Model<
    InferAttributes<Users>,
    InferCreationAttributes<Users>
  > {
    declare id: CreationOptional<number>;
    declare email: string;
    declare password: string;
    declare favorites: JSON;
  }
  
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favorites: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize: db,
      modelName: 'users',
      timestamps: false,
      underscored: true,
    }
  );
  
export default Users;
 
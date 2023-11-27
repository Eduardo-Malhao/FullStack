import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUser } from '../../interfaces/IUsers';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('users', {
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
          username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          role: {
            type: DataTypes.STRING,
            allowNull: false,
          }
        });
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('users');
    },
};
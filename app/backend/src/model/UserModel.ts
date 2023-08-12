import { Op } from 'sequelize';
import Model from '../database/models/UsersSequelize';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private model = Model;

    async findOrCreate(email: string, password: string)
        : Promise<IUser | null> {
            const [user, created] = await this.model.findOrCreate({
                where: { email },
                defaults: { password },
            });
            const userWithoutId = { email: user.email, password: user.password };
            return created ? userWithoutId : null;
        }

    async findUser(email: string)
        : Promise<IUser | null> {
            const response = await this.model.findAll({
                where: { email },
            });
            return response.length ? response : null;
        }
}

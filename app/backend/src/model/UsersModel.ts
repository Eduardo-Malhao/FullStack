import { Op } from 'sequelize';
import Model from '../database/models/User';
import { IUsers } from '../interfaces/IUsers';
import { ILogin } from '../interfaces/ILogin';

export default class UsersModel {
  private model = Model;

    public async createUser(user: IUsers)
        : Promise<IUsers> {
            const response = await this.model.create({
                email: user.email,
                password: user.password,
                username: user.username,
                role: user.role,
            });
            return response;
        }

        public async findByName(user: IUsers | ILogin)
        : Promise<IUsers | null> {
            const response = await this.model.findOne({
                where: { username: { [Op.like]: `%${user.username}%` } } 
            });
            if (!response) return null;
            return response;
        }
    
        public async findByEmail(user: IUsers | ILogin)
        : Promise<IUsers | null> {
            const response = await this.model.findOne({
                where: { email: { [Op.like]: `${user.email}%` } } 
            });
            if (!response) return null;
            return response;
        }
}

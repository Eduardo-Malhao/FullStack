import * as bcrypt from 'bcryptjs';
import Model from '../model/UserModel';
import Jwt from '../utils/jwt';
import { IServiceUser } from '../interfaces/IServiceUser';

export default class UserService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async singUp(email: string, password: string): Promise<IServiceUser> {
    try {
        const encodedPassword = await bcrypt.hash(password, 10);
        const response = await this.model.findOrCreate(email, encodedPassword);
        if (response) return { status: 'SUCCESS', data: 'Successful registration' };
        return { status: 'INVALID_DATA', data: 'Email already registered' };
    } catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
    }
  }

  public async singIn(email: string, password: string): Promise<IServiceUser> {
    try {
        const findUser = await this.model.findUser(email);
        if (!findUser) return { status: 'NOT_FOUND', data: 'User not found' };

        const checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) return { status: 'INVALID_DATA', data: 'Invalid password' };

        const token = Jwt.sign({ id: findUser.id });
        return { status: 'SUCCESS', data: token };
    } catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
    }
  }
}

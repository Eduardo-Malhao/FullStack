import Model from '../model/UsersModel';
import { IUsers } from '../interfaces/IUsers';
import { IServiceUsers } from '../interfaces/IServiceUsers';

export default class UsersService {
  constructor(
    private model: Model = new Model(),
  ) { }

  public async createUser(user: IUsers): Promise<IServiceUsers> {
    try {
        const getUsersResult = await this.getUsers(user);

        if (getUsersResult.status === 'SUCCESS') {
            return { status: 'CONFLICT', data: 'User already exists' };
        }

        const response = await this.model.createUser(user);

        return { status: 'SUCCESS', data: response };
        
    } catch (error) {
        return { status: 'CONFLICT', data: 'Internal error' };
    }
}


  public async getUsers(user: IUsers)
    : Promise<IServiceUsers> {
        try {
          if(user.username !== null) {
            const response = await this.model.findByName(user);
            if (response) return { status: 'SUCCESS', data: response };
        }
        if (user.email !== null) {
            const response = await this.model.findByEmail(user);
            if (response) return { status: 'SUCCESS', data: response };
        }

        return { status: 'NOT_FOUND', data: 'Not Found' };
        
        } catch (error) {
            return { status: 'CONFLICT', data: 'Internal error' };
        }
  }
}

import { Request, Response, NextFunction } from 'express';
import { IUsers } from '../interfaces/IUsers';
import UserDto from '../controller/UserDto';

export default class UsersMdws {

    public static setRoleBasedOnEmail(req: Request, res: Response, next: NextFunction) {
        const user: IUsers = UserDto.BodyToUser(req.body);

        const adminEmailRegex = /@admin\.com$/i;

        user.role = adminEmailRegex.test(user.email) ? 'ADMIN' : 'USER';

        next();
    }

}

import { Request, Response } from 'express';
import Service from '../service/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserDto from './UserDto';

export default class UsersControllers {
    private service: Service;

    constructor() { this.service = new Service() }

    public async register(req: Request, res: Response) {
        const user = UserDto.BodyToUser(req.body);
        const { status, data } = await this.service.register(user);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async login(req: Request, res: Response) {
        const user = (req.body);
        const { status, data } = await this.service.login(user);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async getUsers(req: Request, res: Response) {
        const user = UserDto.BodyToUser(req.body);
        const { status, data } = await this.service.getUsers(user);

        return res.status(mapStatusHTTP(status)).json({data});
    }
}


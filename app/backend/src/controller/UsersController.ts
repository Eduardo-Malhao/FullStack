import { Request, Response } from 'express';
import Service from '../service/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import mapRequestBodyToUser from '../utils/mapBodyToUser';

export default class UsersControllers {
    private service: Service;
    constructor() { this.service = new Service() }

    public async createUser(req: Request, res: Response) {
        const user = mapRequestBodyToUser(req.body);
        const { status, data } = await this.service.createUser(user);


    }

    public async getUsers(req: Request, res: Response) {
        const user = mapRequestBodyToUser(req.body);
        const { status, data } = await this.service.getUsers(user);

        return res.status(mapStatusHTTP(status)).json({data});
    }
}


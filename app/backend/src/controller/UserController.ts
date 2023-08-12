import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import Service from '../service/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
    private service: Service;
    constructor() { this.service = new Service() }

    public async singUp(req: Request, res: Response) {
        const { email, password } = req.body;
        const encodedPassword = await bcrypt.hash(password, 10);

        const { status, data } = await this.service.singUp(email, encodedPassword);

        if (status !== 'SUCCESS') return res.status(mapStatusHTTP(status)).json({data});
        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async singIn(req: Request, res: Response) {
        const { email, password } = req.body;
        const encodedPassword = await bcrypt.hash(password, 10);

        const { status, data } = await this.service.singIn(email, encodedPassword);

        if (status !== 'SUCCESS') return res.status(mapStatusHTTP(status)).json({data});
        return res.status(mapStatusHTTP(status)).json({data});
    }
}


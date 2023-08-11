import { Request, Response } from 'express';
import Service from '../service/DrinksService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class DrinksController {
    private service: Service;
    constructor() { this.service = new Service() }

    public async getDrinks(req: Request, res: Response) {
        const search = req.query;
        const { status, data } = await this.service.getDrinks(search);

        if (status !== 'SUCCESS') return res.status(mapStatusHTTP(status)).json({data});
        return res.status(mapStatusHTTP(status)).json({data});
    }
}


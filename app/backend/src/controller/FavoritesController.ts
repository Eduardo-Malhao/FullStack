import { Request, Response } from 'express';
import Service from '../service/FavoritesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { IBodyFavoites } from '../interfaces/IBodyFavorites';
import FavoritesDto from './FavoritesDto';

export default class FavoritesControllers {
    private service: Service;

    constructor() { this.service = new Service() }

    public async favorite(req: Request, res: Response) {
        const ids: IBodyFavoites = FavoritesDto.BodyToFavorites(req.body, +req.params.id);
        const { status, data } = await this.service.favorite(ids);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async getAllFavorites(req: Request, res: Response) {
        const id: number = (+req.params.id);
        const { status, data } = await this.service.getAllFavorites(id);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async getAllMealsFavorites(req: Request, res: Response) {
        const id: number = (+req.params.id);
        const { status, data } = await this.service.getAllMealsFavorites(id);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async getAllDrinksFavorites(req: Request, res: Response) {
        const id: number = (+req.params.id);
        const { status, data } = await this.service.getAllDrinksFavorites(id);

        return res.status(mapStatusHTTP(status)).json({data});
    }

    public async unfavorite(req: Request, res: Response) {
        const ids: IBodyFavoites = FavoritesDto.BodyToFavorites(req.body, +req.params.id);
        const { status, data } = await this.service.unfavorite(ids);

        return res.status(mapStatusHTTP(status)).json({data});
    }
}


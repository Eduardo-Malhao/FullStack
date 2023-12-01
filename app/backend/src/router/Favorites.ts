import { Request, Response, Router } from 'express';
import Controller from '../controller/FavoritesController';

const router = Router();
const controller = new Controller();

router.post('/:id', (req: Request, res: Response) => controller.favorite(req, res));

router.get('/:id', (req: Request, res: Response) => controller.getAllFavorites(req, res));

router.get('/:id/meals', (req: Request, res: Response) => controller.getAllMealsFavorites(req, res));

router.get('/:id/drinks', (req: Request, res: Response) => controller.getAllDrinksFavorites(req, res));

router.delete('/:id', (req: Request, res: Response) => controller.unfavorite(req, res));


export default router;

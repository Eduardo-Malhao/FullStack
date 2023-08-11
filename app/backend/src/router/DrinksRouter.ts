import { Request, Response, Router } from 'express';
import DrinksController from '../controller/DrinksController';

const controller = new DrinksController();

const router = Router();

router.get('/', (req: Request, res: Response) => controller.getDrinks(req, res));

export default router;

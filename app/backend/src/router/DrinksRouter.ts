import { Request, Response, Router } from 'express';
import Controller from '../controller/index';

const controller = new Controller();

const router = Router();

router.get('/', (req: Request, res: Response) => controller.findByFilter(req, res));


export default router;

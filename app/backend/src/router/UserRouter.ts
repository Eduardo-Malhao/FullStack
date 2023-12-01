import { Request, Response, Router } from 'express';
import Controller from '../controller/UsersController';
import userMiddlewares from '../middlewares/UsersMdws';

const router = Router();
const controller = new Controller();

router.post('/register',
userMiddlewares.setRoleBasedOnEmail,
(req: Request, res: Response) => controller.register(req, res));

router.post('/login', (req: Request, res: Response) => controller.login(req, res));

router.get('/', (req: Request, res: Response) => controller.getAllUsers(req, res));

export default router;

import { Request, Response, Router } from 'express';
import Controller from '../controller/UserController';
import LoginValidation from '../middlewares/InputValidation';

const controller = new Controller();

const router = Router();

router.post('/user/singup', LoginValidation.validateLogin, 
    (req: Request, res: Response) => controller.singUp(req, res));
router.post('/user/singin', LoginValidation.validateLogin,
    (req: Request, res: Response) => controller.singIn(req, res));


export default router;

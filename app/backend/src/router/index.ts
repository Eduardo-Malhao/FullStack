import { Router } from 'express';
import drinks from './DrinksRouter';
import meals from './MealsRouter';
import user from './UserRouter';

// category, firstletter, ingredients, nome
const router = Router();

router.use('/drinks', drinks)
router.use('/meals', meals);
router.use('/user', user);
export default router;

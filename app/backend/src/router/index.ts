import { Router } from 'express';
import drinks from './DrinksRouter';
import meals from './MealsRouter';

// category, firstletter, ingredients, nome
const router = Router();

router.use('/drinks', drinks)
router.use('/meals', meals);

export default router;

import { Router } from 'express';
import drinks from './DrinksRouter';
import meals from './MealsRouter';
import user from './UserRouter';
import favorites from './Favorites';

const router = Router();

router.use('/drinks', drinks);
router.use('/meals', meals);
router.use('/auth', user);
router.use('/favorites', favorites);

export default router;

import { Router } from 'express';
import { myRouter } from './controllers/trainee/index';

const router = Router();

router.use('/trainees', myRouter);

export default router;
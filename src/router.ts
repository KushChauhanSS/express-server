import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import { userRouter } from './controllers/user';

const router: Router = Router();

router.use('/trainees', traineeRouter);
router.use('/users', userRouter);

export default router;

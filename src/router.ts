import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import { userRouter } from './controllers/user';
import { feedbackRouter } from './controllers/feedback';

const router: Router = Router();

router.use('/trainees', traineeRouter);
router.use('/users', userRouter);
router.use('/feedback', feedbackRouter);

export default router;

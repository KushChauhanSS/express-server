import { Router } from 'express';
import Trainee from './Controller';

const router = Router();

router.get('/', Trainee.get);
router.post('/', Trainee.post);
router.put('/:id', Trainee.put);
router.delete('/:id', Trainee.delete);

export default router;
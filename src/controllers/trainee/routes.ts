import { Router } from 'express';
import trainee from './Controller';

const router: Router = Router();

router.get('/', trainee.get);
router.post('/', trainee.post);
router.put('/:id', trainee.put);
router.delete('/:id', trainee.delete);

export default router;
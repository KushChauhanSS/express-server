import { Router } from 'express';
import user from './Controller';

const router: Router = Router();

router.get('/', user.get);
router.post('/', user.post);
router.put('/:id', user.put);
router.delete('/:id', user.delete);

export default router;
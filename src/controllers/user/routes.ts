import { Router } from 'express';
import user from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';

const router: Router = Router();

router.get('/', validationHandler(validation.get), user.get);
router.post('/', validationHandler(validation.create), user.post);
router.put('/', validationHandler(validation.update), user.put);
router.delete('/:id', validationHandler(validation.delete), user.delete);

export default router;
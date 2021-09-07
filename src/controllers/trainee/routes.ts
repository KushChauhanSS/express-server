import { Router } from 'express';
import trainee from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';

const router: Router = Router();

router.get('/', validationHandler(validation.get), trainee.get);
router.post('/', validationHandler(validation.create), trainee.post);
router.put('/', validationHandler(validation.update), trainee.put);
router.delete('/:id', validationHandler(validation.delete), trainee.delete);

export default router;
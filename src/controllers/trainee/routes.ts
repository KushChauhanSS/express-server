import { Router } from 'express';
import trainee from './Controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { TRAINEES } from '../../libs/constants';

const router: Router = Router();

router
    .get('/', authMiddleWare(TRAINEES, 'read'), validationHandler(validation.get), trainee.get)
    .post('/', authMiddleWare(TRAINEES, 'write'), validationHandler(validation.create), trainee.post)
    .put('/', authMiddleWare(TRAINEES, 'write'), validationHandler(validation.update), trainee.put)
    .delete('/:id', authMiddleWare(TRAINEES, 'delete'), validationHandler(validation.delete), trainee.delete)
    .post('/create-token', trainee.createToken);

export default router;
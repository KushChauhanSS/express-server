import { Router } from 'express';
import user from './Controller';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { USER } from '../../libs/constants';

const router: Router = Router();

router
    .get('/', authMiddleWare(USER, 'read'), validationHandler(validation.get), user.get)
    .post('/', authMiddleWare(USER, 'write'), validationHandler(validation.create), user.post)
    .put('/', authMiddleWare(USER, 'write'), validationHandler(validation.update), user.put)
    .delete('/:id', authMiddleWare(USER, 'delete'), validationHandler(validation.delete), user.delete)
    .post('/create-token', user.createToken);

export default router;

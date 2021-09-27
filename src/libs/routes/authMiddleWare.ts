import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import hasPermission from '../hasPermission';
import UserRepository from '../../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();

const authMiddleWare = (module, permissionType) => async (req, res, next) => {
    let token = req.header('Authorization');
    console.log('Token:', token);

    if (!token) {
        next({ error: 'Unauthorized Acess', message: 'Token not found!', status: 403 });
    }

    // extracted 'Bearer ' from genrated Token
    if (token.startsWith('Bearer ')) {
        token = token.substring(7, token.length);
    }

    const { secret } = configuration;
    console.log('Key:', secret);

    let user;
    try {
        user = jwt.verify(token, secret);
    } catch (error) {
        next({ error: 'Unauthorized Access', message: 'User not Authorized!', status: 403 });
    }
    console.log('User:', user);

    if (!user) {
        next({ error: 'Unauthorized Access', message: 'User not Authorized!', status: 403 });
    }

    const userData = await userRepository.findUser({ _id: user._id });

    if (!userData) {
        next({ error: 'Unauthorized Access', message: 'User does not exists!', status: 403 });
    }

    if (!hasPermission(module, userData.role, permissionType)) {
        next({ error: 'Unauthorized Access', message: 'Permission Denied!', status: 403 });
    }

    req.user = user;
    next();

};

export default authMiddleWare;

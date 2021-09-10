import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import hasPermission from '../hasPermission';

const authMiddleWare = (module, permissionType) => (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Token:', token);

    if (!token) {
        next({ error: 'Unauthorized Acess', message: 'Token not found!', status: 403 });
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

    if (!hasPermission(module, user.role, permissionType)) {
        next({ error: 'Unauthorized Access', message: 'Permission Denied!', status: 403 });
    }

    req.user = user;
    next();

};

export default authMiddleWare;

import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';

// temporary data
const users = [
    { userName: 'Gaurav', id: 1 },
    { userName: 'Prabal', id: 2 },
    { userName: 'Adil', id: 3 },
    { userName: 'Sapna', id: 4 },
    { userName: 'Vinay', id: 5 }
];

class User {

    get = (req: Request, res: Response, next: NextFunction) => {
        console.log('Get request...!');
        res.status(200).send(users);
    }

    post = (req: Request, res: Response, next: NextFunction) => {
        console.log('Post request...!');
        console.log(req.body);
        const { name } = req.body;
        const user = {
            userName: name,
            id: users.length + 1
        };
        users.push(user);
        res.status(200).send(user);
    }

    put = (req: Request, res: Response, next: NextFunction) => {
        console.log('Put request...!');
        console.log(req.body);
        const { name, id } = req.body;
        const user = users.find(e => e.id === parseInt(id, 10));
        if (!user) {
            res.status(404).send('Not Found! Can not update your request!');
        }
        user.userName = name;
        res.status(200).send(user);
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        console.log('Delete request...!');
        const { id } = req.params;
        const user = users.find(e => e.id === parseInt(id, 10));
        if (!user) {
            res.status(404).send('Not Found! Can not make changes requested!');
        }
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.status(200).send(user);
    }

    createToken = (req: Request, res: Response, next: NextFunction) => {
        const token = jwt.sign(req.body, configuration.secret, { expiresIn: '10h' });
        res.status(200).send({ message: 'Token created successfully!', data: { token }, status: 'success' });
    }
}

export default new User();
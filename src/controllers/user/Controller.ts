import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import { hashPassword } from '../../utils/helpers';
import * as bcrypt from 'bcrypt';

const userRepository: UserRepository = new UserRepository();
class User {
    // FUNCTION TO GET ALL USERS
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Get request...!');
            const [userData, documents] = await Promise.all([
                userRepository.findDoc(req.query),
                userRepository.countDoc()
            ]);
            const finalData = { documents, userData };
            res.status(200).send(finalData);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }

    // FUNCTION TO GET SIGLE USER
    getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Get request...!');
            const userData = await userRepository.findUser(req.query);
            if (userData) {
                console.log(userData);
                res.status(200).send(userData);
            }
            else {
                next({ status: 404, message: `User with Original Id: ${req.query.originalId} not found!` });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }

    // FUNCTION TO ADD NEW USER
    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Post request...!');
            const { password } = req.body;
            req.body.password = await hashPassword(password);
            await userRepository.createDoc(req.body);
            const userData = await userRepository.findDoc({});
            res.status(200).send(userData);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }

    // FUNCTION TO UPDATE A USER
    put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Put request...!');
            const { password } = req.body;
            if (password) {
                req.body.password = await hashPassword(password);
            }
            const result = await userRepository.updateDoc(req.body);
            if (result) {
                const userData = await userRepository.findDoc({});
                res.status(200).send(userData);
            }
            else {
                next({ status: 404, message: `User with Original Id: ${req.body.originalId} not found!` });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }

    // FUNCTION TO DELETE A USER
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Delete request...!');
            const result = await userRepository.deleteDoc(req.params);
            if (result) {
                const userData = await userRepository.findDoc({});
                console.log('userData', userData);
                res.status(200).send(userData);
            }
            else {
                // optimize here.
                next({ status: 404, message: `User with Original Id: ${req.params.originalId} not found!` });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }

    // FUNCTION TO MATCH CREDENTIALS (EMAIL AND PASSWORD) FROM DB
    matchCredentials = async (data: any) => {
        const dbData = await userRepository.findUser({ email: data.email });
        const match = await bcrypt.compare(data.password, dbData.password);
        if (match) {
            console.log('Credentials matched!');
            return dbData;
        }
        else {
            throw new Error('Credentials not matched!');
        }
    }

    // FUNCTION TO GENERATE TOKEN WITH ID AND EMAIL AS PAYLOAD
    createToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = await this.matchCredentials(req.body);
            if (userData) {
                const payloadData = { _id: userData._id, email: userData.email };
                const token = jwt.sign(payloadData, configuration.secret, { expiresIn: '15m' });
                res.status(200).send({ message: 'Token created successfully!', data: { token }, status: 'success' });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}

export default new User();

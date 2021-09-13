import * as mogoose from 'mongoose';

export default interface IUserModel extends mogoose.Document {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}

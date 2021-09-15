import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';

export default class UserRepository {
    public static generateObjectId() {
        console.log(String(new mongoose.Types.ObjectId()));
        return String(new mongoose.Types.ObjectId());
    }

    public count = (): mongoose.Query<number, IUserModel> => {
        return userModel.count();
    }

    public findUser = (query): mongoose.Query<IUserModel, IUserModel> => {
        return userModel.findOne(query).lean();
    }

    public create = (data: any): Promise<IUserModel> => {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            ...data
        });
        return model.save();
    }

    public update = (data: any): mongoose.UpdateQuery<IUserModel> => {
        console.log('UserRepository:: update', data);
        return userModel.updateOne(data);
    }

    public delete = (data: any): mongoose.Query<object, IUserModel> => {
        console.log('UserRepository:: delete', data);
        return userModel.deleteOne(data);
    }
}

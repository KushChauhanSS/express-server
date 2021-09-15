import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public countDoc(): mongoose.Query<number, IUserModel> {
        return super.count();
    }

    public findUser(query): mongoose.Query<IUserModel, IUserModel> {
        return super.findOne(query);
    }

    public findDoc(query, projection?: any, options?: any): mongoose.Query<IUserModel[], IUserModel> {
        return super.find(query, projection, options);
    }

    public createDoc(data: any): Promise<IUserModel> {
        return super.create(data);
    }

    public updateDoc(data: any): Promise<IUserModel> {
        return super.update(data);
    }

    public delete(id: string): mongoose.Query<object, IUserModel> {
        console.log('UserRepository:: delete', id);
        return super.invalidate(id);
    }
}

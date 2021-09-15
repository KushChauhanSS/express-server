import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
class UserSchema extends VersionableSchema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: { type: String, required: true },
            email: { type: String, required: true },
            role: { type: String, required: true },
            password: { type: String, required: true }
        });
        super(baseSchema, collections);
    }
}

export default UserSchema;

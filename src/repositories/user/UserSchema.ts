import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor(collections: any) {
        const baseSchema = {
            _id: String,
            name: { type: String, required: true },
            email: { type: String, required: true },
            role: { type: String, required: true },
            password: { type: String, required: true }
        };
        super(baseSchema, collections);
    }
}

export default UserSchema;

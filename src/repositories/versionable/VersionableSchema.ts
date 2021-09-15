import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(baseSchema: any, collections: any) {
        const versionedSchema = Object.assign({
            originalId: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            deletedAt: {
                type: Date,
                required: false
            }
        }, baseSchema);
        super(versionedSchema, collections);
    }
}

export default VersionableSchema;

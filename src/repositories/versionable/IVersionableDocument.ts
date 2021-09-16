import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    originalId: string;
    createdAt: string;
    deletedAt: string;
}

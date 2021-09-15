import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;

    constructor(model) {
        this.model = model;
    }

    public static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }

    public count(): mongoose.Query<number, mongoose.EnforceDocument<D, {}>> {
        const finalQuery = { deletedAt: undefined };
        return this.model.count(finalQuery);
    }

    public findOne(query): mongoose.Query<mongoose.EnforceDocument<D, {}>, mongoose.EnforceDocument<D, {}>> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.findOne(finalQuery);
    }

    public find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<D, {}>[], mongoose.EnforceDocument<D, {}>> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery);
    }

    public create(data: any): Promise<D> {
        console.log('UserRepository:: create', data);
        const id = VersionableRepository.generateObjectId();
        console.log(id);
        const model = new this.model({
            _id: id,
            originalId: id,
            ...data
        });
        return model.save();
    }

    // function to soft delete the record.
    public invalidate(id: string): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.EnforceDocument<D, {}>, {}, D> {
        console.log('in invalidate...');
        const oldData: object = { originalId: id, deletedAt: undefined };
        const newData: object = { deletedAt: Date.now() };
        return this.model.updateOne(oldData, newData);
    }

    public async update(data: any): Promise<D> {
        console.log('UserRepository:: update', data);
        const previousRecord = await this.find({ originalId: data.originalId });
        console.log(previousRecord);
        if (previousRecord) {
            console.log('in update...');
            await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }
        const newDoc = { ...previousRecord, ...data };

        newDoc._id = VersionableRepository.generateObjectId();
        delete newDoc.deletedAt;
        const model = new this.model(newDoc);
        return model.save();
    }

    // public delete = (data: any): mongoose.Query<object, D> => {
    //     console.log('UserRepository:: delete', data);
    //     return this.model.deleteOne(data);
    // }
}

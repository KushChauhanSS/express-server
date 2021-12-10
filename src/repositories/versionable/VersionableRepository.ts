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
        return this.model.findOne(finalQuery).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<D, {}>[], mongoose.EnforceDocument<D, {}>> {
        const { skip = 0, limit = 10, sortBy = 'createdAt', search = '' } = query;
        const finalQuery: any = {
            deletedAt: undefined,
            $or:
                [
                    { name: { $regex: new RegExp(search), $options: 'i' } },
                    { email: { $regex: new RegExp(search), $options: 'i' } }
                ]
        };
        return this.model.find(finalQuery, projection, { skip: +(skip), limit: +(limit) }).sort(`-${sortBy}`);
    }

    public async create(data: any): Promise<D> {
        console.log('VersionableRepository:: create', data);
        const id = VersionableRepository.generateObjectId();
        const model = new this.model({
            _id: id,
            originalId: id,
            ...data
        });
        return model.save();
    }

    // function to soft delete the record.
    public invalidate(id: string): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.EnforceDocument<D, {}>, {}, D> {
        const oldData: object = { originalId: id, deletedAt: undefined };
        const newData: object = { deletedAt: Date.now() };
        return this.model.updateOne(oldData, newData);
    }

    public async update(data: any): Promise<D> {
        console.log('VersionableRepository:: update', data);
        const previousRecord = await this.findOne({ originalId: data.originalId });
        if (previousRecord) {
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

    public async delete(data: any): Promise<mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.EnforceDocument<D, {}>, {}, D>> {
        console.log('VersionableRepository:: delete', data);
        const previousRecord = await this.findOne({ originalId: data.originalId });
        if (previousRecord) {
            return await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }
    }
}

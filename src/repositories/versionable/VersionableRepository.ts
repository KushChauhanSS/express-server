import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;

    constructor(model) {
        this.model = model;
    }

    protected static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }

    protected count = (): mongoose.Query<number, mongoose.EnforceDocument<D, {}>> => {
        const finalQuery = { deletedAt: null };
        return this.model.count(finalQuery);
    }

    protected findOne = (query): mongoose.Query<mongoose.EnforceDocument<D, {}>, mongoose.EnforceDocument<D, {}>> => {
        const finalQuery = { deletedAt: null, ...query };
        return this.model.findOne(finalQuery).lean();
    }

    public find = (query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<D, {}>[], mongoose.EnforceDocument<D, {}>> => {
        const finalQuery = { deletedAt: null, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    protected create = (data: any): Promise<D> => {
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
    // mongoose.Query < D, mongoose.EnforceDocument < D, {} >>
    protected invalidate = (id: string) => {
        return this.model.updateOne({ originalId: id, deletedAt: undefined }, { deletedAt: Date.now() });
    }


    protected update = async (data: any): Promise<D> => {
        console.log('UserRepository:: update', data);
        const previousRecord = await this.find({ originalId: data.originalId });
        if (previousRecord) {
            await this.invalidate(data.originalId);
        }
        else {
            return null;
        }
        const newData = { ...previousRecord, ...data };
        newData._id = VersionableRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return model.save();
    }

    // protected delete = (data: any): mongoose.Query<object, D> => {
    //     console.log('UserRepository:: delete', data);
    //     return this.model.deleteOne(data);
    // }
}

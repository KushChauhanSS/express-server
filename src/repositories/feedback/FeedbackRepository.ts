import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IFeedbackModel from './IFeedbackModel';
import { feedbackModel } from './FeedbackModel';

export default class FeedbackRepository extends VersionableRepository<IFeedbackModel, mongoose.Model<IFeedbackModel>> {

    constructor() {
        super(feedbackModel);
    }

    public createFeedback(data: any): Promise<IFeedbackModel> {
        return super.create(data);
    }
}

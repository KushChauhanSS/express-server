import * as mongoose from 'mongoose';
import IFeedbackModel from './IFeedbackModel';
import FeedbackSchema from './FeedbackSchema';

const feedbackSchema = new FeedbackSchema({
    collection: 'feedback'
});

export const feedbackModel: mongoose.Model<IFeedbackModel> = mongoose.model<IFeedbackModel>('Feedback', feedbackSchema);

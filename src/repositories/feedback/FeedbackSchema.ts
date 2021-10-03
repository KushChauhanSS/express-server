import VersionableSchema from '../versionable/VersionableSchema';

class FeedbackSchema extends VersionableSchema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            feedback: {
                reviewer: { type: String, required: true },
                reviewerId: { type: String, required: true },
                trainee: { type: String, required: true },
                traineeId: { type: String, required: true },
                attendance: {
                    leaves: { type: Number, required: true },
                    lateArrivals: { type: Number, required: true }
                },
                points: {
                    codeQuality: { type: Number, required: true },
                    communication: { type: Number, required: true },
                    behaviour: { type: Number, required: true },
                    tasksDelivery: { type: Number, required: true },
                    comprehension: { type: Number, required: true },
                    emailCommunication: { type: Number, required: true },
                    redmineEntry: { type: Number, required: true }
                },
                description: {
                    goodPoints: String,
                    improvements: String
                }
            }
        });
        super(baseSchema, collections);
    }
}

export default FeedbackSchema;

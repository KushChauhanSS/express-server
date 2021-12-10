import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IFeedbackModel extends IVersionableDocument {
    _id: string;
    feedback: {
        reviewer: string,
        reviewerId: string,
        trainee: string,
        traineeId: string,
        attendance: {
            leaves: number,
            lateArrivals: number
        },
        points: {
            codeQuality: number,
            communication: number,
            behaviour: number,
            tasksDelivery: number,
            comprehension: number,
            emailCommunication: number,
            redmineEntry: number
        },
        description: {
            goodPoints: string,
            improvements: string
        }
    };
}

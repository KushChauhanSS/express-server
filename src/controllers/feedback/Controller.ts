import FeedbackRepository from '../../repositories/feedback/FeedbackRepository';

const feedbackRepository: FeedbackRepository = new FeedbackRepository();
class Feedback {
    addFeedback = async (req, res, next) => {
        try {
            console.log('Feedback request...!');
            req.body.feedback.reviewerId = req.user.originalId;
            const userData = await feedbackRepository.createFeedback(req.body);
            res.status(200).send({ message: 'Feedback added successfuly!', result: userData, status: 'success' });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}

export default new Feedback();

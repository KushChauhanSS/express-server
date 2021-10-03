export default Object.freeze({
    // FEEDBACK request Schema
    addFeedback: {
        feedback: {
            in: ['body'],
            exists: {
                errorMessage: 'Feedback is required!',
                bail: true
            },
            isObject: {
                errorMessage: 'Feedback must be an object!'
            }
        },
        'feedback.reviewer': {
            in: ['body'],
            exists: {
                errorMessage: 'Reviewer is required!',
                bail: true
            },
            isString: {
                errorMessage: 'Reviewer must be a string!'
            }
        },
        'feedback.trainee': {
            in: ['body'],
            exists: {
                errorMessage: 'Trainee is required!',
                bail: true
            },
            isString: {
                errorMessage: 'Trainee must be a string!'
            }
        },
        'feedback.traineeId': {
            in: ['body'],
            exists: {
                errorMessage: 'TraineeId is required!',
                bail: true
            },
            isString: {
                errorMessage: 'TraineeId must be a string!'
            }
        },
        'feedback.attendance': {
            in: ['body'],
            exists: {
                errorMessage: 'Attendance is required!',
                bail: true
            },
            isObject: {
                errorMessage: 'Attendance must be an object!'
            }
        },
        'feedback.attendance.leaves': {
            in: ['body'],
            exists: {
                errorMessage: 'Leaves is required!',
                bail: true
            }
        },
        'feedback.attendance.lateArrivals': {
            in: ['body'],
            exists: {
                errorMessage: 'Late-Arrivals is required!',
                bail: true
            }
        },
        'feedback.points': {
            in: ['body'],
            exists: {
                errorMessage: 'Points is required!',
                bail: true
            },
            isObject: {
                errorMessage: 'Points must be an object!'
            }
        },
        'feedback.points.codeQuality': {
            in: ['body'],
            exists: true,
            errorMessage: 'Code-Quality is required!'
        },
        'feedback.points.communication': {
            in: ['body'],
            exists: true,
            errorMessage: 'Communication is required!'
        },
        'feedback.points.behaviour': {
            in: ['body'],
            exists: true,
            errorMessage: 'Behaviour is required!'
        },
        'feedback.points.tasksDelivery': {
            in: ['body'],
            exists: true,
            errorMessage: 'Tasks-Delivery is required!'
        },
        'feedback.points.comprehension': {
            in: ['body'],
            exists: true,
            errorMessage: 'Comprehension is required!'
        },
        'feedback.points.emailCommunication': {
            in: ['body'],
            exists: true,
            errorMessage: 'Email-Communication is required!'
        },
        'feedback.points.redmineEntry': {
            in: ['body'],
            exists: true,
            errorMessage: 'Redmine-Entry is required!'
        },
        'feedback.description': {
            optional: true,
            in: ['body'],
            isObject: {
                errorMessage: 'Description must be an object with goodPoints and improvements fields!'
            }
        }
    }
});

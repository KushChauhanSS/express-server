import { validateEmail } from './helpers';

const validUsers: string[] = [];
const invalidUsers: string[] = [];

export const validateUsers = (users: IUser[]): void => {
    console.log('----validateUsers----');

    users.forEach(element => {

        const { traineeEmail } = element;
        const { reviewerEmail } = element;

        if (validateEmail(traineeEmail)) {
            validUsers.push(traineeEmail);
        }
        else {
            invalidUsers.push(traineeEmail);
        }

        if (validateEmail(reviewerEmail)) {
            validUsers.push(reviewerEmail);
        }
        else {
            invalidUsers.push(reviewerEmail);
        }
    });

    console.log('Valid Users :');
    validUsers.forEach(element => {
        console.log(element);
    });
    console.log('No. of valid users: ', validUsers.length);

    console.log();
    console.log('-----------------------------\n');

    console.log('Invalid Users :');
    invalidUsers.forEach(element => {
        console.log(element);
    });
    console.log('No. of invalid users:', invalidUsers.length);

};

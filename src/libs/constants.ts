// Data for checking permissions
export const TRAINEES: string = 'trainees';
export const TRAINEE: string = 'trainee';
export const USER: string = 'user';
export const REVIEWER: string = 'reviewer';
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';
export const BCRYPT_SALT_ROUNDS: number = 10;

export const permissions: any = {
    [TRAINEES]: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
        write: [TRAINER, HEAD_TRAINER],
        delete: [HEAD_TRAINER],
    },
    [USER]: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
        write: [REVIEWER, TRAINER, HEAD_TRAINER],
        delete: [HEAD_TRAINER],
    },
};

// Data for initial seeding
export const initialData = [{
    name: 'Vinay',
    role: 'head-trainer',
    email: 'vinay@successive.tech',
    password: 'vinay@123'
},
{
    name: 'Gaurav',
    role: 'trainer',
    email: 'gaurav@successive.tech',
    password: 'Gaurav@123'
},
{
    name: 'Kush',
    role: 'trainee',
    email: 'kush@successive.tech',
    password: 'Kush@123'
}];

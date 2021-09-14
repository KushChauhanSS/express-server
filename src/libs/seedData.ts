import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();

const seedData = async () => {
    try {
        const res = await userRepository.count();
        // console.log('resolve', typeof res);
        console.log('Total number of documents: ', res);
        if (res === 0) {
            console.log('Data seed in progress...');
            const data = [{
                name: 'Head Trainer',
                role: 'head trainer',
                email: 'head.trainer@successive.tech',
                password: 'HeadTrainer@123'
            },
            {
                name: 'Trainer',
                role: 'trainer',
                email: 'trainer@successive.tech',
                password: 'Trainer@123'
            },
            {
                name: 'Trainee',
                role: 'trainee',
                email: 'trainee@successive.tech',
                password: 'Trainee@123'
            }];

            data.forEach((doc) => userRepository.create(doc));
        }
    }
    catch (error) {
        console.log(error);
    }
};

export default seedData;

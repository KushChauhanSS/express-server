import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository();

const seedData = async () => {
    try {
        const res = await userRepository.count();
        console.log('resolve', typeof res);
        console.log('Total number of documents: ', res);
        if (res === 0) {
            console.log('Data seed in progress...');
            userRepository.create(
                {
                    name: 'Head Trainer',
                    role: 'head trainer',
                    email: 'head.trainer@successive.tech',
                    password: 'HeadTrainer@123'
                });
            userRepository.create(
                {
                    name: 'Trainer',
                    role: 'trainee',
                    email: 'trainee@successive.tech',
                    password: 'Trainee@123'
                });

        }

    }
    catch (error) {
        console.log(error);
    }
};

export default seedData;

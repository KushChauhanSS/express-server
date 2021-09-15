import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();

const seedData = async () => {
    try {
        const res = await userRepository.count();
        console.log('Total number of documents: ', res);
        if (res === 0) {
            console.log('Data seed in progress...');
            const data = [{
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

            data.forEach((doc) => userRepository.createDoc(doc));
        }
    }
    catch (error) {
        console.log(error);
    }
};

export default seedData;

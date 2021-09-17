import UserRepository from '../repositories/user/UserRepository';
import { initialData } from './constants';
import { hashPassword } from '../utils/helpers';

const userRepository: UserRepository = new UserRepository();

// Function to seed user collection data
const seedUserData = async () => {
    try {
        const res = await userRepository.count();
        console.log('Total number of documents: ', res);
        if (res === 0) {
            console.log('User Data seed in progress...');
            initialData.forEach(async (doc) => {
                const { password } = doc;
                doc.password = await hashPassword(password);
                userRepository.createDoc(doc);
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};

export default seedUserData;

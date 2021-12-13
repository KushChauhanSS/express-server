import UserRepository from '../repositories/user/UserRepository';
import { initialData } from './constants';
import { hashPassword } from '../utils/helpers';

const userRepository: UserRepository = new UserRepository();

// Function to seed user collection data
const seedUserData = async () => {
    try {
        const res = await userRepository.countDoc();
        if (res === 0) {
            console.log('User Data seed in progress...');
            const promises = initialData.map(async (doc) => {
                const { password } = doc;
                doc.password = await hashPassword(password);
                return await userRepository.createDoc(doc);
            });
            return Promise.all(promises);
        }
    }
    catch (error) {
        console.log(error);
    }
};

export default seedUserData;

import UserRepository from '../repositories/user/UserRepository';
import { BCRYPT_SALT_ROUNDS, initialData } from './constants';
import * as bcrypt from 'bcrypt';

const userRepository: UserRepository = new UserRepository();

const seedData = async () => {
    try {
        const res = await userRepository.count();
        console.log('Total number of documents: ', res);
        if (res === 0) {
            console.log('Data seed in progress...');
            initialData.forEach(async (doc) => {
                const { password } = doc;
                doc.password = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
                userRepository.createDoc(doc);
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};

export default seedData;

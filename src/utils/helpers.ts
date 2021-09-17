import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../libs/constants';

/**
 *
 * @param password
 * @returns hashed password
 */
export const hashPassword = (password: any): string => {
    return bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
};

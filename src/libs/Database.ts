import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
    /**
     * Method to establish connection with DB.
     * @param mongoURL
     * @returns
     */
    public static open = (mongoURL) => {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoURL, (error) => {
                if (error) {
                    console.log('Cannot connect mongoDB server!');
                    return reject(error);
                }
                console.log('Connected to MongoDB successfully!');
                seedData();
                return resolve('Connected Successfuly!');
            });
        });
    }

    /**
     * Method to close connection with DB.
     * @param mongoURL
     */
    public static close = (mongoURL) => {
        mongoose.disconnect();
    }
}

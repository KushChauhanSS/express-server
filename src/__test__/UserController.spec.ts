import { MongoMemoryServer } from 'mongodb-memory-server';
import * as supertest from 'supertest';

import config from '../config/configuration';
import Server from '../Server';
import Database from '../libs/Database';

jest.setTimeout(10000);

describe('User Controller Test Suit', () => {
    const userEmail = 'vinay@successive.tech';
    const userPassword = 'vinay@123';
    let userId;

    const server = new Server(config);

    let mongoServer;
    let mongoUri;
    let request;
    let token;

    beforeAll(async () => {
        const app = await server.bootstrap();
        request = supertest(app);

        mongoServer = await MongoMemoryServer.create({
            instance: {
                dbName: 'express-server-test-db',
            }
        });
        mongoUri = mongoServer.getUri();
        await Database.open(mongoUri);

        const res = await request
            .post('/api/users/create-token')
            .send({
                email: userEmail,
                password: userPassword
            });
        token = res.body.data.token;
    });

    describe('Positive test cases', () => {
        it('should return user profile', async () => {
            const res = await request
                .get('/api/users/me')
                .set('Authorization', token);
            expect(res.status).toBe(200);
            expect(res.body.result.email).toBe(userEmail);
        });

        it('should create a new user', async () => {
            const newUser = {
                name: 'KC',
                email: 'kc@successive.tech',
                role: 'head-trainer',
                password: 'Sunny@123'
            };
            const res = await request
                .post('/api/users')
                .set('Authorization', token)
                .send(newUser);
            expect(res.status).toBe(200);
            expect(res.body.result.name).toBe(newUser.name);
            expect(res.body.result.email).toBe(newUser.email);
            userId = res.body.result.originalId;
        });

        it('should get all users', async () => {
            const res = await request
                .get('/api/users/all')
                .set('Authorization', token);
            expect(res.status).toBe(200);
            expect(res.body.result.userData).not.toBeUndefined();
        });

        it('should get one user', async () => {
            const res = await request
                .get('/api/users')
                .query({ originalId: userId })
                .set('Authorization', token);
            expect(res.status).toBe(200);
            expect(res.body.result.originalId).toBe(userId);
        });

        it('should update user', async () => {
            const updateUser = {
                originalId: userId,
                name: 'Kush',
                email: 'kush@successive.tech',
                role: 'head-trainer'
            };
            const res = await request
                .put('/api/users')
                .set('Authorization', token)
                .send(updateUser);
            expect(res.status).toBe(200);
            expect(res.body.result.originalId).toBe(userId);
        });

        it('should delete user', async () => {
            const res = await request
                .delete(`/api/users/${userId}`)
                .set('Authorization', token);
            expect(res.status).toBe(200);
            expect(res.body.result.acknowledged).toBe(true);
        });
    });

    describe('Negative test cases', () => {
        it('should get user not found error', async () => {
            const wrongUserId = '61b5e06f704b2445b412a635';
            const res = await request
                .get('/api/users')
                .query({ originalId: wrongUserId })
                .set('Authorization', token);
            expect(res.body.status).toBe(404);
        });

        it('should get user not found error', async () => {
            const wrongUserId = '61b5e06f704b2445b412a635';
            const updateUser = {
                originalId: wrongUserId,
                name: 'Kush',
                email: 'kush@successive.tech',
                role: 'head-trainer'
            };
            const res = await request
                .put('/api/users')
                .set('Authorization', token)
                .send(updateUser);
            expect(res.body.status).toBe(404);
        });

        it('should get user not found error', async () => {
            const wrongUserId = '61b5e06f704b2445b412a635';
            const res = await request
                .delete(`/api/users/${wrongUserId}`)
                .set('Authorization', token);
            expect(res.body.status).toBe(404);
        });
    });

    describe('Not found route', () => {
        it('should get not found error', async () => {
            const res = await request
                .get('/profile')
                .set('Authorization', token);
            expect(res.body.status).toBe(404);
        });
    });

    afterAll(() => {
        Database.close(mongoUri);
    });
});

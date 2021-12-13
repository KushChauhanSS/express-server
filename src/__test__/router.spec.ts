import * as supertest from 'supertest';

import config from '../config/configuration';
import Server from '../Server';

describe('Router test', () => {
    const server = new Server(config);
    const app = server.bootstrap();
    const request = supertest(app);

    describe('/health-check api', () => {
        test('should return { status: 200, message: "I am OK"}', async () => {
            const response = await request.get('/health-check');
            expect(response.status).toBe(200);
            expect(response.body.status).toBe(200);
            expect(response.body.message).toBe('I am OK');
        });

        test('should not return 500', async () => {
            const response = await request.get('/health-check');
            expect(response.body.status).not.toBe(500);
        });
    });

    describe('/data api', () => {
        test('should return { status: 200, message: "I am OK"}', async () => {
            const response = await request.post('/data');
            expect(response.status).toBe(200);
            expect(response.body.status).toBe(200);
            expect(response.body.message).toBe('I am OK');
        });
    });

});

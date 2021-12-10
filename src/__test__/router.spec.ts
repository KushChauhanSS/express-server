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
            expect(response.body.status).toBe(200);
            expect(response.body.message).toBe('I am OK');
        });
    });
});

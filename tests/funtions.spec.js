const { calldependance, action } = require('./../functions');
const supertest = require('supertest');
const app = require('./../app');

const server = supertest(app);

describe('Fonctions de test', () => {
    describe('action function', () => {
        it('should return a greeting message', () => {
            const name = 'John';
            const result = action(name);
            expect(result).toBe(`hello ${name}!`);
        });
    });

    describe('calldependance function', () => {
        it('should call the /action endpoint and return the response message', async () => {
            const name = 'Jane';
            const response = await calldependance(name);
            expect(response.message).toBe(`hello ${name}!`);
        });
    });
});

describe('Tests d\'intégration', () => {
    it('should return 200 and the correct message for GET /action', async () => {
        const name = 'Doe';
        const response = await server.get(`/action?name=${name}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(`hello ${name}!`);
    });

    it('should return 400 if name is not provided', async () => {
        const response = await server.get('/action');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Name is required');
    });
});

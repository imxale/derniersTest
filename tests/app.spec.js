const supertest = require('supertest');
const faker = require('faker-br');
const app = require('../app');

const server = supertest(app);

let streetName;
let streetNumber;

beforeEach(() => {
    streetName = faker.address.streetName();
    streetNumber = faker.random.number();
});

afterEach(() => {
    streetName = null;
    streetNumber = null;
});

describe('Tests d\'intégration', () => {
    it('devrait retourner 200 pour une requête GET', async () => {
        const response = await server.get('/api/some-endpoint');
        expect(response.status).toBe(200);
    });

    it('devrait créer une nouvelle adresse avec les données aléatoires', async () => {
        const response = await server.post('/api/addresses')
            .send({
                streetName,
                streetNumber
            });
        expect(response.status).toBe(201);
        expect(response.body.streetName).toBe(streetName);
        expect(response.body.streetNumber).toBe(streetNumber);
    });
});

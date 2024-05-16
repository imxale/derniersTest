const Class = require("./../classes");
const supertest = require('supertest');
const app = require("../function");
const server = supertest(app);


describe("The User class", () => {
    it("should create a new user", () => {
        const user1 = new Class.User("smith", "smith@test.com");
        // expect egality with the attent object.
        expect(user1).toEqual({
            name: "smith",
            email: "smith@test.com",
            errors: [],
        });
    });
});

describe("The User class", () => {
    it("should create new error message if the user name is less than 5 characters", () => {
        const user = new Class.User("tom", "tom@test.com");
        user.validateName();
        expect(user.errors).toEqual(["the name must be at least 5 chars long"]);
    })
});

describe("The User class", () => {
    it("The name is required", () => {
        const user = new Class.User("", "test@test.com");
        user.validateName();
        expect(user.errors).toEqual(["the name is required"]);
    })
});

let adress;

beforeEach(() => {
    adress = new Class.Address();
});

afterEach(() => {
    adress = null;
});

describe("The isValid function", () => {
    it("should call validateName, validateEmail, validatePassword functions when isValid fn is called", () => {
        // arrange
        const user = new Class.User();
        // make the mock all (validateName, validatePassword, validateEmail) functions with spyOn for the user object
        jest.spyOn(user, 'validateName').mockImplementation(() => {});
        jest.spyOn(user, 'validateEmail').mockImplementation(() => {});
        jest.spyOn(user, 'validatePassword').mockImplementation(() => {});

        // action
        user.isValid();

        // assertion
        expect(user.validatePassword).toHaveBeenCalled();
        expect(user.validateName).toHaveBeenCalled();
        expect(user.validateEmail).toHaveBeenCalled();
    });
});

describe('Tests d\'intégration', () => {
    it('devrait retourner 200 pour une requête GET', async () => {
        const response = await server.get('/api/some-endpoint');
        expect(response.status).toBe(200);
    });

    it('devrait créer une nouvelle adresse avec les données aléatoires', async () => {
        const response = await server.post('/api/addresses')
            .send({ streetName: adress.streetName, streetNumber: adress.streetNumber });
        expect(response.status).toBe(201);
        expect(response.body.streetName).toBe(adress.streetName);
        expect(response.body.streetNumber).toBe(adress.streetNumber);
    });
});

const User = require("./../classes");

describe("The User class", () => {
    it("should create a new user", () => {
        const user1 = new User("smith", "smith@test.com");
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
        const user = new User("tom", "tom@test.com");
        user.validateName();
        expect(user.errors).toEqual(["the name must be at least 5 chars long"]);
    })
});

describe("The User class", () => {
    it("The name is required", () => {
        const user = new User("", "test@test.com");
        user.validateName();
        expect(user.errors).toEqual(["the name is required"]);
    })
});

describe("The isValid function", () => {
    it("should call validateName, validateEmail, validatePassword functions when isValid fn is called", () => {
        // arrange
        const user = new User();
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

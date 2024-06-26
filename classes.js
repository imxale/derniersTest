const faker = require('faker-br');

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.errors = [];
    }
    validateName() {
        if (this.name) {
            if (this.name.length < 5) {
                this.errors.push("the name must be at least 5 chars long");
            }
        } else {
            this.errors.push("the name is required");
        }
    }

    validateEmail() {
        console.log("validating email...");
    }

    validatePassword() {
        console.log("validating password...");
    }

    isValid() {
        this.validateName();
        this.validateEmail();
        this.validatePassword();
    }
}

class Address {
    constructor() {
        this.streetName = faker.address.streetName();
        this.streetNumber = faker.random.number();
    }
}

module.exports = { User, Address };

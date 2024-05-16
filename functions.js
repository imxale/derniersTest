const supertest = require('supertest');
const app = require('./app.js');

async function calldependance(name) {
    const response = await supertest(app).get(`/action?name=${name}`);
    return response.body;
}

function action(name) {
    return `hello ${name}!`;
}

module.exports = { calldependance, action };

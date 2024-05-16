const supertest = require('supertest');
const functions = require('@google-cloud/functions-framework');
const app = require('./function');

async function calldependance(name) {
    const response = await supertest(app).get(`/action?name=${name}`);
    return response.body;
}

function action(name) {
    return `hello ${name}!`;
}

module.exports = { calldependance, action };

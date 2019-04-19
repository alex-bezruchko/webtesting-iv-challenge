const server = require('./server.js');
const db = require('../data/dbConfig');

const request = require('supertest');

describe('the server', () => {
    beforeEach(() => {
        return db('users').truncate()
    })

    describe('the environment', () => {
        it('should set setting for the environment', () => {
            const env = process.env.DB_ENV
    
            expect(env).toBe('testing')
        })
    })

    describe('GET /', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
        
        it('should return { message: "Home Page"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ message: "Home Page"});
        })
    })

    describe('GET /error', () => {
        it('should return status 404', async () => {
            const res = await request(server).get('/wrong');
            expect(res.status).toBe(404);
        })
    })

    describe('GET /users', () => {
        it('should return json', async () => {
            const res = await request(server).get('/users');
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual([]);
        })

        it('should respond with all users in the db', async () => {
            await db('users').insert([
                {name: 'joe'},
                {name: 'snow'},
            ])

            const res = await request(server).get('/users');
            expect(res.body.length).toBe(2)
            expect(res.status).toBe(200);
            expect(res.body[0].name).toBe('joe')
            expect(res.body[0].id).toBe(1)
            expect(res.type).toBe('application/json');

        })
    })

})
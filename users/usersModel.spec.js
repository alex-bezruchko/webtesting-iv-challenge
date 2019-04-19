const Users = require('./usersModel');
const db = require('../data/dbConfig');

describe('The User Model', () => {

    describe('The Insert Fn', () => {

        beforeEach(() => {
            return db('users').truncate()
        })

        it('should add one user', async () =>  {
            await Users.insert({name: 'sam'});
            const users = await db('users');
            expect(users.length).toBe(1)
            // expect(users).toEqual('application/json');
            expect(users[0].name).toBe('sam')
        })

    })
})
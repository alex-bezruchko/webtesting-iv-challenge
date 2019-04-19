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
            expect(users[0].name).toBe('sam')
        })

        it('should insert single user and returns and id', async () =>  {
            const user = await Users.insert({name: 'sam'});
            expect(user.id).toBe(1)
            expect(user.name).toBe('sam')
        });

    })
})
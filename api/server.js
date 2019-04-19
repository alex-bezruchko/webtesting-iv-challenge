const express = require('express');
const server = express();
const Users = require('./../users/usersModel');
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({message: 'Home Page'});
});

server.get('/users', async (req, res) => {
  const users = await Users.fetchAll();
  res.status(200).json(users);
});

server.post('/users', async (req, res) => {
  const user = req.body;
  const users = await Users.insert(user);
    res.status(200).json(users);
  
});

server.get('/user/:id', async (req, res) => {
  const id = req.params.id;
  await Users.remove(id);
  res.status(200).json({ message: 'Item deleted' });
});

module.exports = server;

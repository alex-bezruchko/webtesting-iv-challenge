const express = require('express');
const server = express();
const Users = require('./../users/usersModel');
server.use(express.json());

server.get('/', async (req, res) => {
  const users = await Users.fetchAll();
  res.status(200).json(users);
});

module.exports = server;

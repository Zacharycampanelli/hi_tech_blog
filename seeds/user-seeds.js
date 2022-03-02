const { User } = require('../models');

const userData = [
  {
    username: "Zack",
    email: "zack@mail.com",
    password: "password"
  },
  {
    username: "Josh",
    email: "josh@mail.com",
    password: "password"
  },
  {
    username: "Bob",
    email: "bob@mail.com",
    password: "password"
  },
  {
    username: "Madison",
    email: "madison@mail.com",
    password: "password"
  },
  {
    username: "Susan",
    email: "susan@mail.com",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE HAS BEEN SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS HAVE BEEN SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS HAVE BEEN SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS HAVE BEEN SEEDED -----\n');

  process.exit(0);
};

seedAll();
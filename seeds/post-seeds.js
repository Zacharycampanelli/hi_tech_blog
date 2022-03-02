const { Post } = require('../models');

const postData = [
  {
    title: 'Weather',
    post_text: 'The weather outside today is super nice.',
    user_id: 1,
  },
  {
    title: 'Cars',
    post_text: 'Talk about polluting the planet, am I right?',
    user_id: 2,
  },
  {
    title: 'Dunkin',
    post_text: 'The happiest place in the world to work.',
    user_id: 2,
  },
  {
    title: 'Coding',
    post_text: 'Where you can spend 5 hours looking for an error that was simply a missing semi-colon.',
    user_id: 3,
  },
  {
    title: 'Bootcamps',
    post_text: 'It feels like im never going to sleep again, but I learn a lot!',
    user_id: 4,
  },
  {
    title: 'Seeds',
    post_text: 'Make populating a database significantly easier.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

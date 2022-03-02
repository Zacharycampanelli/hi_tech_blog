const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Its always the damn semi-colons",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Not if you live in New England.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Sleep is for the weak",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "And we arent weak!",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Literally saved me 30 seconds?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "^^ This guy is crazy",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

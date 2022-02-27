const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment')

// associations

// Users can have multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Users can be associated with many posts by voting on them
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// Users can vote on multiple posts
User.hasMany(Vote, {
    foreignKey: 'user_id'
})

// Users can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// Posts only belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// Posts can be associated with multiple users through user votes
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
})

// Posts can have multiple votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

// Each post can have multiple comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

// Each vote belongs to only one user
Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

// Each vote can only belong to one post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
})

// Each comment can only belong to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Each comment can only belong to one post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Vote, Comment };

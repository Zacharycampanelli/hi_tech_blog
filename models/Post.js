const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post Model
class Post extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id,
          }).then(() => {
            return Post.findOne({
              where: {
                id: body.post_id,
              },
              attributes: [
                'id',
                'title',
                'created_at',
                // use raw MySQL aggregate function query to get a count of how many votes the post has and return it under the name `vote_count`
                [
                  sequelize.literal(
                    '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
                  ),
                  'vote_count',
                ],

              ]
            })
        })
    }
} 
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
              len: [4]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
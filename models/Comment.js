const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Comment Model
class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [4],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            }
        }
    
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment
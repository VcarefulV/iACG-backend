import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Comment = sequelize.define('Comment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.TEXT, allowNull: false },
    authorUsername: { type: DataTypes.STRING, allowNull: false },
    authorAvatar: { type: DataTypes.STRING },
    replyTo: { type: DataTypes.STRING },
    postId: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

export default Comment;

import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

export const createUser = async (req, res) => {
    const { username, password, avatar, bio } = req.body;
    const user = await User.create({ username, password, avatar, bio });
    res.json(user);
};

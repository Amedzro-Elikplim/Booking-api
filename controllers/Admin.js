const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Menu = require("../models/Menu");
const Table = require("../models/Table");

const AllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-_id -__v");

        return res.status(200).send(users);
    } catch (error) {
        return res.status(404).send(error);
    }
};

const Restaurants = async (req, res) => {
    try {
        const restaurant = await Restaurant.find().select("-_id -__v");
        return res.status(200).send(restaurant);
    } catch (error) {
        return res.status(404).send(error);
    }
};

const Menus = async (req, res) => {
    try {
        const menus = await Menu.find().select("-_id -__v");
        return res.status(200).send(menus);
    } catch (error) {
        return res.status(404).send(error);
    }
};

const Tables = async (req, res) => {
    try {
        const tables = await Table.find().select("-_id -__v");
        return res.status(200).send(tables);
    } catch (error) {
        return res.status(404).send(error);
    }
};


module.exports = {
    AllUsers,
    Restaurants,
    Menus,
    Tables
};
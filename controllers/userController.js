const database = require("../models/userModel").database;
const userModel = require("../models/userModel").userModel;

function getUserByEmailIdAndPassword(email, password) {
    let user = userModel.findOne(email);
    if (isUserValid(user, password)) {
        if(user) {
            delete user.password;
            return user;
        }
        return null;
    }
}
function getUserById(id) {
    let user = userModel.findById(id);
    if(user) {
        delete user.password;
        return user;
    }
    return null;
}
function isUserValid(user, password) {
    return user.password === password;
}

module.exports = {
    getUserByEmailIdAndPassword,
    getUserById
}
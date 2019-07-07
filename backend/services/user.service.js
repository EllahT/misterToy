const fs= require('fs');

module.exports = {
    query,
    getById,
    update
}

var users = _createUsers();

function query() {
    return Promise.resolve(users);
}

function getById(userId) {
    var user = users.find(user => user._id === userId);
    if (user) return Promise.resolve(user);
    else return Promise.reject('Could not find requested user');
}

function update(user) {
    const userIdx = users.findIndex(currUser => currUser._id === user._id);
    if (userIdx < 0) return Promise.reject('Unknown User');
    users.splice(userIdx, 1, user);
    return _saveUsersToFile().then(() => user)
}

function _saveUsersToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile("data/user.json", JSON.stringify(users), (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        });

    })
}

function _createUsers() {
    return require('../data/user.json');
}
let users = [
    { username: 'federus', password: 'password123'},
];

function findUser(username) {
    return users.find(user => user.username === username);
}

module.exports = {findUser, users};

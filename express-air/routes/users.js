const express = require('express');
const router = express.Router();

router.get('/users', function(req, res) {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
    ];
    resp = {
        code: 1,
        msg: '',
        data: users
    }
    res.json(resp);
});

router.get('/fetchToken', function(req, res) {
    const ticket = req.query.ticket;
    const businessCode = req.query.businessCode;
    resp = {
        code: 1,
        msg: '',
        data: {accessToken: "259ec440-6396-47e8-af6b-99083f125214"},
        extra: {ticket, businessCode}
    };
    res.json(resp);
});

router.get('/users/:id', function(req, res) {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
    ];
    const user = users.find(u => u.id === req.params.id);
    res.json(user);
});

router.post('/users', function(req, res) {
    // Assuming the request body contains the user information
    const newUser = req.body;
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
    ];
    const newUserId = users.length + 1;
    const user = { ...newUser, id: newUserId };
    users.push(user);
    res.json(user);
});

router.put('/users/:id', function(req, res) {
    // Assuming the request body contains the updated user information
    const updatedUser = req.body;
    const userId = req.params.id;
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
    ];
    const userIndex = users.findIndex(u => u.id === userId);
    const oldUser = users[userIndex];
    const newUser = { ...oldUser, ...updatedUser };
    users[userIndex] = newUser;
    res.json(newUser);
});

module.exports = router;

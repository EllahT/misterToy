const userService = require('../../services/user.service');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    userService.query()
    .then(users => res.json(users))
    .catch(err => {console.log(err)});
})

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    userService.getById(userId)
    .then(user => res.json(user))
    .catch(() => {res.status(404).send('UNKNOWN USER')});
})


router.put('/:userId', (req, res) => {
    const user = req.body;
    userService.update(user)
    .then(user => res.json(user))
    .catch(() => {res.status(500).send('Could Not Edit')});
    
})
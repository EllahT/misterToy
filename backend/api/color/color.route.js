const colorService = require('../../services/color.service');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    colorService.query()
    .then(colors => res.json(colors))
    .catch(err => {console.log(err)});
})

router.get('/new', (req, res) => {
    colorService.update()
    .then(colors => res.json(colors))
    .catch(() => {console.log(err)});
})
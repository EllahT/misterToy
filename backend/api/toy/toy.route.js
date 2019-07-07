const toyService = require('../../services/toy.service');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    const filterBy = req.query;
    toyService.query(filterBy)
    .then(toys => res.json(toys))
    .catch(err => {console.log(err)});
})

router.get('/:toyId', (req, res) => {
    const toyId = req.params.toyId;
    toyService.getById(toyId)
    .then(toy => res.json(toy))
    .catch(() => {res.status(404).send('UNKNOWN TOY')});
})

router.delete('/:toyId', (req, res) => {
    const toyId = req.params.toyId;
    toyService.remove(toyId)
    .then(() => res.json({}))
    .catch(() => res.status(500).send('Could Not Delete Toy'));
})

router.post('/', (req, res) => {
    const toy = req.body;
    toyService.add(toy)
    .then(toyWithId => res.json(toyWithId))
    .catch(() => {res.status(500).send('Could Not Add')});
})

router.put('/:toyId', (req, res) => {
    const toy = req.body;
    toyService.update(toy)
    .then(toy => res.json(toy))
    .catch(() => {res.status(500).send('Could Not Edit')});
    
})

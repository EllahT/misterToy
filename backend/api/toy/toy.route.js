const toyService = require('../../services/toy.service');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    const filterBy = JSON.parse(req.body);
    console.log(filterBy)
    // toyService.query(filterBy)
    // .then(toys => res.json(toys))
    // .catch(err => {console.log(err)});
})

// //return specific bug by it's id
// router.get('/:bugId', (req, res) => {
//     const bugId = req.params.bugId;
//     bugService.getById(bugId)
//     .then(bug => res.json(bug))
//     .catch(() => {res.status(404).send('UNKNOWN BUG')});
// })

// //delete specific bug by it's id - only creator can enter!
// router.delete('/:bugId', (req, res) => {
//     if (!req.session.user) return res.status(403).send('Not Authenticated');
//     const bugId = req.params.bugId;
//     bugService.remove(bugId, req.session.user._id)
//     .then(() => {
//         res.json({})
//     })
//     .catch(() => {
//         res.status(500).send('Could Not Delete Bug')
//     });
// })

// //adds a new bug by the sent bug - creator info is sent to service
// router.post('/', (req, res) => {
//     if (!req.session.user) return res.status(403).send('Not Authenticated');
//     const bug = req.body;
//     bug.creator = req.session.user;
//     bugService.add(bug)
//     .then(bugWithId => res.json(bugWithId))
//     .catch(() => {res.status(500).send('Could Not Add')});
// })

// //update bug by it's id and the sent changes - only creator can enter!
// router.put('/:bugId', (req, res) => {
//     if (!req.session.user) return res.status(403).send('Not Authenticated');
//     const bug = req.body;
//     bugService.update(bug,req.session.user._id)
//     .then(bug => res.json(bug))
//     .catch(() => {res.status(500).send('Could Not Edit')});
    
// })

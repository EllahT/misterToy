const fs= require('fs');

module.exports = {
    query,
    getById,
    add,
    update,
    remove
}

var toys = _createToys();

function query(filterBy) {
    console.log(toys, filterBy)
    if (!filterBy) return res.data;
        
        let filteredToys = res.data;
        if (JSON.parse(filterBy.inStock) !== null) filteredToys = filteredToys.filter (toy => toy.inStock === JSON.parse(filterBy.inStock));
        if (filterBy.name) filteredToys = filteredToys.filter(toy => toy.name.toLowerCase().includes(filterBy.name.toLowerCase()));
        if (filterBy.toyType !== 'all') filteredToys = filteredToys.filter(toy => toy.type === filterBy.toyType);

        filteredToys.sort(UtilService.createSortFuncTxt(filterBy.sort.sortBy, filterBy.sort.way));
        
        return Promise.resolve(filteredToys);
}

function getById(bugId) {
    var bug = bugs.find(bug => bug._id === bugId);
    if (bug) return Promise.resolve(bug);
    else return Promise.reject('Could not find requested bug');
}

function add(bug) {
    bug._id = _makeId();
    bug.createdAt = new Date().getTime();
    bugs.push(bug);
    return _saveBugsToFile().then(() => bug)
}

function update(bug, loggedUser) {
    const bugIdx = bugs.findIndex(currBug => currBug._id === bug._id && (bug.creator._id === loggedUser || userService.isAdmin(loggedUser)));
    if (bugIdx < 0) return Promise.reject('Unknown Bug');
    bugs.splice(bugIdx, 1, bug);
    return _saveBugsToFile().then(() => bug)
}

function remove(bugId, loggedUser) {
    const bugIdx = bugs.findIndex(bug => bug._id === bugId && (bug.creator._id === loggedUser || userService.isAdmin(loggedUser)));
    if (bugIdx < 0) return Promise.reject('Unknown Bug');
    bugs.splice(bugIdx, 1);
    return _saveBugsToFile()
}

function _saveBugsToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile("data/bug.json", JSON.stringify(bugs), (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        });

    })
}

function _createToys() {
    return require('../data/toy.json');
}


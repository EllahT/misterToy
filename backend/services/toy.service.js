const fs= require('fs');
const utilService = require('../services/util.service');

module.exports = {
    query,
    getById,
    add,
    update,
    remove
}

var toys = _createToys();

function query(filterBy) {
    if (!filterBy || !Object.keys(filterBy).length) return Promise.resolve(toys);
        
        let filteredToys = toys;
        if (JSON.parse(filterBy.inStock) !== null) filteredToys = filteredToys.filter (toy => toy.inStock === JSON.parse(filterBy.inStock));
        if (filterBy.name) filteredToys = filteredToys.filter(toy => toy.name.toLowerCase().includes(filterBy.name.toLowerCase()));
        if (filterBy.toyType !== 'all') filteredToys = filteredToys.filter(toy => toy.type === filterBy.toyType);

        filteredToys.sort(utilService.createSortFuncTxt(filterBy.sortBy, filterBy.sortWay));
        
        return Promise.resolve(filteredToys);
}

function getById(toyId) {
    var toy = toys.find(toy => toy._id === toyId);
    if (toy) return Promise.resolve(toy);
    else return Promise.reject('Could not find requested toy');
}

function add(toy) {
    toy._id = utilService.makeId();
    toy.createdAt = new Date().getTime();
    toys.push(toy);
    return _saveToysToFile().then(() => toy)
}

function update(toy) {
    const toyIdx = toys.findIndex(currToy => currToy._id === toy._id);
    if (toyIdx < 0) return Promise.reject('Unknown Toy');
    toys.splice(toyIdx, 1, toy);
    return _saveToysToFile().then(() => toy)
}

function remove(toyId) {
    const toyIdx = toys.findIndex(toy => toy._id === toyId);
    if (toyIdx < 0) return Promise.reject('Unknown Toy');
    toys.splice(toyIdx, 1);
    return _saveToysToFile()
}

function _saveToysToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile("data/toy.json", JSON.stringify(toys), (err) => {
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


import axios from 'axios';
import UtilService from './UtilService.js';

export default {
    getById,
    query,
    add,
    update,
    remove
}

function query(filterBy) {
    return axios.get(_getUrl())
    .then(res => {
        if (!filterBy) return res.data;
        
        let filteredToys = res.data;
        if (JSON.parse(filterBy.inStock) !== null) filteredToys = filteredToys.filter (toy => toy.inStock === JSON.parse(filterBy.inStock));
        if (filterBy.name) filteredToys = filteredToys.filter(toy => toy.name.toLowerCase().includes(filterBy.name.toLowerCase()));
        if (filterBy.toyType !== 'all') filteredToys = filteredToys.filter(toy => toy.type === filterBy.toyType);

        filteredToys.sort(UtilService.createSortFuncTxt(filterBy.sort.sortBy, filterBy.sort.way));
        
        return filteredToys;
    })
}

function update(toy) {
    return axios.put(_getUrl(toy._id),toy)
        .then(res => res.data)
}

function add(toy) {
    return axios.post(_getUrl(), toy)
    .then(res => res.data)
}

function remove(toyId) {
    return axios.delete(_getUrl(toyId))
    .then(res => res.data)
}

function getById(toyId) {
    return axios.get(_getUrl(toyId))
    .then(res => res.data)
}

function _getUrl(id = '') {
    return `http://localhost:3000/toy/${id}`
}
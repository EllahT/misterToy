import axios from 'axios';

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
        let filteredToys = res.data;
        
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
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
    if (!filterBy) return axios.get(_getUrl());
    else return axios.get(_getUrl(_getQueryString(filterBy)))
    .then(res => res.data)
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
    return `http://localhost:3000/api/toy/${id}`
}

function _getQueryString(filterBy) {
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}
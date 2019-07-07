import axios from 'axios';
const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/' : 'http://localhost:3000/api/';

export default {
    getById,
    query,
    add,
    update,
    remove,
    changeImg
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

function changeImg(toyId) {
    return axios.put(_getUrl(toyId)+'/setRandomImg')
        .then(res => res.data)
}

function _getUrl(id = '') {
    return `${BASE_URL}toy/${id}`
}

function _getQueryString(filterBy) {
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}
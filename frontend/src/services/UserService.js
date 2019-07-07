import axios from 'axios';
const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/' : 'http://localhost:3000/api/';

export default {
    query,
    getById,
    update,
    getPreSetColors,
    changeColors
}

function query() {
    return axios.get(_getUrl())
    .then(res => res.data);
}

function getById(userId) {
    return axios.get(_getUrl(userId))
    .then(res => res.data);
}

function update(userData) {
    return axios.put(_getUrl(userData._id),userData)
        .then(res => res.data)
}

function _getUrl(id = '') {
    return `${BASE_URL}user/${id}`
}

function getPreSetColors() {
    return axios.get(`${BASE_URL}color`)
    .then(res => res.data);
}

function changeColors() {
    return axios.get(`${BASE_URL}color/new`)
    .then(res => res.data);
}
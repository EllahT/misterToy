import axios from 'axios';

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
    return `http://localhost:3000/api/user/${id}`
}

function getPreSetColors() {
    return axios.get('http://localhost:3000/api/color')
    .then(res => res.data);
}

function changeColors() {
    return axios.get('http://localhost:3000/api/color/new')
    .then(res => res.data);
}
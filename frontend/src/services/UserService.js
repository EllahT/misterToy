import axios from 'axios';

export default {
    query,
    update,
    getPreSetColors
}

function query() {
    return axios.get(_getUrl('usr1'))
    .then(res => res.data);
}

function update(userData) {
    return axios.put(_getUrl(userData._id),userData)
        .then(res => res.data)
}

function _getUrl(id = '') {
    return `http://localhost:3000/user/${id}`
}

function getPreSetColors() {
    return axios.get('http://localhost:3000/colors')
    .then(res => res.data);
}
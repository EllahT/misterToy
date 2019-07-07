import axios from 'axios';
const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/' : 'http://localhost:3000/api/';

export default {
    getRandomImg,
    uploadImg
}

function getRandomImg() {
    return axios.get(_getUrl('setRandomImg'))
        .then(res => res.data)
}

function uploadImg(ev) {
    console.log(ev.target.files[0])
    const form = new FormData()
    form.append('imgUpload', ev.target.files[0])
    return axios.post(_getUrl('/upload/cloudinary'), form)
    .then(res => res.data.secure_url)
}

function _getUrl(action = '') {
    return `${BASE_URL}image/${action}`
}

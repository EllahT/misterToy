const BASE_URL = (process.env.NODE_ENV !== 'development') 
        ? '/api/' 
        : 'http://localhost:3000/api/';

import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});


async function ajax(endpoint, method='get', data=null) {
    const res = await axios({
        url: `${BASE_URL}${endpoint}`,
        method,
        data
    })
    return res.data;
}


export default {
    ajax
}
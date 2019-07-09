import HttpService from './HttpService';

export default {
    getById,
    query,
    add,
    update,
    remove
}

const BASE_URL = 'toy/';

function query(filterBy) {
    return HttpService.ajax(`${BASE_URL}${_getQueryString(filterBy)}`);
}

function update(toy) {
    return HttpService.ajax(`${BASE_URL}${toy._id}`,'put',toy);
}

function add(toy) {
    return HttpService.ajax(BASE_URL,'post',toy);
}

function remove(toyId) {
    return HttpService.ajax(`${BASE_URL}${toyId}`, 'delete');
}

function getById(toyId) {
    return HttpService.ajax(`${BASE_URL}${toyId}`,'get');
}

function _getQueryString(filterBy) {
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}
import HttpService from './HttpService';

export default {
    query,
    getById,
    add,
    update,
    login,
    logout,
    getPreSetColors,
    changeColors
}

function query() {
    return HttpService.ajax('user/');
}

function getById(userId) {
    return HttpService.ajax(`user/${userId}`);
}

function add(userData) {
    return HttpService.ajax('user','post',userData);
}

function update(userData) {
    return HttpService.ajax(`user/${userData._id}`,'put',userData);
}

function login(username) {
    return HttpService.ajax(`user/signin`,'post',username);
}

function logout() {
    return HttpService.ajax('user.logout','post');
}

function getPreSetColors() {
    return HttpService.ajax('color');
}

function changeColors() {
    return HttpService.ajax('/color/new');
}


import HttpService from './HttpService';

export default {
    query,
    getById,
    add,
    update,
    remove,
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

function add(user) {
    return HttpService.ajax('user','post',user);
}

function update(user) {
    return HttpService.ajax(`user/${user._id}`,'put',user);
}

function remove(userId) {
    return HttpService.ajax(`user/${userId}`, 'delete');
}

function login(email) {
    return HttpService.ajax(`user/login`,'post',{email});
}

function logout() {
    return HttpService.ajax('user/logout','post');
}

function getPreSetColors() {
    return HttpService.ajax('color');
}

function changeColors() {
    return HttpService.ajax('/color/new');
}


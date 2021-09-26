import request from './request.js';

const addUser = function(params) {
  // 接口中手动添加token
  let headers = {};
  headers['Authorization'] = localStorage.getItem('token');
  return request({ url: '/user/add', method: 'POST', data: params, headers });
};

const getUserList = function() {
  return request({ url: '/user/list', method: 'GET', needToken: true });
};

const getUserInfo = function(id) {
  return request({ url: '/user/info', method: 'GET', params: { id: id } });
};

const delUser = function(id) {
  return request({ url: '/user/del', method: 'GET', params: { id } });
};

export { addUser, getUserList, getUserInfo, delUser };
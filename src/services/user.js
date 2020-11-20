import request from './plugins/request';
const BASE_URL = 'UserDr.ashx?t=';

//用户(医生)登录
let login = (params = {}) => {
    return request({
        url: BASE_URL + 'Login',
        params:params,
        method:'POST'
    })
};

export default {
    login
}
import request from './plugins/request';

//用户登录接口
let login = (params = {}) => {
    return request({
        url: 'admin/login/getToken',
        params:params,
        method:'post'
    })
};

//用退出登录接口
let logout = (params = {}) => {
    return request({
        url: 'admin/login/quit',
        params:params,
        method:'post'
    })
};


//获取管理员列表
let getList = (params = {}) => {
    return request({
        url: 'admin/manager/getList',
        params:params,
        method:'GET'
    })
};

//修改管理员密码
let setInfo = (params = {}) => {
    return request({
        url: 'admin/manager/saveAdmin',
        params:params,
        method:'POST'
    })
};

//新建管理员账号
let create = (params = {}) => {
    return request({
        url: 'admin/manager/addAdmin',
        params:params,
        method:'POST'
    })
};

//删除管理员账号
let deleteItem = (params = {}) => {
    return request({
        url: 'admin/manager/delAdmin',
        params:params,
        method:'post'
    })
};

export default {
    login:login,
    getList:getList,
    setInfo:setInfo,
    create:create,
    delete:deleteItem,
    logout:logout
}
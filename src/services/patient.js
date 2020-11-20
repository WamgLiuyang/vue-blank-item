import request from './plugins/request';
const BASE_URL = 'Patient.ashx?t=';

//获取用户管理搜索列表页默认患者(用户)列表
let getPatientList = (params = {}) => {
    return request({
        url: BASE_URL + 'gDefaultPatientL',
        params:params,
        method:'POST'
    })
};

// 获取该医生所属医院负责的小区列表
let getEstateList = (params = {}) => {
    return request({
        url: BASE_URL + 'gEstateL',
        params:params,
        method:'POST'
    })
};

//根据小区号获取患者(用户)列表
let getPatientByEstateID = (params = {}) => {
    return request({
        url: BASE_URL + 'gPatientByEstateL',
        params:params,
        method:'POST'
    })
};

// 用户管理：根据关键字获取患者用户列表
let searchPatientList = (params = {}) => {
    return request({
        url: BASE_URL + 'gSearchPatientL',
        params:params,
        method:'POST'
    })
};

//获取我关注的用户列表
let getCareforList = (params = {}) => {
    return request({
        url: BASE_URL + 'gCareforL',
        params:params,
        method:'POST'
    })
};

// 医生删除某个关注的用户
let deleteCareforUser = (params = {}) => {
    return request({
        url: BASE_URL + 'dCarefor',
        params:params,
        method:'POST'
    })
};

// 根据关键字获取搜索框患者用户列表
let getHealthSearchPatientList = (params = {}) => {
    return request({
        url: BASE_URL + 'gHealthSearchPatientL',
        params:params,
        method:'POST'
    })
};

//获取每日健康信息查看历史记录
let getHealthHistoryList = (params = {}) => {
    return request({
        url: BASE_URL + 'gHealth_hislogL',
        params:params,
        method:'POST'
    })
};


//获取用户健康报告查看历史记录
let getReportHistoryList = (params = {}) => {
    return request({
        url: BASE_URL + 'gReportLogL',
        params:params,
        method:'POST'
    })
};

//获取用户健康报告页顶部年份菜单
let getReportMenuList = (params = {}) => {
    return request({
        url: BASE_URL + 'gReportMenu',
        params:params,
        method:'POST'
    })
};

// 获取某用户的健康报告内容
let getReportInfo = (params = {}) => {
    return request({
        url: BASE_URL + 'gReport',
        params:params,
        method:'POST'
    })
};

//获取用户健康信息页该用户最新的心跳、体重、血压、血糖、体温信息
let getHealthinfo = (params = {}) => {
    return request({
        url: BASE_URL + 'gCurHealthinfo',
        params:params,
        method:'POST'
    })
};


export default{
	getPatientList, getEstateList, getPatientByEstateID, searchPatientList, getCareforList, deleteCareforUser, getHealthSearchPatientList, 
	getHealthHistoryList, getReportHistoryList, getReportMenuList, getReportInfo, getHealthinfo
}
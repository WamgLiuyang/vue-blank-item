import request from './plugins/request';
const BASE_URL = 'Hosp.ashx?t=';

//获取首页医院通知推荐信息
let getHomeNotice = (params = {}) => {
    return request({
        url: BASE_URL + 'gSNotice',
        params:params,
        method:'POST'
    })
};

//获取医院通知信息列表
let getNoticeList = (params = {}) => {
    return request({
        url: BASE_URL + 'gNoticeL',
        params:params,
        method:'POST'
    })
};

//获取医院通知信息内容
let getNoticeInfo = (params = {}) => {
    return request({
        url: BASE_URL + 'gNotice',
        params:params,
        method:'POST'
    })
};

//获取首页推荐的健康科普文章列表
let getHomeArticle = (params = {}) => {
    return request({
        url: BASE_URL + 'gIndexArticleL',
        params:params,
        method:'POST'
    })
};

//获取健康科普文章列表
let getArticleList = (params = {}) => {
    return request({
        url: BASE_URL + 'gHealthArticleL',
        params:params,
        method:'POST'
    })
};

//获取健康科普文章内容
let getArticleInfo = (params = {}) => {
    return request({
        url: BASE_URL + 'gHealthArticle',
        params:params,
        method:'POST'
    })
};

export default {
    getHomeNotice, getNoticeList, getNoticeInfo, getHomeArticle, getArticleList, getArticleInfo
}
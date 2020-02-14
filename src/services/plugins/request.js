import axios from 'axios'
import qs from 'qs'
// import Router from '../../router'

const request = (option) => {
    option.method = option.method.toLowerCase();
    let newoption = { url: '/', method: 'get', params: {}};
    Object.assign(newoption, option);
    if (newoption.method === 'get') {
        newoption.url = newoption.url + '?' + qs.stringify(newoption.params);
    }
    Object.assign(newoption.params, {});
    newoption.params = qs.stringify(newoption.params);
    return new Promise((resolve, reject) => {
        axios[newoption.method](newoption.url, newoption.params).then(res => {
            let data = res.data;
			reject(data);
        }).catch((error) => {
            // Router.push({ name: 'login' })
            reject(error);
        })
    })
}

export default request;

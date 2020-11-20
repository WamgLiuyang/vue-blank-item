import axios from 'axios'
import qs from 'qs'
import Router from '../../router'
import { Toast } from 'vant';

const request = (option) => {
    option.method = option.method.toLowerCase();
    let newoption = { url: '/', method: 'get', params: {}};
    Object.assign(newoption, option);
    if (newoption.method === 'get') {
        newoption.url = newoption.url + '&' + qs.stringify(newoption.params);
		// newoption.params =  { params:newoption.params };
    }
    Object.assign(newoption.params, {});
    newoption.params = qs.stringify(newoption.params);
    return new Promise((resolve, reject) => {
        axios[newoption.method](newoption.url, newoption.params).then(res => {
            let data = res.data;
			if(data.err){
				if(data.errMsg.indexOf('token已过期') > -1){
					Toast.fail('登录信息已失效请从新登录');
					Router.push('/login');
				}else{
					reject(data);
				}
			}else{ 
				resolve(data); 
			}
        }).catch((error) => {
            // Router.push({ name: 'login' })
            reject(error);
        })
    })
}

export default request;

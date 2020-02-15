import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import axios from 'axios';
import '@/assets/css/css-Righteous.css';
import '@/assets/css/commom.css';

Vue.config.productionTip = false;

axios.interceptors.request.use(
	(config) => {
		// const baseURL = process.env.NODE_ENV === 'production' ? '/' : ''; // 判断当前模式
		config.baseURL = '/';		// 接口携带的链接
		config.withCredentials = true; 	// 允许携带token 
		config.timeout = 6000;			// 响应时间
		let token = localStorage.getItem('token');
		if (token) {
			config.headers = {
				'token': token,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
		return config;
	},
	error => {
		return Promise.rbaseURLeject(error)
	}
);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/css/css-Righteous.css';
import '@/assets/css/commom.css';
import '@/assets/js/Clipper'
import 'lib-flexible/flexible';
import { Toast, Lazyload  } from 'vant';

Vue.config.productionTip = false;

Vue.use(infiniteScroll).use(Vant).use(Lazyload);

Toast.setDefaultOptions('loading', { forbidClick: true });
Toast.setDefaultOptions({ position: 'bottom' });
Vue.prototype.$toast = Toast

Vue.prototype.imgPath =  process.env.NODE_ENV === 'production' ? '/dr/home/' : '';

// import vConsole from 'vconsole'
// window.vConsole = new vConsole();

axios.interceptors.request.use(
	(config) => {
		const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api/'; // 判断当前模式
		config.baseURL = baseURL + 'dr/applg/drlg/'; // 接口携带的链接
		config.withCredentials = true; 	// 允许携带token 
		config.timeout = 6000;			// 响应时间
		config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
		return config;
	},
	error => {
		return Promise.rbaseURLeject(error)
	}
);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

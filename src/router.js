import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from './views/HomePage.vue';
import NotFoundPage from './views/NotFoundPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '*', component: NotFoundPage },
		{ path: '/', component: homePage },
		{
			path:'/about',
			name: 'about',
			component: () => import('./views/AboutPage.vue'),
			meta: {
			    title: 'about',
				breadcrumb: [
				    {name: '首页', link: '/'}
				]
			},
			children:[]
		}
	]
});

export default router;
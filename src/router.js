import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import NotFoundPage from './views/NotFoundPage.vue';

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error);
}

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
		return savedPosition ? savedPosition : { x: 0, y: 0 };
	},
	routes: [
		{ path: '*', component: NotFoundPage },
		{ 
			path: '/', 
			redirect: '/',
			component: () => import('./views/homeLayout/LayoutTabbar.vue'),
			children:[
				{
					path:'/',
					name: 'home',
					component: HomePage,
					meta: {
					    title: '首页',
					}
				},
				{
					path:'/user',
					name: 'user',
					component: () => import('./views/UserPage.vue'),
					meta: {
					    title: '用户',
					}
				},
				{
					path:'/notice',
					name: 'notice',
					component: () => import('./views/NoticePage.vue'),
					meta: {
					    title: '通知',
					}
				},
				{
					path:'/inquiry',
					name: 'inquiry',
					component: () => import('./views/InquiryPage.vue'),
					meta: {
					    title: '问诊',
					}
				},
				{
					path:'/my',
					name: 'my',
					component: () => import('./views/MyPage.vue'),
					meta: {
					    title: '我的',
					}
				}
			]
		},
		{
			path:'/article',
			name: 'article',
			component: () => import('./views/ArticlePage.vue'),
			meta: {
			    title: '健康科普',
			}
		},
		{
			path:'/article_details/:id',
			props: true,
			name: 'article_details',
			component: () => import('./views/ArticleDetailsPage.vue'),
			meta: {
			    title: '健康科普',
			}
		},
		{
			path:'/follow',
			name: 'follow',
			component: () => import('./views/FollowPage.vue'),
			meta: {
			    title: '我关注的用户',
			}
		},
		{
			path:'/hospital_notice/:id',
			props:true,
			name: 'hospital_notice',
			component: () => import('./views/HospitalNoticePage.vue'),
			meta: {
			    title: '医院通知',
			}
		},
		{
			path:'/evaluate',
			name: 'evaluate',
			component: () => import('./views/EvaluatePage.vue'),
			meta: {
			    title: '服务总体评价',
			}
		},
		{
			path:'/evaluate_details',
			name: 'evaluate_details',
			component: () => import('./views/EvaluateDetailsPage.vue'),
			meta: {
			    title: '服务评价明细',
			}
		},
		{
			path:'/manage',
			name: 'manage',
			component: () => import('./views/UserManagePage.vue'),
			meta: {
			    title: '用户管理',
			}
		},
		{
			path:'/manage/:type',
			props:true,
			name: 'manage-type',
			component: () => import('./views/UserManagePage.vue'),
			meta: {
			    title: '用户管理',
			}
		},
		{
			path:'/user_list/:id',
			props:true,
			name: 'user_list',
			component: () => import('./views/UserListPage.vue'),
			meta: {
			    title: '用户列表',
			}
		},
		{
			path:'/health/info/:id',
			props:true,
			name: 'health_info',
			component: () => import('./views/HealthInfoPage.vue'),
			meta: {
			    title: '用户健康信息',
			}
		},
		{
			path:'/login',
			name:'login',
			component: () => import('./views/LoginPage.vue'),
			meta: {
			    title: '登录',
			}
		},
		{
			path:'/retrieve',
			name:'retrieve',
			component: () => import('./views/RetrievePage.vue'),
			meta: {
			    title: '找回密码',
			}
		},
		{
			path:'/register',
			name:'register',
			component: () => import('./views/RegisterPage.vue'),
			meta: {
			    title: '注册',
			}
		},
		{
			path:'/reset',
			name:'reset',
			component: () => import('./views/ResetPage.vue'),
			meta: {
			    title: '修改密码',
			}
		},
		{
			path:'/edit_profile',
			name:'edit_profile',
			component: () => import('./views/EditProfilePage.vue'),
			meta: {
			    title: '修改密码',
			}
		},
		{
			path:'/report/:id',
			props: true,
			name:'report',
			component: () => import('./views/ReportPage.vue'),
			meta: {
			    title: '用户健康报告',
			}
		},
		{
			path:'/bloodsugar',
			name:'bloodsugar',
			component: () => import('./views/BloodSugarPage.vue'),
			meta: {
			    title: '血糖',
			}
		},
		{
			path:'/bloodpressure',
			name:'bloodpressure',
			component: () => import('./views/BloodPressurePage.vue'),
			meta: {
			    title: '血压',
			}
		},
		{
			path:'/temperature',
			name:'temperature',
			component: () => import('./views/TemperaturePage.vue'),
			meta: {
			    title: '体温',
			}
		},
		{
			path:'/weight',
			name:'weight',
			component: () => import('./views/WeightPage.vue'),
			meta: {
			    title: '体重',
			}
		},
		{
			path:'/heartbeat',
			name:'heartbeat',
			component: () => import('./views/HeartbeatPage.vue'),
			meta: {
			    title: '心跳',
			}
		},
		{
			path:'/revise/phone_number',
			name:'phone_number',
			component: () => import('./views/PhoneNumberPage.vue'),
			meta: {
			    title: '修改手机号',
			}
		},
		{
			path:'/revise/department',
			name:'department',
			component: () => import('./views/DepartmentPage.vue'),
			meta: {
			    title: '所属科室',
			}
		},
		{
			path:'/revise/full_name',
			name:'full_name',
			component: () => import('./views/FullNamePage.vue'),
			meta: {
			    title: '真实姓名',
			}
		},
		{
			path:'/revise/title',
			name:'title',
			component: () => import('./views/TitlePage.vue'),
			meta: {
			    title: '职称',
			}
		},
		{
			path:'/revise/expert',
			name:'expert',
			component: () => import('./views/ExpertPage.vue'),
			meta: {
			    title: '擅长描述',
			}
		},
		{
			path:'/revise/profile',
			name:'profile',
			component: () => import('./views/ProfilePage.vue'),
			meta: {
			    title: '个人简介',
			}
		},
		{
			path:'/revise/hospital',
			name:'hospital',
			component: () => import('./views/HospitalPage.vue'),
			meta: {
			    title: '医院',
			}
		},
		{
			path:'/chatroom',
			name:'chatroom',
			component: () => import('./views/ChatroomPage.vue'),
			meta: {
			    title: '聊天室',
			}
		},
		{
			path:'/avatar',
			name:'avatar',
			component: () => import('./views/AvatarPage.vue'),
			meta: {
			    title: '选择头像',
			}
		}
	]
});

const isNotNull = (e) => (!e || e.length === 0 || (typeof e !== 'string'));
 
router.beforeEach((to, from, next)=>{
	if(to.name === 'login'){
		next();
	}else{
		const { token } = localStorage;
		if(isNotNull(token)){
			next('/login');
		}else{
			next();
		}
	}
});

export default router;

<template>
  <div class="my">
	  <div class="heade">
		  <h2 class="title">个人中心</h2>
		  <div v-if="isLogin" class="userinfo">
		  		  <img :src="this.imgPath + 'static/image/common/doctor.png'" alt="doctor-avatar">
		  		  <div class="user-name">{{ token.drname }}</div>
		  </div>
		  <div v-else class="not-logged">
		  		  <img class="default-avatar" src="../assets/image/my/default.png" alt="default">
		  		  <router-link class="button login" to="/login">去登录</router-link>
		  		  <router-link class="button register" to="/register">去注册</router-link>
		  </div>
	  </div>
	  <div class="menu-box">
		  <ul class="menu">
		  	<router-link tag="li" :to="isLogin ? '/reset' : '/login'">
				<img class="menu-icno" src="../assets/image/my/menu_1.png" alt="menu">
				<div class="menu-text">修改密码</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>	
			<router-link tag="li" :to="isLogin ? '/retrieve' : '/login'">
				<img class="menu-icno" src="../assets/image/my/menu_9.png" alt="menu">
				<div class="menu-text">找回密码</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>
		  	<router-link tag="li" :to="isLogin ? '/edit_profile' : '/login'" >
				<img class="menu-icno" src="../assets/image/my/menu_2.png" alt="menu">
				<div class="menu-text">修改资料</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>
		  </ul>
		  <ul class="menu spacing">
		  	<router-link tag="li" :to="isLogin ? '/follow' : '/login'">
				<img class="menu-icno" src="../assets/image/my/menu_3.png" alt="menu">
				<div class="menu-text">我关注的用户</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>
			<router-link tag="li" :to="isLogin ? '/user' : '/login'">
				<img class="menu-icno" src="../assets/image/my/menu_4.png" alt="menu">
				<div class="menu-text">我的用户数{{isLogin ? '(1280)' : ''}}</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>
			<router-link tag="li" :to="isLogin ? '/report' : '/login'">
				<img class="menu-icno" src="../assets/image/my/menu_5.png" alt="menu">
				<div class="menu-text">我的报告</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</router-link>
		  </ul>
		  <ul class="menu spacing">
		  	<li>
				<img class="menu-icno" src="../assets/image/my/menu_6.png" alt="menu">
				<div class="menu-text">当前版本(V1.0.5)</div>
			</li>
			<li>
				<img class="menu-icno" src="../assets/image/my/menu_7.png" alt="menu">
				<div class="menu-text">检查新版本</div>
				<img class="more-icno" src="../assets/image/my/more.png" alt="more">
			</li>
			<li class="layout-box">
				<div class="munu-line">
					<img class="menu-icno" src="../assets/image/my/menu_8.png" alt="menu">
					<div class="menu-text">官方客服</div>
				</div>
				<div class="official">
					<h2>官方电话：400-12345678</h2>
					<h2>官方微信：davidhzq1@qq.com</h2>
				</div>
			</li>
		  </ul>
	  </div>
  </div>
</template>
<script>
export default {
	name:'MyPage',
	data() {
		return {
			isLogin: localStorage.getItem("token") !== null,
			token: JSON.parse(localStorage.getItem("token"))
		};
	},
	mounted() {
		// console.log(localStorage.getItem("token") !== null);
	},
	methods: {
		
	},
};
</script>

<style lang="scss" scoped>
	.my{
		overflow: hidden;
		.heade{
			position: fixed;
			top: 0;
			z-index: 9;
			width: 100%;
			.title{
				background-color: #69C3C9;
				padding: 30px 0 20px;
				font-size:36px;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height: 38px;
				text-align: center;
			}
			.userinfo{
				
				padding:4px 0 25px;
				display: flex;
				align-items: center;
				background-color: #69C3C9;
				img[alt="doctor-avatar"]{
					width:148px;
					height:148px;
					box-sizing: border-box;
					border-radius:50%;
					border: 10px solid rgba(255,255,255,.2);
					margin-left: 30px;
				}
				.user-name{
					margin-left: 28px;
					font-size:38px;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
			}
			.not-logged{
				
				background-color: #69C3C9;
				padding:12px 0 34px;
				display: flex;
				.default-avatar{
					width:130px;
					height:130px;
					border-radius:50%;
					object-fit: cover;
					margin-left: 34px;
				}
				.login{
					margin-left: 24px;
				}
				.register{
					margin-left: 18px;
				}
				.button{
					display: flex;
					align-items: center;
					justify-content: center;
					width:170px;
					height:58px;
					border:2px solid rgba(255,255,255,1);
					border-radius:29px;
					margin-top: 44px;
					font-size:34px;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
			}
		}
		.menu-box{
			margin-top: 263px;
			// margin-top: 165px;
			background-color: #fff;
			.spacing{
				border-top:20px solid #F5F5F5;
			}
			.menu{
				.layout-box{
					display: block !important;
					height: auto !important; 
					.munu-line{
						display: flex;
						margin-top: 38px;
						padding-bottom: 10px;
					}
					.official{
						font-weight:400;
						color:rgba(153,153,153,1);
						margin-left: 54px;
						line-height: 30px;
						h2{
							font-size:30px;
							margin-top: 20px;
							&:last-child{
								padding-bottom: 114px;
							}
						}
						
					}
				}
				li{
					position: relative;
					display: flex;
					align-items: center;
					height: 114px;
					width:660px;
					margin: 0 auto;
					border-top:1px solid rgba(238,237,237,1);
					overflow: hidden;
					&:first-child{
						border-top: none;
					}
					.menu-icno{
						width: 42px;
						height: 42px;
						margin-left: -5px;
					}
					.menu-text{
						margin-left: 15px;
						font-size:34px;
						font-weight:400;
						color:rgba(51,51,51,1);
					}
					.more-icno{
						position: absolute;
						right: -10px;
						width: 40px;
						height: 40px;
					}
				}
			}
		}
	}
</style>
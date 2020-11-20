<template>
	<div class="login">
		<img src="../assets/image/login/back.png" alt="back" @click="$router.go(-1)">
		<form class="from-box" @submit.prevent.stop="submitToLogin">
			<h2 class="title">家庭医生</h2>
			<div class="input-box">
				<img src="../assets/image/login/phone.png" alt="input-icon">
				<div class="input-border">
					<input class="input" type="text" placeholder="请输入手机号" v-model="form.tel"/>
				</div>
			</div>
			<div class="input-box mt65">
				<img src="../assets/image/login/password.png" alt="input-icon">
				<div class="input-border">
					<input class="input" type="password" placeholder="请输入密码" v-model="form.passwd"/>
				</div>
			</div>
			<div class="forget">
				<router-link class="forget-link" to="/retrieve">忘记密码？</router-link>
			</div>
			<button type="submit">登录</button>
			<div class="tips-box">还没有账号？
				<router-link class="toRegister" to="/register">立即注册</router-link>
			</div>
		</form>
	</div>
</template>

<script>
	import user from '@/services/user.js'
	
	export default {
		name:'LoginPage',
		data(){
			return{
				form:{
					tel: '13011012343',
					passwd: '123123'
				}
			}
		},
		mounted() {
			
		},
		methods:{
			async submitToLogin(){
				try{
					const userinfo = await user.login(this.form);
					if(userinfo.data && (typeof userinfo.data) === 'object'){
						localStorage.setItem("token", JSON.stringify(userinfo.data.pop()));
					}
					this.$router.go(-1);
				}catch(e){
					this.$toast.fail(e.errMsg);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.login{
		position: fixed;
		width: 100%;
		height: 100%;
		background: transparent url(../assets/image/login/background.png) no-repeat center;
		background-size: cover;
		img[alt="back"]{
			margin: 40px 0 0 28px;
			width: 32px;
			height: 32px;
		}
		.from-box{
			position: absolute;
			top: 50%;
			transform: translateY(-60%);
			width: 100%;
			.title{
				font-size:60px;
				font-weight:bold;
				color:rgba(105,195,201,1);
				line-height: 60px;
				text-align: center;
				margin-bottom: 142px;
			}
			.mt65{
				margin-top: 65px;
			}
			.input-box{
				display: flex;
				justify-content: center;
				align-items: center;
				img[alt="input-icon"]{
					width:42px;
					height:42px;
				}
				.input-border{
					margin-left: 32px;
					padding: 12px 0;
					border-bottom: 1px solid #B8B8B8;
					.input{
						width:528px;
						height: 42px;
						font-size:30px;
						background-color: transparent;
					}
				}
			}
			.forget{
				margin-top: 32px;
				font-size:22px;
				font-weight:400;
				line-height:24px;
				height:24px;	
				position: relative;
				.forget-link{
					position: absolute;
					left: 540px;
					color:rgba(184,184,184,1);
				}
			}
			button[type="submit"]{
				width:590px;
				height:86px;
				background:linear-gradient(0deg,rgba(105,195,201,1),rgba(139,220,225,1));
				border-radius:43px;
				display: block;
				margin: 50px auto 0;
				border: none;
				font-size:32px;
				font-weight:bold;
				color:rgba(255,255,255,1);
			}
		}
	}
	.tips-box{
		margin-top: 34px;
		color: #B8B8B8;
		font-size:26px;
		font-family:Source Han Sans CN;
		font-weight:400;
		line-height: 26px;
		text-align: center;
		.toRegister{
			color: #69C3C9;
		}
	}
</style>
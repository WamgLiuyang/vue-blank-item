<template>
	<div class="register">
		<img src="../assets/image/login/back.png" alt="back" @click="$router.go(-1)">
		<form class="from-box" @submit.prevent.stop="submitToLogin">
			<h2 class="title">家庭医生</h2>
			<div class="input-box">
				<img src="../assets/image/login/phone.png" alt="input-icon">
				<div class="input-border">
					<input type="text" placeholder="请输入手机号"/>
				</div>
			</div>
			<div class="input-box">
				<img src="../assets/image/login/name.png" alt="input-icon">
				<div class="input-border">
					<input type="text" placeholder="请输入真实姓名"/>
				</div>
			</div>
			<div class="input-box">
				<img src="../assets/image/login/hospital.png" alt="input-icon">
				<div class="input-border">
					<div class="hospital">
						<input type="text" placeholder="请输入医院名" v-model="form.hospital"/>
						<img src="../assets/image/login/down.png" alt="down">
					</div>
				</div>
				<ul :class="['hospital-list', !hospitalListIsShow && 'hospital-list-hide']">
					<li v-for="(item, index) in 5":key="index" @click="choicesThishospital">西铁营第一医院</li>
				</ul>
			</div>
			<div class="input-box">
				<img src="../assets/image/login/depar.png" alt="input-icon">
				<div class="input-border">
					<input type="text" placeholder="请输入所属的科室"/>
				</div>
			</div>
			<div class="input-box">
				<img src="../assets/image/login/password.png" alt="input-icon">
				<div class="input-border">
					<input type="password" placeholder="请输入密码"/>
					<img src="../assets/image/login/see.png" alt="see">
				</div>
			</div>
			
			<div class="input-box">
				<img src="../assets/image/login/password.png" alt="input-icon">
				<div class="input-border">
					<input type="password" placeholder="请输入重复密码"/>
					<img src="../assets/image/login/see.png" alt="see">
				</div>
			</div>
			<button type="submit">注册并登录</button>
			<div class="tips-box">还没有账号？
				<router-link class="toRegister" to="/login">立即登录</router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name:'RegisterPage',
		watch:{
			deep:true,
			'form.hospital': function(val, old) {
				this.hospitalListIsShow = (val.length > 0);
				console.log(old, val, this.hospitalListIsShow);
			}
		},
		data(){
			return{
				form:{
					hospital:''
				},
				hospitalListIsShow: false
			}
		},
		methods:{
			choicesThishospital(){
				this.hospitalListIsShow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register{
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
			transform: translateY(-50%);
			width: 100%;
			.title{
				font-size:60px;
				font-weight:bold;
				color:rgba(105,195,201,1);
				line-height: 60px;
				text-align: center;
				margin-bottom: 64px;
			}
			.input-box{
				position: relative;
				margin-bottom: 48px;
				display: flex;
				justify-content: center;
				align-items: center;
				img[alt="input-icon"]{
					width:42px;
					height:42px;
				}
				.input-border{
					width:528px;
					margin-left: 32px;
					padding: 12px 0;
					border-bottom: 1px solid #B8B8B8;
					display: flex;
					align-items: center;
					input[type="text"],input[type="password"]{
						display: block;
						width: 100%;
						flex: 1;
						height: 42px;
						font-size:30px;
						background-color: transparent;
					}
					img[alt="see"]{
						width:30px;
						height:12px;
						margin-right: 12px;
					}
					.hospital{
						width: 100%;
						height: 42px;
						font-size:34px;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:42px;
						display: flex;
						align-items: center;
						position: relative;
						img[alt="down"]{
							width:50px;
							height:18px;
							object-fit: cover;
							right:2px;
							position: absolute;
						}
					}
					
				}
				.hospital-list-hide{
					height: 0 !important;
					// transform: translateY(0) !important;
					opacity: 0 ;
				}
				.hospital-list{
					transition: all 0.3s;
					z-index: 99;
					overflow: hidden;
					height: 490px;
					transform: translateY(100%);
					bottom: 0;
					left: 128px;
					position: absolute;
					width:508px;
					background:rgba(255,255,255,1);
					box-shadow:0px 0px 29px 0px rgba(179,179,179,0.27);
					border-radius:6px;
					li{
						box-sizing: border-box;
						text-align: center;
						width:432px;
						margin: 0 auto;
						font-size:30px;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:98px;
						border-top: 1px solid #EBEBEB;
						&:first-child{
							border-top: none;
						}
					}
				}
			}
			button[type="submit"]{
				width:590px;
				height:86px;
				background:linear-gradient(0deg,rgba(105,195,201,1),rgba(139,220,225,1));
				border-radius:43px;
				display: block;
				margin: 80px auto 0;
				border: none;
				font-size:32px;
				font-weight:bold;
				color:rgba(255,255,255,1);
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
		}
	}
</style>
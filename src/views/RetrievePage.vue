<template>
	<div class="retrieve">
		<img src="../assets/image/login/back.png" alt="back" @click="$router.go(-1)">
		<form class="from-box" @submit.prevent.stop="submitToLogin">
			<h2 class="title">找回密码</h2>
			<div class="input-box">
				<input type="text" placeholder="请输入手机号">
			</div>
			<div class="input-box mt50">
				<input type="text" placeholder="请输入验证码">
				<div :class="['code-box', isSend ? 'get-code' : 'wait-for']" @click="isSend = !isSend">{{isSend ? '获取验证码' : '95s'}}</div>
			</div>
			<h2 class="code-tips">验证码5分钟之内有效 300s</h2>
			<button type="submit">找回</button>
		</form>
		<div :class="['modal',!modalShow && 'modal-hide']" ref="modal" style="display: none;">
			<div class="modal-box">
				<img src="../assets/image/follow/close.png" alt="close" @click="hideModal">
				<h2 class="modal-text">您的密码已重置为000000，请及时修改！</h2>
				<router-link tag="div" to="/reset" class="confirm" >确定</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'RetrievePage',
		data(){
			return{
				isSend: true,
				modalShow:false,
			}
		},
		mounted() {
			console.log()
		},
		methods:{
			hideModal(){
				this.modalShow = false
				setTimeout(() => {
					this.$refs.modal.style.display = 'none';
				},300)
			},
			submitToLogin(){
				this.$refs.modal.style.display = 'flex';
				setTimeout(() => {
					this.modalShow = true
				},1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.retrieve{
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
				margin-bottom: 103px;
			}
			.mt50{
				margin-top: 40px !important;
			}
			.input-box{
				width:528px;
				margin: 0 auto ;
				padding: 20px 0;
				border-bottom: 1px solid #B8B8B8;
				display: flex;
				input[type="text"]{
					height:54px;
					font-size:30px;
					width: 324px;
					display: block;
				}
				.code-box{
					width:204px;
					height:54px;
					border-radius:27px;
					font-size:28px;
					font-weight:400;
					line-height: 54px;
					text-align: center;
				}
				.get-code{
					background:rgba(134,216,222,1);
					color:rgba(255,255,255,1);
				}
				.wait-for{
					background:rgba(242,242,242,1);
					color:rgba(102,102,102,1);
				}
			}
			.code-tips{
				width:528px;
				margin: 30px auto 0;
				font-size:28px;
				font-weight:bold;
				color:rgba(108,197,203,1);
				line-height:28px;
			}
			button[type="submit"]{
				width:590px;
				height:86px;
				background:linear-gradient(0deg,rgba(105,195,201,1),rgba(139,220,225,1));
				border-radius:43px;
				display: block;
				margin: 84px auto 0;
				border: none;
				font-size:32px;
				font-weight:bold;
				color:rgba(255,255,255,1);
			}
		}
		.modal-hide{
			opacity: 0;
			.modal-box{
				transform: scale(.8);
			}
		}
		.modal{
			transition: opacity .3s;
			position: fixed;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.4);
			top: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.modal-box{
				transition: transform .3s;
				width:645px;
				height:324px;
				background:rgba(255,255,255,1);
				border-radius:20px;
				position: relative;
				img[alt="close"]{
					position: absolute;
					width: 38px;
					top: 27px;
					right: 24px
				}
				.modal-text{
					font-size:32px;
					font-weight:bold;
					color:rgba(102,102,102,1);
					line-height:32px;
					margin-top: 128px;
					text-align: center;
				}
				.confirm{
					margin: 48px auto 0;
					width:250px;
					height:65px;
					background:linear-gradient(0deg,rgba(105,195,201,1),rgba(139,220,225,1));
					border-radius:33px;
					font-size:32px;
					font-weight:bold;
					color:rgba(255,255,255,1);
					line-height:65px;
					text-align: center;
				}
			}
		}
	}
</style>
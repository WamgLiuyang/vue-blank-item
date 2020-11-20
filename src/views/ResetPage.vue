<template>
	<div class="reset">
		<img src="../assets/image/login/back.png" alt="back" @click="$router.go(-1)">
		<form class="from-box" @submit.prevent.stop="submitToLogin">
			<h2 class="title">修改密码</h2>
			<ul class="input-list">
				<li><input type="text" placeholder="请输入原密码"></li>
				<li><input type="text" placeholder="请输入新密码"></li>
				<li><input type="text" placeholder="请输入重复密码"></li>
			</ul>
			<button type="submit">保存</button>
		</form>
	</div>
</template>

<script>
	export default {
		name:'ResetPage',
		methods:{
			submitToLogin(){
				localStorage.removeItem("token");
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.reset{
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
				margin-bottom: 122px;
			}
			.input-list{
				li{
					width:528px;
					overflow: hidden;
					border-bottom: 1px solid #B8B8B8;
					margin: 82px auto 0;
					&:first-child{
						margin-top: 0;
					}
					input[type="text"]{
						font-size:30px;
						display: block;
						width: 100%;
						margin-bottom: 22px;
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
		}
	}
</style>
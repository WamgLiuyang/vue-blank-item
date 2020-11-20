<template>
	<div class="tab-bar">
		<ul class="bar-box">
			<li>
				<router-link class="page-skip" to="/">
					<img v-if="routerPath === '/'" class="tab-icon" src="../assets/image/tab-bar/home-on.png" alt="home">
					<img v-else class="tab-icon" src="../assets/image/tab-bar/home.png" alt="home">
					<div class="tab-text">首页</div>
				</router-link>
			</li>
			<li>
				<router-link class="page-skip" to="/user">
					<img v-if="routerPath === '/user'" class="tab-icon" src="../assets/image/tab-bar/user-on.png" alt="user">
					<img v-else class="tab-icon" src="../assets/image/tab-bar/user.png" alt="user">
					<div class="tab-text">用户</div>
				</router-link>
			</li>
			<li>
				<router-link class="page-skip" to="/notice">
					<img v-if="routerPath === '/notice'" class="tab-icon" src="../assets/image/tab-bar/notice-on.png" alt="notice">
					<img v-else class="tab-icon" src="../assets/image/tab-bar/notice.png" alt="notice">
					<div class="tab-text">通知</div>
				</router-link>
			</li>
			<li>
				<router-link class="page-skip" to="/inquiry">
					<img v-if="routerPath === '/inquiry'" class="tab-icon" src="../assets/image/tab-bar/inquiry-on.png" alt="inquiry">
					<img v-else class="tab-icon" src="../assets/image/tab-bar/inquiry.png" alt="inquiry">
					<div class="tab-text">问诊</div>
				</router-link>
			</li>
			<li>
				<router-link class="page-skip" to="/my">
					<img v-if="routerPath === '/my'" class="tab-icon" src="../assets/image/tab-bar/my-on.png" alt="my">
					<img v-else class="tab-icon" src="../assets/image/tab-bar/my.png" alt="my">
					<div class="tab-text">我的</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'TabBar',
		watch:{
			$route(to,from){
				this.routerPath = to.path;
			}
		},
		data(){
			return{
				routerPath:this.$route.path
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
	.tab-bar{
		position: fixed;
		z-index: 999;
		width: 100%;
		bottom: 0;
		height:112px;
		background:rgba(255,255,255,1);
		box-shadow:0px -1px 20px 0px rgba(164,164,164,0.4);
		.bar-box{
			display: flex;
			height: 100%;
			li{
				flex: 1;
				height: 100%;
				.page-skip{
					width: 100%;
					height: 100%;
					overflow: hidden;
					display: flex;
					align-items: center;
					flex-flow: column;
					.tab-icon{
						margin-top: 14px;
						width: 40px;
						height: 40px;
					}
					.tab-text{
						font-size:22px;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:22px;
						margin-top: 12px;
					}
				}
			}
		}
	}
</style>
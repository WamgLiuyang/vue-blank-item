<template>
	<div class="notice">
		<h2 class="title">医院通知</h2>
		<van-list v-model="loading" :finished="finished" finished-text="我是有底线的~" @load="onLoad">
			<ul class="notice-box">
				<li v-for="(item, index) in noticeList" :key="index" @click="$router.push('/hospital_notice/' + item.noticeID)">
					<div class="notice-content">
						<div class="spot"></div>
						<div class="notice-text">{{ item.title }}</div>
						<img class="more-icon" src="../assets/image/notice/more.png" alt="more">
						<div class="boder"></div>
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	import hospital from '@/services/hospital';
	
	export default {
		name:'NoticePage',
		data(){
			return{
				loading: false,
				finished: false,
				page: 0,
				noticeList:[]
			}
		},
		mounted(){
			
		},
		methods:{
			onLoad(){
				this.page++;
				this.getNoticeList();
			},
			async getNoticeList(){
				const token = localStorage.token;
				if(token){
					this.loading = true;
					const { DRID, tel, UserToken } = JSON.parse(token), length = 20, orderby = 'desc';
					let start = ((this.page - 1) * length) + 1;
					const noticeList = await hospital.getNoticeList({ DRID, tel, UserToken, orderby, start, length });
					this.loading = false;
					if(noticeList.rows > 0){
						this.noticeList = this.noticeList.concat(noticeList.data);
					}
					if(noticeList.total === this.noticeList.length){
						this.finished = true;
					}
				}else{
					this.$router.push('/login');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice{
		.title{
			background-color: #69C3C9;
			padding: 20px 0;
			font-size:36px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height: 38px;
			text-align: center;
			position: fixed;
			top: 0;
			z-index: 9;
			width: 100%;
		}
		.notice-box{
			margin-top: 78px;
			li{
				position: relative;
				.notice-content{
					height: 108px;
					display: flex;
					align-items: center;
					.spot{
						width:12px;
						height:12px;
						background:rgba(105,195,201,1);
						border-radius:50%;
						margin-left: 22px;
					}
					.notice-text{
						width:610px;
						font-size:34px;
						font-weight:400;
						color:rgba(51,51,51,1);
						margin-left: 16px;
						overflow : hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.boder{
						position: absolute;
						bottom: 1px;
						left: 54px;
						width:636px;
						border-bottom: 1px solid #EEEDED;
					}
					.more-icon{
						width: 34px;
						margin-left: 14px;
					}
				}
			}
		}
	}
</style>
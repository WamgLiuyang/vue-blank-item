<template>
	<div class="hospital-notice">
		<HeaderTitle titleText="医院通知"></HeaderTitle>
		<div class="details-box">
			<h1 class="details-title">{{ noticeInfo.title }}</h1>
			<div class="time-box">
				<div class="time">{{ noticeInfo.pubtime | dateFormat }}</div>
				<div class="media">{{ noticeInfo.author }}</div>
			</div>
			<p v-html="noticeInfo.content"></p>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import hospital from '@/services/hospital';
	import dayJS from 'dayjs';
	
	export default {
		name: 'HospitalNoticePage',
		filters: {
			dateFormat(e) {
				return dayJS(e).format('YYYY年MM月DD');
			}
		},
		props:{
			id: String
		},
		data(){
			return{
				noticeInfo:{}
			}
		},
		components: {
			HeaderTitle
		},
		mounted() {
			this.getNoticeInfo();
		},
		methods:{
			async getNoticeInfo(){
				const token = localStorage.token;
				if(token){
					const noticeID = this.id, { DRID, tel, UserToken } = JSON.parse(token);
					const noticeInfo = await hospital.getNoticeInfo({ DRID, tel, UserToken, noticeID});
					if(noticeInfo.rows > 0){
						this.noticeInfo = noticeInfo.data.pop();
					}
				}else{
					this.$router.push('/login');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hospital-notice {
		padding-top: 78px;
		.details-box {
			overflow: hidden;
			.details-title {
				font-size: 42px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				line-height: 44px;
				margin: 40px auto 0;
				text-align: center;
				padding: 0 26px;
				box-sizing: border-box;
			}

			.time-box {
				display: flex;
				justify-content: center;
				font-size: 26px;
				font-weight: 400;
				color: rgba(102, 102, 102, 0.83);
				line-height: 28px;
				padding-bottom: 16px;
				width: 670px;
				margin: 34px auto 0;
				border-bottom: 1px solid rgba(226, 223, 223, 1);

				.media {
					margin-left: 40px;
				}
			}

			p {
				text-indent: 2em;
				width: 668px;
				margin: 16px auto 32px;
				font-size: 30px;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 62px;
				text-align: justify;
				overflow: hidden;
			}

		}
	}
</style>

<template>
	<div class="report">
		<HeaderTitle titleText="用户健康报告"></HeaderTitle>
		<ul class="year-tab">
			<li v-for="(item, index) in menuList " :key="index" @click="setYearReport(index)" :class="index === on && 'on'">{{ item.report_year }}年</li>
		</ul>
		<van-image v-for="(item, index) in reportInfo " :key="index" :src="item.url" class="report-img"  lazy-load />
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import patient from '@/services/patient';
	
	export default {
		name:'ReportPage',
		components:{ HeaderTitle },
		props:{
			id:String
		},
		data(){
			return{
				on: 0,
				menuList: [],
				reportInfo: []
			}
		},
		async mounted() {
			await this.getReportMenuList();
			if(this.menuList.length){
				this.getReportInfo();
			}
		},
		methods:{
			setYearReport(i){
				this.on = i;
				this.getReportInfo();
			},
			async getReportInfo(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), userID = this.id, report_year = this.menuList[this.on].report_year;
					try{
						const reportInfo = await patient.getReportInfo({ DRID, tel, UserToken, userID , report_year});
						if(reportInfo.rows > 0){
							this.reportInfo = reportInfo.data;
						}
					}catch(e){
						console.log(e);
					}
				}else{
					this.$router.push('/login');
				}
			},
			async getReportMenuList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), userID = this.id;
					try{
						const menuList = await patient.getReportMenuList({ DRID, tel, UserToken, userID });
						if(menuList.rows > 0){
							this.menuList = menuList.data;
						}
					}catch(e){
						console.log(e);
					}
				}else{
					this.$router.push('/login');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.report{
		padding-top: 78px;
		.year-tab{
			margin: 0 10px 10px;
			display: flex;
			.on{
				color: #69C3C9 !important;
				&::after{
					opacity:0.4 !important;
				}
			}
			li{
				flex: 1px;
				font-size:34px;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:36px;
				margin-top: 46px;
				text-align: center;
				&::after{
					content: ' ';
					display: block;
					width:90px;
					height:6px;
					background:rgba(105,195,201,1);
					opacity:0;
					border-radius:3px;
					margin: 0 auto;
					margin-top: 10px;
				}
			}
		}
		.report-img{
			width:689px;
			margin: 0 auto;
		}
	}
</style>
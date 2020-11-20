<template>
	<div class="health-info">
		<HeaderTitle titleText="用户健康信息"></HeaderTitle>
		<div class="user-info">
			<img class="avatar" :src="healthinfo.headphoto" >
			<div class="name">{{ healthinfo.username }}</div>
			<img src="../assets/image/userinfo/address.png" alt="address">
			<div class="housing">{{ healthinfo.estateName }}</div>
		</div>
		<div class="health-box">
			<div class="title">健康信息</div>
			<div class="info-box heartbeat" @click="$router.push('/heartbeat')">
				<div class="info-title">
					<img src="../assets/image/userinfo/heartbeat.png" alt="box-icon">
					<div class="title-text">心跳</div>
					<div class="date">{{ healthinfo.regdate | dateFormat }}</div>
				</div>
				<div class="number">{{ healthinfo.heartbeat }}次/分</div>
				<router-link to="/heartbeat" class="more">
					<span>更多</span>
					<img src="../assets/image/home/more.png" alt="more">
				</router-link>
			</div>
			<div class="info-box weight" @click="$router.push('/weight')">
				<div class="info-title">
					<img src="../assets/image/userinfo/weight.png" alt="box-icon">
					<div class="title-text">体重</div>
					<div class="date">{{ healthinfo.regdate | dateFormat }}</div>
				</div>
				<div class="number">{{ healthinfo.weight }}kg</div>
				<router-link to="/weight" class="more">
					<span>更多</span>
					<img src="../assets/image/home/more.png" alt="more">
				</router-link>
			</div>
			<div class="info-box blood-pressure" @click="$router.push('/bloodpressure')">
				<div class="info-title">
					<img src="../assets/image/userinfo/blood-pressure.png" alt="box-icon">
					<div class="title-text">血压</div>
					<div class="date">{{ healthinfo.regdate | dateFormat }}</div>
				</div>
				<div class="number">低压:{{ healthinfo.pressure_low }}/高压:{{ healthinfo.pressure_high }}</div>
				<router-link to="/bloodpressure" class="more">
					<span>更多</span>
					<img src="../assets/image/home/more.png" alt="more">
				</router-link>
			</div>
			<div class="info-box blood-sugar"  @click="$router.push('/bloodsugar')">
				<div class="info-title">
					<img src="../assets/image/userinfo/blood-sugar.png" alt="box-icon">
					<div class="title-text">血糖</div>
					<div class="date">{{ healthinfo.regdate | dateFormat }}</div>
				</div>
				<div class="number">{{ healthinfo.bloodsugar }}mmol/l</div>
				<router-link to="/bloodsugar" class="more">
					<span>更多</span>
					<img src="../assets/image/home/more.png" alt="more">
				</router-link>
			</div>
			<div class="info-box temperature" @click="$router.push('/temperature')">
				<div class="info-title">
					<img src="../assets/image/userinfo/temperature.png" alt="box-icon">
					<div class="title-text">体温</div>
					<div class="date">{{ healthinfo.regdate | dateFormat }}</div>
				</div>
				<div class="number">{{ healthinfo.temperature }}°C</div>
				<router-link to="/temperature" class="more">
					<span>更多</span>
					<img src="../assets/image/home/more.png" alt="more">
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import dayJS from 'dayjs';
	import HeaderTitle from '../components/HeaderTitle.vue';
	import patient from '@/services/patient';
	
	export default {
		name:'HealthInfoPage',
		components:{ HeaderTitle },
		filters:{
			dateFormat(e){
				return dayJS(e).format('YYYY-MM-DD')
			}
		},
		props: {
			id:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				healthinfo:{ }
			}
		},
		mounted(){
			this.getHealthinfo();
		},
		methods:{
			async getHealthinfo(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), userID = this.id;
					try{
						const healthinfo = await patient.getHealthinfo({ DRID, tel, UserToken, userID });
						if(healthinfo.rows){
							this.healthinfo = healthinfo.data.pop();
						}
						// console.log(healthinfo);
					}catch(e){
						//TODO handle the exception
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
	.health-info{
		.user-info{
			padding: 104px 0 120px;
			background-color: #69C3C9;
			display: flex;
			align-items: center;
			.avatar{
				width:114px;
				height:114px;
				border-radius:10px;
				margin-left: 30px;
				object-fit: cover;
				overflow: hidden;
			}
			.name{
				margin-left: 30px;
				font-size:38px;
				font-weight:bold;
				line-height:80px;
				color:rgba(255,255,255,1);
			}
			img[alt="address"]{
				width: 35px;
				margin: 0 10px 0 28px;
			}
			.housing{
				font-size:32px;
				font-weight:400;
				color:rgba(255,255,255,1);
			}
		}
		.health-box{
			background:rgba(255,255,255,1);
			border-radius:30px 30px 0 0;
			transform: translateY(-94px);
			overflow: hidden;
			.title{
				font-size:34px;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height: 36px;
				margin: 48px 0 0 32px;
			}
			.info-box{
				box-sizing: border-box;
				width:656px;
				height:176px;
				border:1px solid rgba(203, 203, 203, 0.6);
				border-radius:10px;
				margin: 30px auto 0;
				position: relative;
				.info-title{
					box-sizing: border-box;
					height: 68px;
					width:602px;
					margin: 0 auto;
					display: flex;
					align-items: center;
					position: relative;
					img[alt="box-icon"]{
						width: 44px;
					}
					.title-text{
						font-size:30px;
						font-weight:400;
						color:rgba(51,51,51,1);
						margin-left: 8px;
					}
					.date{
						position: absolute;
						right: 0;
						font-size:26px;
						font-weight:400;
						color:rgba(102,102,102,1);
					}
				}
				.number{
					font-size:34px;
					font-weight:bold;
					color:rgba(51,51,51,1);
					margin-top: 38px;
					line-height: 36px;
					text-align: center;
				}
				.more{
					position: absolute;
					font-size:24px;
					font-weight:400;
					color:rgba(102,102,102,1);
					position: absolute;
					bottom: 26px;
					right: 30px;
					display: flex;
					align-items: center;
					img[alt="more"]{
						width:17px;
						height: 18px;
						margin-left: 6px;
					}
				}
			}
			.heartbeat{
				margin-top: 40px;
				background-color:rgba(254,243,220, 0.6);
				.info-title{
					border-bottom:1px solid rgba(244,195,163,.6);
				}
			}
			.weight{
				background-color:rgba(222,241,242, 0.6);
				.info-title{
					border-bottom:1px solid rgba(183,212,241,.6);;
				}
			}
			.blood-pressure{
				background-color:rgba(251,250,203, 0.6);
				.info-title{
					border-bottom:1px solid  rgba(247,206,178,.6);;;
				}
			}
			.blood-sugar{
				background-color:rgba(233,249,253, 0.6);
				.info-title{
					border-bottom:1px solid rgba(193,222,251,.6);
				}
			}
			.temperature{
				background-color:rgba(255,242,242, .6);
				.info-title{
					border-bottom:1px solid rgba(248,211,211,.6);;
				}
			}
		}
	}
</style>
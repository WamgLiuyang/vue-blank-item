<template>
	<div class="manage">
		<div class="title">
			<div class="top-box">
				<img class="back" src="../assets/image/back.png" alt="back" @click="$router.go(-1)">
				<div class="input-box show">
					<img class="search" src="../assets/image/search.png" alt="search">
					<input class="input-text" type="text" placeholder="请输入名字搜索"  v-model="form.name" @input="searchNameinput" @blur="searchNameBlur" @focus="searchUser" />
				</div>
			</div>
			<ul :class="['tips-name', (showTips && patientList.length) ? 'show' : 'hide']" v-if="">
				<router-link :to="`${type === '1' ? '/report' : '/health/info/' + item.userID  }`" tag="li" v-for="(item, index) in patientList" :key="index">{{item.username}}</router-link>
			</ul>
		</div>
		<div class="tips-box">
			<div class="title-box prop-t">
				<img class="title-icon" src="../assets/image/manage/domicile.png" alt="domicile">
				<div class="title-text">按小区查看</div>
			</div>
			<ul class="domicile">
				<li v-for="(item ,index) in estateList" :key="index">
					<router-link class="list" :to="`/user_list/${item.estateID}`" >{{ item.estateName }}</router-link>
				</li>
			</ul>
			<div class="title-box prop-b">
				<img class="title-icon" src="../assets/image/manage/record.png" alt="record">
				<div class="title-text">查看过的历史记录</div>
			</div>
			<ul class="record">
				<li v-for="(item ,index) in recordList" :key="index">
					<router-link class="list" :to="`${type === '1' ? '/report/' + item.hrep_logID : '/health/info/' + item.hhis_logID  }`" >{{ item.username }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import patient from '@/services/patient';
	
	export default {
		name:'UserManagePage',
		data(){
			return{
				estateList: [],
				recordList: [],
				form: {
					name:'',
				},
				showTips: false,
				patientList: []
			}
		},
		props:{
			type:{
				type: String,
				default: '0'
			}
		},
		mounted() {
			this.getEstateList();
			if(this.type === '0'){
				this.getHealthHistoryList(); //健康信息 历史记录
			}else if(this.type === '1'){
				this.getReportHistoryList(); //健康报告 历史记录
			}
			localStorage.setItem('type', this.type)
		},
		methods:{
			async getReportHistoryList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token);
					const recordList = await patient.getReportHistoryList({ DRID, tel, UserToken });
					if(recordList.rows > 0){
						this.recordList = recordList.data;
					}
				}else{
					this.$router.push('/login');
				}
			},
			async getHealthHistoryList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token);
					const recordList = await patient.getHealthHistoryList({ DRID, tel, UserToken });
					if(recordList.rows > 0){
						this.recordList = recordList.data;
					}
				}else{
					this.$router.push('/login');
				}
			},
			async getEstateList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token);
					const estateList = await patient.getEstateList({ DRID, tel, UserToken });
					if(estateList.rows > 0){
						this.estateList = estateList.data;
					}
				}else{
					this.$router.push('/login');
				}
			},
			async getHealthSearchPatientList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), word = this.form.name;
					try{
						const patientList = await patient.getHealthSearchPatientList({ DRID, tel, UserToken, word });
						if(patientList.rows){
							this.patientList = patientList.data;
						}else{
							this.patientList = [];
						}
					}catch(e){
						//TODO handle the exception
						console.log(e)
					}
					
				}else{
					this.$router.push('/login');
				}
			},
			searchNameinput(){
				this.showTips = !!this.form.name.length;
				if(this.showTips){
					this.getHealthSearchPatientList();
				}else{
					this.patientList = [];
				}
			},
			searchUser(){
				if(this.form.name.length) this.showTips = true;
			},
			searchNameBlur(){
				this.showTips = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.manage{
		.title{
			background-color: #69C3C9;
			padding-bottom: 17px;
			height:96px;
			
			position: relative;
			.top-box{
				padding-top: 30px;
				background-color: #69C3C9;
				width: 100%;
				position: absolute;
				z-index: 99;
				height:66px;
				display: flex;
				align-items: center;
				.back{
					width: 32px;
					height: 32px;
					padding: 0 36px 0 16px;
				}
				.input-box{
					width:580px;
					height:66px;
					background:rgba(255,255,255,1);
					border-radius:33px;
					overflow: hidden;
					display: flex;
					align-items: center;
					.search{
						width: 32px;
						margin-left: 22px;
					}
					.input-text{
						background-color: transparent;
						border: none;
						height: 50px;
						margin-left: 12px;
						font-size: 28px;
					}
				}
			}
			.show{
				transform: translateY(0);
			}
			.hide{
				transform: translateY( calc(-100% - 106px) );
			}
			.tips-name{
				position: absolute;
				top: 106px;
				width:100%;
				background:rgba(255,255,255,1);
				transition: transform .3s;
				max-height: 460px;
				&::before{
					position: absolute;
					top: -19px;
					left: 50%;
					transform: translateX(-50%);
					content: ' ';
					display: block;
					border-top: 10px transparent  dashed;
					border-left: 7px transparent dashed;
					border-bottom: 10px #fff  dashed;
					border-right: 7px transparent  solid;
				}
				li{
					width:640px;
					margin: 0 auto;
					height: 92px;
					border-top:1px solid rgba(235,235,235, 1);
					font-size:30px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:92px;
					text-align: center;
					box-sizing: border-box;
					
					&:first-child{
						border: none;
					}
				}
			}
		}
		.tips-box{
			overflow: hidden;
			.prop-t{
				padding: 55px 0 40px;
			}
			.prop-b{
				padding: 24px 0 40px;
			}
			.title-box{
				margin-left: 20px;
				overflow: hidden;
				.title-icon{
					width: 40px;
					height: 40px;
					float: left;
				}
				.title-text{
					margin-left: 14px;
					font-size:34px;
					font-weight:bold;
					color:rgba(51,51,51,1);
					float: left;
					height: 40px;
					line-height: 40px;
				}
			}
			.domicile{
				margin-left: 20px;
				overflow: hidden;
				li{
					float: left;
					margin-right: 30px;
					.list{
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0 12px;
						font-size:28px;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(51,51,51,1);
						height:60px;
						background-color:#E4F1FD;
						border-radius:6px;
						margin-bottom: 30px;
					}
					&:nth-of-type(3n){
						margin-right: 0;
					}
				}
			}
			.record{
				overflow: hidden;
				margin: 0 20px;
				li{
					float: left;
					margin-bottom: 26px;
					margin-right: 20px;
					.list{
						display: flex;
						align-items: center;
						justify-content: center;
						width:155px;
						height:54px;
						background:rgba(248,248,248,1);
						border-radius:20px;
						font-size:28px;
						font-weight:400;
						color:rgba(102,102,102,1);
					}
					&:nth-of-type(4n){
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
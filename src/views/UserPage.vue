<template>
	<div class="user" @click="showHousing = false">
		<div class="title">
			<div class="seach-box">
				<form class="seach-input" @submit.prevent.stop="searchUser">
					<img class="seach-icon" src="../assets/image/user/seach.png" alt="seach">
					<input type="search" class="input-box" placeholder="请输入名字搜索" v-model="form.name" @input="searchUser"/>
				</form>
				<div class="select-box" @click.stop="selectHousing">
					<div class="select-text" v-if="form.housing.length">{{form.housing}}</div>
					<div class="select-placeholder" v-else>请输选择小区</div>
					<img :class="['select-icon', showHousing && 'show-more']" src="../assets/image/user/more.png" alt="more">
				</div>
			</div>
			
			<div :class="['housings-box', showHousing && 'tips-show']">
				<ul class="housings">
					<li v-for="(item, index) in estateList" :key="index" @click="choseHousing(index)">{{ item.estateName }}</li>
				</ul>
			</div>
		</div>
		
		<div class="total">共有: <b>{{ total }}个</b> 用户，西提红山小区</div>
		<ul class="users" v-if="form.name.length > 0">
			<li v-for="(item ,index) in patientList" :key="index">
				<div class="user-name">{{ item.username }}</div>
				<div class="user-room">{{ item.estateName }}</div>
				<div class="button-box ml88">
					<img class="button-icon" src="../assets/image/user/video.png" alt="video"/>
					<div class="button-text">视频</div>
				</div>
				<div class="button-box ml36" @click="$router.push('/chatroom')">
					<img class="button-icon" src="../assets/image/user/image.png" alt="image"/>
					<div class="button-text">图文</div>
				</div>
			</li>
		</ul>
		<van-list v-model="loading" :finished="finished" finished-text="我是有底线的~" @load="onload" v-else>
			<ul class="users">
				<li v-for="(item ,index) in patientList" :key="index">
					<div class="user-name">{{ item.username }}</div>
					<div class="user-room">{{ item.estateName }}</div>
					<div class="button-box ml88">
						<img class="button-icon" src="../assets/image/user/video.png" alt="video"/>
						<div class="button-text">视频</div>
					</div>
					<div class="button-box ml36" @click="$router.push('/chatroom')">
						<img class="button-icon" src="../assets/image/user/image.png" alt="image"/>
						<div class="button-text">图文</div>
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	import patient from '@/services/patient';
	
	export default {
		name:'UserPage',
		data(){
			return{
				form: {
					name:'',
					housing:''
				},
				showHousing: false,
				loading: false,
				finished: false,
				on: 0,
				page: 0,
				estatePage: 0,
				patientList: [],
				estateList: [],
				total: null
			}
		},
		mounted() {
			this.getEstateList();
		},
		methods:{
			estateOnload(){
				
			},
			onload(){
				if(this.form.housing.length > 0){
					this.estatePage++;
					this.getPatientByEstateID();
				}else{
					this.page++;
					this.getPatientList();
				}
			},
			async searchPatientList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), word = this.form.name;
					try{
						const patientList = await patient.searchPatientList({ DRID, tel, UserToken, word });
						if(patientList.rows > 0){
							this.patientList = patientList.data;
						}
						this.total = patientList.total;
					}catch(e){
						//TODO handle the exception
						console.log(e);
					}
				}else{
					this.$router.push('/login');
				}
			},
			async getPatientList(){
				const token = localStorage.token;
				if(token){
					this.loading = true;
					const { DRID, tel, UserToken } = JSON.parse(token), length = 20, start = (this.page - 1) * length + 1;
					try{
						const patientList = await patient.getPatientList({ DRID, tel, UserToken, start, length });
						this.loading = false;
						if(patientList.rows > 0){
							this.patientList = this.patientList.concat(patientList.data);
						}
						this.total = patientList.total;
						if(patientList.total === this.patientList.length){
							this.finished = true;
						}
					}catch(e){
						//TODO handle the exception
						console.log(e);
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
			searchUser(){
				if(this.form.name.length > 0) {
					this.searchPatientList();
				}else{
					this.estatePage = 0;
					this.page = 0;
					this.patientList = [];
				};
			},
			
			selectHousing(){
				this.showHousing = !this.showHousing;
			},
			async getPatientByEstateID(){
				const token = localStorage.token;
				if(token){
					this.loading = true;
					const { DRID, tel, UserToken } = JSON.parse(token), estateID = this.estateList[this.on].estateID, length = 20, start = (this.estatePage - 1) * length + 1;
					try{
						const patientList = await patient.getPatientByEstateID({ DRID, tel, UserToken, estateID, start, length });
						if(patientList.rows > 0){
							this.patientList = this.patientList.concat(patientList.data);
						}
						this.total = patientList.total;
						this.finished = patientList.total === this.patientList.length;
					}catch(e){
						//TODO handle the exception
						console.log(e);
					}
					this.loading = false;
				}else{
					this.$router.push('/login');
				}
			},
			async choseHousing(i){
				this.patientList = [];
				this.form.housing = this.estateList[i].estateName;
				this.on = i;
				this.estatePage = 1;
				await this.getPatientByEstateID();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		position: relative;
		overflow: hidden;
		.title{
			width: 100%;
			z-index: 1;
			position: fixed;
			background-color: #69C3C9;
			padding:0 0 16px;
			height: 96px;
			.seach-box{
				width: 100%;
				background-color: #69C3C9;
				position: absolute;
				padding-top:30px ;
				display: flex;
				z-index: 99;
				justify-content: center;
				.seach-input{
					background-color: #fff;
					width:414px;
					height:66px;
					line-height: 66px;
					border-radius:33px;
					display: flex;
					align-items: center;
					overflow: hidden;
					.seach-icon{
						width: 32px;
						margin-left: 23px;
					}
					.input-box{
						border: none;
						font-size:26px;
						width: 330px;
						margin-left: 12px;
						height: 40px;
						line-height: 40px;
					}
				}
				.select-box{
					width:243px;
					height:66px;
					background:rgba(255,255,255,1);
					border-radius:20px;
					margin-left: 22px;
					display: flex;
					align-items: center;
					.select-text{
						width:160px;
						font-size:26px;
						font-weight:400;
						color:rgba(51,51,51,1);
						margin-left: 20px;
						white-space: nowrap;
						overflow: hidden; 
						text-overflow: ellipsis;
					}
					.select-placeholder{
						margin-left: 20px;
						color: #999;
						font-size:26px;
						font-weight:400;
						color:rgba(153,153,153,1);
					}
					.show-more{
						transform: rotate(180deg);
					}
					.select-icon{
						width: 32px;
						margin-left: 14px;
						transition: transform .3s;
					}
				}
			}
		}
		
		.tips-show{
			transform: translateY(0) !important;
		}
		
		.housings-box{
			transition: transform .3s;
			transform: translateY(calc(-100% - 116px));
			position: absolute;
			z-index: 9;
			top: 106px;
			background-color: #fff;
			width: 100%;
			box-shadow:0px 10px 10px 0px rgba(164,164,164,0.4);
			&::before{
				position: absolute;
				top: -19px;
				right: 142px;
				content: ' ';
				display: block;
				border-top: 10px transparent  dashed;
				border-left: 7px transparent dashed;
				border-bottom: 10px #fff  dashed;
				border-right: 7px transparent  solid;
			}
			.housings{
				overflow: hidden;
				margin: 16px 18px 50px;
				li{
					float: left;
					height:56px;
					padding: 0 20px;
					color:rgba(102,102,102,1);
					font-size:26px;
					border:1px solid rgba(203,203,203,1);
					border-radius:28px;
					margin-right: 25px;
					margin-top: 34px;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					&:last-child-child{
						margin-right: 0;
					}
					&:nth-of-type(3n){
						margin-right: 0;
					}
				}
			}
		}
		.total{
			width:680px;
			margin: 142px auto 30px;
			font-size:26px;
			font-weight:400;
			line-height: 26px;
			color:#666;
			b{
				color:#333; 
				font-weight: bold;
			}
		}
		.users{
			overflow: hidden;
			li{
				width:680px;
				height:92px;
				background:rgba(248,248,248,1);
				margin:0 auto 28px;
				display: flex;
				align-items: center;
				font-size:32px;	
				
				&:last-child{
					margin-bottom: 0;
					
				}
				
				.user-name{
					font-weight:bold;
					color:rgba(51,51,51,1);
					margin-left: 18px;
				}
				.user-room{
					width: 196px;
					color:#333333;
					margin-left: 16px;
					white-space: nowrap;
					overflow: hidden; 
					text-overflow: ellipsis;
				}
				.ml88{
					margin-left: 70px;
				}
				.ml36{
					margin-left: 24px;
				}
				.button-box{
					display: flex;
					align-items: center;
					height:  100%;
					.button-icon{
						width: 48px;
						height: 48px;
					}
					.button-text{
						font-size:30px;
						font-weight:400;
						color:rgba(1, 163, 174, 1);
						margin-left: 12px;
					}
				}
			}
		}
	}
</style>
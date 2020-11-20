<template>
	<div class="user-list">
		<HeaderTitle titleText="健康信息用户列表"></HeaderTitle>
		<h2 v-if="patientList.length" class="total-tips">共有:<b>{{ total }}个</b>用户，{{ patientList[0].estateName }}</h2>
		<van-list v-model="loading" :finished="finished" finished-text="我是有底线的~" @load="onload">
			<ul class="users-box">
				<li v-for="(item ,index) in patientList" :key="index">
					<router-link :to="`${type === '1' ? '/report/' + item.userID : '/health/info/' + item.userID }`" >{{ item.username }}</router-link>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import patient from '@/services/patient';
	
	export default {
		name:'UserListPage',
		components:{ HeaderTitle },
		data(){
			return{
				type: localStorage.getItem('type'),
				finished: false,
				loading: false,
				page: 0,
				total: null,
				patientList:[]
			}
		},
		props: {
			id:{
				type:String,
				default:''
			}
		},
		mounted() {
			this.onload();
		},
		methods:{
			onload(){
				this.page++;
				this.getPatientByEstateID();
			},
			async getPatientByEstateID(){
				const token = localStorage.token;
				if(token){
					this.loading = true;
					const { DRID, tel, UserToken } = JSON.parse(token), estateID = this.id, length = 20, start = (this.page - 1) * length + 1;
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
		}
	}
</script>

<style lang="scss" scoped>
	.user-list{
		padding-top: 78px;
		.total-tips{
			font-size:24px;
			font-weight:400;
			color:rgba(102,102,102,1);
			margin: 45px 0 0 32px;
			b{
				color:#333333;
				font-weight:bold;
			}
		}
		.users-box{
			overflow: hidden;
			margin: 34px 34px 0;
			li{
				float: left;
				margin-right: 24px;
				margin-bottom: 38px;
				&:nth-of-type(2n){
					margin-right: 0;
				}
				a{
					box-sizing: border-box;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					padding: 0 24px;
					width:314px;
					height:68px;
					background:#EEF7FF;
					border-radius:6px;
					font-size:30px;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(51,51,51,1);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
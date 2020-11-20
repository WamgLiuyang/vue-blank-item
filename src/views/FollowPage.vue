<template>
	<div class="follow">
		<HeaderTitle titleText="我关注的用户"></HeaderTitle>
		<h2 class="total">共有：<b>{{ total }}个</b>用户</h2>
		<ul class="follow-list">
			<li v-for="(item ,index) in careforList" :key="index">
				<img class="avatar" :src="item.headphoto" alt="avatar">
				<div class="name">{{item.username}}</div>
				<div class="housing">{{item.estateName}}</div>
				<img class="delete" src="../assets/image/follow/delete.png" alt="delete"  @click="hide = false; xMove = false; on = index">
			</li>
		</ul>
		<div :class="['modal',hide && 'hide', xMove && 'xMove']">
			<div class="box">
				<div class="point-text">确认要删除张三丰吗？</div>
				<div class="confirm" @click="confirm">确定</div>
				<img class="close" src="../assets/image/follow/close.png" alt="close" @click="closeModal">
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import patient from '@/services/patient';
	
	export default {
		name:'FollowPage',
		components:{ HeaderTitle },
		data(){
			return{
				on: null,
				xMove: true,
				hide: true,
				total: null,
				careforList: []
			}
		},
		mounted(){
			this.getCareforList();
		},
		methods:{
			async getCareforList(){
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token);
					try{
						const careforList = await patient.getCareforList({ DRID, tel, UserToken });
						if(careforList.rows > 0){
							this.careforList = careforList.data;
						}
						this.total = careforList.rows
					}catch(e){
						//TODO handle the exception
						console.log(e);
					}
				}else{
					this.$router.push('/login');
				}
			},
			closeModal(){
				this.hide = true;
				setTimeout(() =>{
					this.xMove = true;
				},300)
			},
			async confirm(){
				this.closeModal();
				const token = localStorage.token;
				if(token){
					const { DRID, tel, UserToken } = JSON.parse(token), care_logID = this.careforList[this.on].care_logID;
					try{
						const careforList = await patient.deleteCareforUser({ DRID, tel, UserToken, care_logID });
						this.$toast('删除成功');
						this.careforList.splice(this.on, 1);
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
	.follow{
		position: fixed;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		background-color: #f5f5f5;
		padding-top: 78px;
		.total{
			font-size:28px;
			font-weight:400;
			color:rgba(102,102,102,1);
			line-height:94px;
			margin-left: 20px;
			b{
				font-weight:bold;
			}
		}
		.follow-list{
			padding-bottom: 78px;
			li{
				width:680px;
				height:132px;
				background:rgba(255,255,255,1);
				border-radius:10px;
				margin: 0 auto 24px;
				display: flex;
				align-items: center;
				position: relative;
				.avatar{
					width:84px;
					height:84px;
					border-radius:50%;
					margin-left: 30px;
				}
				.name{
					font-size:34px;
					font-weight:bold;
					color:#333333;
					margin-left: 34px;
				}
				.housing{
					width: 206px;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					font-size:34px;
					color:#666666;
					margin-left: 40px;
				}
				.delete{
					position: absolute;
					right: 26px;
					width: 45px;
				}
			}
		}
		.xMove{
			transform: translateX(100%);
		}
		.hide{
			opacity: 0;
			.box{
				transform: scale(.9);
			}
		}
		.modal{
			transition: opacity .3s;
			top: 0;
			left: 0;
			position: fixed;
			width: 100%;
			height: 100%;
			background-color:rgba(0, 0, 0, 0.4);
			z-index: 99;
			display: flex;
			align-items: center;
			justify-content: center;
			.box{
				transition: transform .3s;
				width:645px;
				height:294px;
				background:rgba(255,255,255,1);
				border-radius:20px;
				position: relative;
				.point-text{
					font-size:34px;
					font-weight:bold;
					color:rgba(102,102,102,1);
					line-height:38px;
					text-align: center;
					margin-top: 92px;
				}
				.confirm{
					margin: 46px auto 0;
					width:250px;
					height:65px;
					background:linear-gradient(0deg,rgba(105,195,201,1),rgba(139,220,225,1));
					border-radius:33px;
					line-height: 65px;
					text-align: center;
					font-size:32px;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
				.close{
					width: 40px;
					height: 40px;
					position: absolute;
					top: 17px;
					right: 17px;
				}
			}
		}
	}
</style>
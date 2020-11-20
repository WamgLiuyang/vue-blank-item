<template>
	<div class="hospital">
		<div class="title">
			<div class="cancel" @click="$router.back(-1)">取消</div>
			<div class="title-name">医院</div>
			<div class="confirm">完成</div>
		</div>
		<div class="search-box">
			<img src="../assets/image/search.png" alt="search">
			<input type="text" placeholder="请输入医院名称" v-model="form.hospital">
		</div>
		<ul :class="['hospital-list', !hospitalListIsShow && 'hospital-list-hide']">
			<li v-for="(item, index) in 5":key="index" @click="choicesThishospital">西铁营第一医院</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HospitalPage',
		watch:{
			deep:true,
			'form.hospital': function(val, old) {
				this.hospitalListIsShow = (val.length > 0);
				// console.log(old, val, this.hospitalListIsShow);
			}
		},
		data(){
			return{
				form:{
					hospital:''
				},
				hospitalListIsShow: false
			}
		},
		methods:{
			choicesThishospital(){
				this.hospitalListIsShow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hospital{
		padding-top: 100px;
		.title{
			background-color: #fff;
			z-index: 9;
			position: fixed;
			top: 0;
			padding: 24px 30px;
			margin: 0 auto;
			left: 0;
			right: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title-name{
				font-size:36px;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			.confirm{
				width:96px;
				height:52px;
				background:rgba(36,200,172,1);
				border-radius:10px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size:28px;
				font-weight:bold;
				color:rgba(255,255,255,1);
			}
			.cancel{
				font-size:30px;
				font-weight:400;
				color:rgba(51,51,51,1);
			}
		}
		.search-box{
			margin: 0 30px;
			height:66px;
			background:rgba(239,239,239,1);
			border-radius:33px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			img[alt="search"]{
				width: 32px;
				height: 32px;
				margin-left: 38px;
			}
			input[type="text"]{
				font-size:28px;
				font-weight:400;
				margin-left: 12px;
				width: 400px;
				height: 50px;
				background-color: transparent;
			}
		}
		.hospital-list-hide{
			height: 0 !important;
			opacity: 0 ;
		}
		.hospital-list{
			transition: all 0.3s;
			z-index: 99;
			overflow: hidden;
			height: 490px;
			margin: 25px auto 0 ;
			width:623px;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 29px 0px rgba(179,179,179,0.27);
			border-radius:6px;
			li{
				box-sizing: border-box;
				text-align: center;
				width:432px;
				margin: 0 auto;
				font-size:30px;
				font-weight:400;
				color:rgba(51,51,51,1);
				line-height:98px;
				border-top: 1px solid #EBEBEB;
				&:first-child{
					border-top: none;
				}
			}
		}
	}
</style>
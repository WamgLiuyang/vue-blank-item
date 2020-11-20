<template>
	<div class="department">
		<div class="title">
			<div class="cancel" @click="$router.back(-1)">取消</div>
			<div class="title-name">擅长描述</div>
			<div class="confirm">完成</div>
		</div>
		<div class="revise-box">
			<textarea type="text" placeholder="请输入擅长描述" v-model="describe" maxlength="500"></textarea>
		</div>
		<div class="words">{{500 - describe.length }}/500</div>	
	</div>
</template>

<script>
	export default {
		name:'ExpertPage',
		data(){
			return{
				describe:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.department{
		padding-top: 100px;
		.title{
			background-color: #fff;
			z-index: 9;
			// width: calc(100% - 60px);
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
		.revise-box{
			box-sizing: border-box;
			height:800px;
			background:rgba(244,244,244,1);
			padding: 22px 28px;
			textarea{
				display: block;
				width: 100%;
				background-color: transparent;
				height:90px;
				font-size:30px;
				font-weight:400;
				color:rgba(51,51,51,1);
				border: none;
				height: 100%;
			}
		}
		.words{
			font-size:30px;
			font-weight:400;
			color:rgba(153,153,153,1);
			line-height: 30px;
			margin-top: 10px;
			padding-bottom: 100px;
			margin-right: 26px;
			text-align: right;
			line-height:52px;
		}
	}
</style>
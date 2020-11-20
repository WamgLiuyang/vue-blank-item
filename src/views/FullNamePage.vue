<template>
	<div class="department">
		<div class="title">
			<div class="cancel" @click="$router.back(-1)">取消</div>
			<div class="title-name">真实姓名</div>
			<div class="confirm">完成</div>
		</div>
		<div class="revise-box">
			<input type="text" placeholder="请输入真实姓名">
		</div>
	</div>
</template>

<script>
	export default {
		name:'FullNamePage'
	}
</script>

<style lang="scss" scoped>
	.department{
		padding-top: 100px;
		.title{
			width: calc(100% - 60px);
			position: fixed;
			top: 0;
			margin: 0 auto;
			left: 0;
			right: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100px;
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
			height:90px;
			background:rgba(244,244,244,1);
			padding: 0 28px;
			input[type="text"]{
				display: block;
				width: 100%;
				background-color: transparent;
				height:90px;
				font-size:30px;
				font-weight:400;
				color:rgba(51,51,51,1);
			}
		}
	}
</style>
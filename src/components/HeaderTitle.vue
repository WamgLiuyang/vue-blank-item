<template>
	<div class="header-title">
		<h2 class="title">
			<img class="back" src="../assets/image/back.png" alt="back" @click="$router.back(-1)">
			<span>{{titleText}}</span>
			<img v-if="next" class="next" src="../assets/image/next.png" alt="next" @click="clickEvent">
		</h2>
	</div>
</template>

<script>
	export default {
		name:'HeaderTitle',
		props:{
			titleText: String,
			next: {
				type:Boolean,
				default: false
			}
		},
		methods:{
			clickEvent(){
				this.$emit('onClick', null);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-title{
		position: fixed;
		top: 0;
		z-index: 9;
		width: 100%;
		.title{
			background-color: #69C3C9;
			padding: 20px 0;
			font-size:36px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height: 40px;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			.back{
				margin-top: 2px;
				left: 17px;
				width: 32px;
			}
			.next{
				right: 17px;
				width: 34px;
			}
			img{
				position: absolute;
				
			}
		}
	}
</style>
<template>
	<div class="evaluate-details">
		<HeaderTitle titleText="服务评价明细" :next="true" @onClick="nextUser"></HeaderTitle>
		<div class="tabbar">
			<router-link tag="div" to="/evaluate" class="bar-box" replace>总体评价</router-link>
			<div class="bar-box on">评价明细</div>
		</div>
		<div class="details-box">
			<div class="userinfo">
				<img class="avatar" src="../../public/static/image/common/avatar_6.png" alt="avatar">
				<div class="name">张三丰</div>
				<div class="time">评价时间：2020-03-20</div>
			</div>
			<div class="question">
				<div class="question-title">1. 您认为主管医生对您礼貌尊重的程度如何?</div>
				<div class="answer">满意</div>
			</div>
			<div class="question">
				<div class="question-title">2. 您对医生询问病史的仔细程度满意么?</div>
				<div class="answer">满意</div>
			</div>
			<div class="question">
				<div class="question-title">3. 医生经常用您听得懂的方式向您解释事务么 （如病情、检查结果、治疗方法）?</div>
				<div class="answer">满意</div>
			</div>
			<div class="question">
				<div class="question-title">4. 您对医生解释事物的主动性和耐心满意么?</div>
				<div class="answer">满意</div>
			</div>
			<div class="question">
				<div class="question-title">5. 您认为主管医生的治疗水平如何?</div>
				<div class="answer">不满意</div>
			</div>
			<div class="question">
				<div class="question-title">6. 您住院期间主管医生是否经常来巡视?</div>
				<div class="answer">满意</div>
			</div>
			<div class="question">
				<div class="question-title">7. 本次住院治疗后，您认为疾病的改善程度如何?</div>
				<div class="answer">满意</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue'
	export default {
		name:'EvaluateDetailsPage',
		components:{ HeaderTitle },
		methods:{
			nextUser(){
				console.log('111 next')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.evaluate-details{
		padding-top: 78px;
		.tabbar{
			width: 100%;
			height: 86px;
			overflow: hidden;
			.on{
				color:rgba(105,195,201,1) !important;
				&::after{
					content: ' ';
					display: block;
					width:68px;
					height:4px;
					background:rgba(105,195,201,1);
					border-radius:2px;
					position: absolute;
					top: 74px;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.bar-box{
				display: block;
				width: 50%;
				height: 100%;
				display: flex;
				float: left;
				justify-content: center;
				box-sizing: border-box;
				padding-top: 30px;
				font-size:34px;
				font-weight:bold;
				line-height: 34px;
				color:#333;
				position: relative;
			}
		}
		.details-box{
			width: 100%;
			border-top: 16px solid #F7F5F5;
			.userinfo{
				box-sizing: border-box;
				width:680px;
				height: 140px;
				margin: 0 auto;
				border-bottom:1px solid rgba(232,232,232,1);
				display: flex;
				align-items: center;
				position: relative;
				.avatar{
					width:76px;
					height:76px;
					border-radius:10px;
				}
				.name{
					font-size:36px;
					font-weight:bold;
					color:rgba(51,51,51,1);
					line-height:80px;
					margin-left: 20px;
				}
				.time{
					position: absolute;
					right: 0;
					font-size:30px;
					font-weight:400;
					color:rgba(102,102,102,1);
					line-height:80px;
				}
			}
			.question{
				margin-top: 46px;
				overflow: hidden;
				&:last-child{
					padding-bottom: 102px;
				}
				.question-title{
					font-size:34px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:40px;
					margin:0 20px;
				}
				.answer{
					margin: 30px 0 0 60px;
					font-size:30px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:32px;
					display: flex;
					align-items: center;
					&::before{
						content: ' ';
						display: block;
						width:14px;
						height:14px;
						background:rgba(105,195,201,1);
						border-radius:50%;
						margin-right: 14px;
					}
				}
			}
		}
	}
</style>
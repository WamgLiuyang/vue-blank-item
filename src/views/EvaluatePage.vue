<template>
	<div class="evaluate">
		<HeaderTitle titleText="服务总体评价"></HeaderTitle>
		<div class="tabbar">
			<div class="bar-box on">总体评价</div>
			<router-link tag="div" to="/evaluate_details" class="bar-box" replace>评价明细</router-link>
		</div>
		<div class="evaluate-box">
			<div class="evaluate-value">
				<div class="evaluate-title">1. 您认为主管医生对您礼貌尊重的程度如何？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">2. 您对医生询问病史的仔细程度满意么？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">3. 医生经常用您听得懂的方式向您解释事务么 （如病情、检查结果、治疗方法）？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">4. 您对医生解释事物的主动性和耐心满意么？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">5. 您认为主管医生的治疗水平如何？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">6. 您住院期间主管医生是否经常来巡视？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
			<div class="evaluate-value">
				<div class="evaluate-title">7. 本次住院治疗后，您认为疾病的改善程度如何？</div>
				<ul class="option-list">
					<li>满意（98.5%）</li>
					<li>较满意（0.3%）</li>
					<li>一般（0.2%）</li>
					<li>不太满意（0.5%）</li>
					<li>不满意（0.5%）</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue'
	export default {
		name:'EvaluatePage',
		components:{ HeaderTitle },
	}
</script>

<style lang="scss" scoped>
	.evaluate{
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
		.evaluate-box{
			width: 100%;
			border-top: 16px solid #F7F5F5;
			.evaluate-value{
				&:last-child{
					padding-bottom: 125px;
				}
				.evaluate-title{
					margin-top: 40px;
					font-size:34px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:50px;
					margin-left: 20px;
				}
				.option-list{
					width: 100%;
					overflow: hidden;
					li{
						display: flex;
						align-items: center;
						width: 50%;
						font-size:30px;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:30px;
						height:30px;
						margin-top: 34px;
						float: left;
						&::before{
							content: ' ';
							display: block;
							width:14px;
							height:14px;
							background:rgba(105,195,201,1);
							border-radius:50%;
							margin-right: 18px;
							margin-left: 64px;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="blood-sugar">
		<HeaderTitle titleText="血糖"></HeaderTitle>
		<div class="date-box">
			<div class="date-title">
				<img src="../assets/image/userinfo/blood-sugar.png" alt="date-icon">
				<div class="titlt-text">血糖从2020-03-10到2020-03-16</div>
			</div>
			<ul class="table">
				<li>
					<div class="column" >
						<div class="value" style="transform: translateY(calc((-316px*50/100 - 20px)/2));">4.3</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.10</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-316px*60/100 - 20px)/2));">5.0</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.11</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-316px*55/100 - 20px)/2));">4.5</div>
						<div class="column-bar" style="height: 55%;"></div>
					</div>
					<div class="time-text">3.12</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-316px*80/100 - 20px)/2));">5.6</div>
						<div class="column-bar" style="height: 80%;"></div>
					</div>
					<div class="time-text">3.13</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-316px*60/100 - 20px)/2));">5.0</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.14</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-316px*50/100 - 20px)/2));">4.3</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.15</div>
				</li>
				<li>
					<div class="column">
						<div class="value">9.2</div>
						<div class="column-bar"></div>
					</div>
					<div class="time-text">3.16</div>
				</li>
			</ul>
			<div class="data-details">当前最高：9.2 <i>最低：3.3</i> 平均：5.6</div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue'
	export default {
		name:'BloodSugarPage',
		components:{ HeaderTitle },
	}
</script>

<style lang="scss" scoped>
	.blood-sugar{
		padding-top: 78px;
		.date-box{
			width: 100%;
			position: fixed;
			top: 50%;
			transform: translateY(-50%);
			.date-title{
				display: flex;
				justify-content: center;
				align-items: center;
				// background-color: #000;
				img[alt="date-icon"]{
					// background-color: #fff;
					width: 44px;
					height: 44px;
				}
				.titlt-text{
					font-size:34px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:34px;
					height:34px;
					// background-color: red;
					@media screen and (min-width: 376px){
						padding-top: 4px;
					}
					@media screen and (max-width: 375px){
						padding-bottom: 2px;
					}
				}
			}
			.table{
				width:640px;
				display: flex;
				margin: 140px auto 0;
				li{
					flex: 1;
					.column{
						width: 100%;
						height:316px;
						border-bottom: 1px solid #B4B4B4;
						display: flex;
						flex-flow: column;
						justify-content: flex-end;
						align-items: center;
						position: relative;
						.value{
							transition: transform 1s;
							font-size:26px;
							font-weight:400;
							color:rgba(23,100,124,1);
							line-height:28px;
							text-align: center;
							transform: translateY(calc(-316px*100/100 - 20px));
							position: absolute;
						}
						.column-bar{
							transition: height 1s;
							width:36px;
							background:rgba(159,217,230,1);
							height: 100%;
							margin: 0 auto;
						}
					}
					.time-text{
						font-size:26px;
						font-weight:400;
						color:rgba(102,102,102,1);
						line-height:30px;
						margin-top: 22px;
						text-align: center;
					}
				}
			}
			.data-details{
				font-size:30px;
				font-weight:bold;
				color:rgba(51,51,51,1);
				margin-top: 102px;
				line-height: 32px;
				text-align: center;
				i{
					display: inline-block;
					margin: 0 52px;
				}
			}
		}
	}
</style>
<template>
	<div class="blood-pressure">
		<HeaderTitle titleText="血压"></HeaderTitle>
		<div class="date-box">
			<div class="date-title">
				<img src="../assets/image/userinfo/blood-pressure.png" alt="date-icon">
				<div class="titlt-text">血压从2020-03-10到2020-03-16</div>
			</div>
			<div class="data-title-name">低压</div>
			<ul class="table">
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*50/100 - 20px)/2));">70</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.10</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*60/100 - 20px)/2));">75</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.11</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*55/100 - 20px)/2));">71</div>
						<div class="column-bar" style="height: 55%;"></div>
					</div>
					<div class="time-text">3.12</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*80/100 - 20px)/2));">82</div>
						<div class="column-bar" style="height: 80%;"></div>
					</div>
					<div class="time-text">3.13</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*60/100 - 20px)/2));">75</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.14</div>
				</li>
				<li>
					<div class="column">
						<div class="value" style="transform: translateY(calc((-220px*50/100 - 20px)/2));">70</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.15</div>
				</li>
				<li>
					<div class="column">
						<div class="value">98</div>
						<div class="column-bar"></div>
					</div>
					<div class="time-text">3.16</div>
				</li>
			</ul>
			<div class="data-details">低压最高：88 <i>最低：70</i> 平均：78mmhg</div>
			<div class="data-title-name mt">高压</div>
			<ul class="table">
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*50/100 - 20px)/2));">70</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.10</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*60/100 - 20px)/2));">75</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.11</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*55/100 - 20px)/2));">71</div>
						<div class="column-bar" style="height: 55%;"></div>
					</div>
					<div class="time-text">3.12</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*80/100 - 20px)/2));">82</div>
						<div class="column-bar" style="height: 80%;"></div>
					</div>
					<div class="time-text">3.13</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*60/100 - 20px)/2));">75</div>
						<div class="column-bar" style="height: 60%;"></div>
					</div>
					<div class="time-text">3.14</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*50/100 - 20px)/2));">70</div>
						<div class="column-bar" style="height: 50%;"></div>
					</div>
					<div class="time-text">3.15</div>
				</li>
				<li>
					<div class="column h316">
						<div class="value" style="transform: translateY(calc((-316px*100/100 - 20px)/2));">98</div>
						<div class="column-bar"></div>
					</div>
					<div class="time-text">3.16</div>
				</li>
			</ul>
			<div class="data-details pb">低压最高：128 <i>最低：110</i> 平均：118mmhg</div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue'
	export default {
		name: 'BloodPressurePage',
		components: {
			HeaderTitle
		},
	}
</script>

<style lang="scss" scoped>
	.blood-pressure {
		padding-top: 78px;

		.date-box {
			margin-top: 74px;

			.date-title {
				display: flex;
				justify-content: center;
				align-items: center;

				// background-color: #000;
				img[alt="date-icon"] {
					// background-color: #fff;
					width: 44px;
					height: 44px;
				}

				.titlt-text {
					font-size: 34px;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					line-height: 34px;
					height: 34px;

					// background-color: red;
					@media screen and (min-width: 376px) {
						padding-top: 4px;
					}

					@media screen and (max-width: 375px) {
						padding-bottom: 2px;
					}
				}
			}

			.mt {
				margin-top: 104px !important;
			}

			.data-title-name {
				display: flex;
				align-items: center;
				font-size: 30px;
				line-height: 32px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				margin: 76px 0 0 32px;

				&::before {
					content: ' ';
					display: inline-block;
					width: 12px;
					height: 12px;
					background: rgba(105, 195, 201, 1);
					border-radius: 50%;
					margin-right: 10px;
				}
			}

			.table {
				width: 640px;
				display: flex;
				margin: 83px auto 0;

				li {
					flex: 1;

					.h316 {
						height: 316px !important;

						.value {
							// transform: translateY(calc(-316px*100/100 - 12px)) !important;
						}
					}

					.column {
						width: 100%;
						height: 220px;
						border-bottom: 1px solid #B4B4B4;
						display: flex;
						flex-flow: column;
						justify-content: flex-end;
						align-items: center;
						position: relative;

						.value {
							transition: transform 1s;
							font-size: 26px;
							font-weight: 400;
							color: rgba(23, 100, 124, 1);
							line-height: 28px;
							text-align: center;
							transform: translateY(calc(-220px*100/100 - 12px));
							position: absolute;
						}

						.column-bar {
							transition: height 1s;
							width: 36px;
							background: rgba(159, 217, 230, 1);
							height: 100%;
							margin: 0 auto;
						}
					}

					.time-text {
						font-size: 26px;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
						line-height: 30px;
						margin-top: 22px;
						text-align: center;
					}
				}
			}

			.pb {
				padding-bottom: 136px;
			}

			.data-details {
				font-size: 30px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				margin-top: 42px;
				line-height: 32px;
				text-align: center;

				i {
					display: inline-block;
					margin: 0 32px;
				}
			}
		}
	}
</style>

<template>
	<div class="main">
		<img class="banner" :src="this.imgPath + 'static/image/common/banner.png'" alt="banner"/>
		<div class="inquiry">
			<router-link class="button-box" to="/inquiry">
				<img class="button-icon" src="../assets/image/home/video.png" alt="video">
				<div class="button-text">视频问诊</div>
			</router-link>
			<div class="line"></div>
			<router-link class="button-box" to="/inquiry">
				<img class="button-icon" src="../assets/image/home/image.png" alt="video">
				<div class="button-text">图文问诊</div>
			</router-link>
		</div>
		<div class="user-manage">
			<div class="manage-box">
				<router-link class="manage" to="/user"></router-link>
				<div class="users">
					<router-link to="/manage" class="users-box see">
						<img class="box-icon" src="../assets/image/home/see.png" alt="box-icon">
						<div class="box-text">查看用户每日健康信息</div>
					</router-link>
					<router-link to="/follow" class="users-box follow">
						<img class="box-icon" src="../assets/image/home/follow.png" alt="box-icon">
						<div class="box-text">我关注的用户</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="body-box">
			<div class="hospital-notice">
				<img class="notice-img" src="../assets/image/home/notice-icon.png" alt="notice-icon" >
				<h4 class="notice-text">医院通知 </h4>
				<div class="line"></div>
				<router-link class="notice-body" :to="'/hospital_notice/' + noticeData.noticeID ">{{ noticeData.title }}</router-link>
			</div>
			<img class="spread" :src="this.imgPath + 'static/image/spread/spread1.png'" alt="spread" />
			<div class="overall-box">
				<ul class="menu-box">
					<router-link tag="li" to="/notice" >
						<img src="../assets/image/home/overall_1.png" alt="overal" class="menu-icon">
						<div class="menu-text">医院通知</div>
					</router-link>
					<router-link tag="li" to="/article">
						<img src="../assets/image/home/overall_2.png" alt="overal" class="menu-icon">
						<div class="menu-text">健康科普</div>
					</router-link>
					<router-link tag="li" to="/manage/1">
						<img src="../assets/image/home/overall_3.png" alt="overal" class="menu-icon">
						<div class="menu-text">用户健康报告</div>
					</router-link>
					<router-link tag="li" to="/evaluate">
						<img src="../assets/image/home/overall_4.png" alt="overal" class="menu-icon">
						<div class="menu-text">服务评价</div>
					</router-link>
				</ul>
			</div>
			<div class="article-box">
				<!-- <img class="more1" src="../assets/image/home/more1.png" alt="more1"> -->
				<div class="box-title">
					<div class="title-box">
						<img class="title-icon" src="../assets/image/home/title-icon.png" alt="title-icon">
						<h4 class="title-text">健康科普</h4>
					</div>
					<router-link to="/article" class="more-box">
						<div class="more-text">更多</div>
						<img class="more-icon" src="../assets/image/home/more.png" alt="more" />
					</router-link>
				</div>
				<ul class="article-list">
					<li v-for="(item, index) in articleList">
						<router-link class="article-item" :to="`/article_details/${item.articleID}`">
							<img class="thumbnail" :src="item.thumbUrl" alt="article" />
							<div class="article-content">
								<h4 class="content-title">{{item.title}}</h4>
								<div class="content-info">
									<div class="info-date">{{item.pubtime | dateFormat}}</div>
									<div class="watch-mun">
										<img class="watch-icon" src="../assets/image/home/watch.png" alt="watch">
										<div class="watch-text">{{item.hits}}</div>
									</div>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import hospital from '@/services/hospital';
	import dayJS from 'dayjs';
	
	export default {
		name: 'App',
		data(){
			return{
				noticeData: {},
				articleList:[]
			}
		},
		filters: {
			dateFormat(e) {
				return dayJS(e).format('YYYY-MM-DD');
			}
		},
		mounted() {
			this.getHomeNotice();
			this.getHomeArticle();
		},
		methods:{
			async getHomeNotice(){
				try{
					const token = localStorage.token;
					if(token){
						const { DRID, tel, UserToken } = JSON.parse(token)
						const noticeData = await hospital.getHomeNotice({ DRID, tel, UserToken });
						if(noticeData.rows > 0){
							this.noticeData = noticeData.data.pop();
						}
					}else{
						this.$router.push('/login');
					}
				}catch(e){
					console.log(e)
				}
			},
			async getHomeArticle(){
				try{
					const articleList = await hospital.getHomeArticle();
					if(articleList.rows > 0){
						this.articleList = articleList.data;
					}
					// console.log(this.articleList);
				}catch(e){
					console.log(e)
				}
			}
		}
	};
</script>

<style lang="scss" scopedc>
	.main {
		position: relative;
		.banner{
			width: 100%;
			// margin: 0 auto;
			margin: -40px auto 0;
		}
		.inquiry{
			position: absolute;
			left: 0;
			right: 0;
			width:680px;
			height:135px;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 16px 0px rgba(11,3,7,0.14);
			border-radius:30px;
			margin: -30px auto 0;
			z-index: 1;
			display: flex;
			.button-box{
				width: 50%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.button-icon{
					width:68px;
				}
				.button-text{
					margin-left: 28px;
					line-height: 34px;
					font-size:32px;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
			}
			.line{
				position: absolute;
				right: 50%;
				bottom: 50%;
				transform: translate(50%,50%);
				width:1px;
				height:104px;
				background-color: #eaeaea;
			}
		}
		.user-manage{
			overflow: hidden;
			background-color: #fff;
			.manage-box{
				height:253px;
				width:680px;
				margin:133px auto 0;
				padding-bottom: 26px;
			}
			.manage{
				display: block;
				width:350px;
				height:253px;
				background: transparent url(../assets/image/home/manage.png) no-repeat center;
				background-size: cover;
				border-radius:6px;
				overflow: hidden;
				float: left;
			}
			.users{
				float: right;
				.see{
					background-color: #E2E4FB;
					.box-text{
						color:rgba(135,118,178,1);
					}
				}
				
				.follow{
					margin-top: 17px;
					background-color: #FFEDD5;
					.box-text{
						color:#E06363;
					}
				}
				.users-box{
					width:313px;
					height:118px;
					border-radius:6px;
					display: flex;
					justify-content: center;
					align-items: center;
					.box-icon{
						width: 70px;
						// background-color: #fff;
					}
					.box-text{
						margin-left: 25px;
						width:160px;
						font-size:26px;
						font-weight:bold;
						line-height:34px;
						margin-top: 2px;
						// background-color: #fff;
					}
				}
			}
		}
		.body-box{
			background-color: #F5F5F5;
			overflow: hidden;
			padding-bottom: 20px;
			.hospital-notice{
				width:680px;
				height:87px;
				background:rgba(255,255,255,1);
				border-radius:6px;
				margin: 20px auto 0;
				display: flex;
				align-items: center;
				.notice-img{
					width: 32px;
					margin-left: 12px;
				}
				.notice-text{
					margin-left: 10px;
					width: 50px;
					font-size:24px;
					font-weight:bold;
					color:rgba(51,51,51,1);
					line-height:30px;
				}
				.line{
					width:1px;
					height:51px;
					background-color: #eaeaea;
					margin-left: 20px;
				}
				.notice-body{
					margin-left: 17px;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					width:514px;
					font-size:26px;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height: 52px;
					display: block;
				}
			}
			.spread{
				width:680px;
				margin: 20px auto 0;
			}
			.overall-box{
				width:680px;
				height:244px;
				background:rgba(255,255,255,1);
				border-radius:10px;
				margin: 20px auto 0;
				position: relative;
				&::after{
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					content: ' ';
					display: block;
					width:1px;
					height:210px;
					background-color: rgba(234,234,234,1);
				}
				&::before{
					content: ' ';
					display: block;
					width:620px;
					height:1px;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					background-color: rgba(234,234,234,1);
				}
				.menu-box{
					overflow: hidden;
					li{
						width: 50%;
						height: 122px;
						float: left;
						display: flex;
						align-items: center;
						.menu-icon{
							width: 60px;
							margin-left: 34px;
						}
						.menu-text{
							margin-left: 20px;
							font-size:30px;
							font-weight:bold;
							color:rgba(51,51,51,1);
							line-height:38px;
						}
					}
				}
			}
			.article-box{
				width:680px;
				margin: 20px auto 0;
				background-color: #fff;
				overflow: hidden;
				border-radius:10px;
				.box-title{
					display: flex;
					align-items: center;
					width:622px;
					margin: 40px auto 0;
					justify-content: space-between;
					// padding-bottom: 16px;
					.title-box{
						display: flex;
						align-items: center;
						
						.title-icon{
							width: 37px;
						}
						.title-text{
							margin-left: 16px;
							font-size:36px;
							font-weight:bold;
							color:rgba(51,51,51,1);
							line-height: 40px;
						}
					}
					.more-box{
						display: flex;
						align-items: center;
						justify-content: center;
						.more-text{
							margin-right: 10px;
							line-height: 40px;
							font-size:28px;
							font-weight:400;
							color:rgba(102,102,102,1);
						}
						.more-icon{
							width: 18px;
						}
					}
				}
				.article-list{
					// width:622px;
					margin: 0 20px;
					li{
						overflow: hidden;
						border-top:1px solid #eaeaea;
						&:first-child{
							border:none;
						}
						.article-item{
							width: 100%;
							display: block;
							margin: 40px auto;
							overflow: hidden;
							.thumbnail{
								background: #FFFFFF;
								width:220px;
								height:164px;
								border-radius: 10px;
								overflow: hidden;
								float: left;
								box-sizing: border-box;
								border: .5px solid rgba(204, 204, 204, 0.6);
								overflow: hidden;
							}
							.article-content{
								width:370px;
								float: left;
								margin-left: 30px;
								position: relative;
								.content-title{
									width:374px;
									font-size:28px;
									font-weight:bold;
									color:rgba(51,51,51,1);
									line-height:38px;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
									margin-top: 4px;
									min-height: 76px;
								}
								.content-info{
									display: flex;
									justify-content: space-between;
									margin-top: 48px;
									.info-date{
										font-size:24px;
										line-height: 24px;
										font-weight:400;
										color:rgba(17,17,17,.83);
									}
									.watch-mun{
										display: flex;
										align-items: center;
										.watch-icon{
											width:20px;
										}
										.watch-text{
											font-size:22px;
											line-height: 24px;
											font-weight:400;
											color:rgba(17,17,17,.83);
											margin-left: 10px;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>

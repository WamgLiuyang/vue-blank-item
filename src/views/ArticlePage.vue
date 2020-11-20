<template>
	<div class="article">
		<HeaderTitle titleText="健康科普"></HeaderTitle>
		<van-list v-model="loading" :finished="finished" finished-text="我是有底线的~" @load="onLoad">
			<ul class="article-list">
				<li v-for="(item, index) in articleList">
					<router-link class="article-item" :to="`/article_details/${item.articleID}`">
						<img class="thumbnail" :src="item.thumbUrl" alt="article" />
						<div class="article-content">
							<h4 class="content-title">{{ item.title }}</h4>
							<div class="content-info">
								<div class="info-date">{{ item.pubtime | dateFormat }}</div>
								<div class="watch-mun">
									<img class="watch-icon" src="../assets/image/home/watch.png" alt="watch">
									<div class="watch-text">{{ item.hits }}</div>
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import hospital from '@/services/hospital';
	import dayJS from 'dayjs';
	
	export default {
		name:'ArticlePage',
		components:{ HeaderTitle },
		data(){
			return{
				loading: false,
				finished: false,
				page: 0,
				articleList:[]
			}
		},
		filters: {
			dateFormat(e) {
				return dayJS(e).format('YYYY-MM-DD');
			}
		},
		mounted(){
			
		},
		methods:{
			onLoad(){
				this.page++;
				this.getArticleList();
			},
			async getArticleList(){
				this.loading = true;
				let length = 20, start = ((this.page - 1) * length) + 1;
				const articleList = await hospital.getArticleList({ start, length });
				this.loading = false;
				if(articleList.rows > 0){
					this.articleList = this.articleList.concat(articleList.data);
				}
				if(articleList.total === this.articleList.length){
					this.finished = true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article{
		padding-top: 78px;
		.article-list{
			margin: 0 20px;
			li{
				overflow: hidden;
				border-bottom:1px solid #eaeaea;
				.article-item{
					width: 100%;
					display: block;
					margin: 40px auto;
					overflow: hidden;
					.thumbnail{
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
						width: 420px;
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
</style>
<template>
	<div class="article-details">
		<HeaderTitle titleText="健康科普"></HeaderTitle>
		<div class="details-box">
			<h1 class="details-title">{{ articleInfo.title }}</h1>
			<div class="time-box">
				<div class="time">{{ articleInfo.pubtime | dateFormat }}</div>
				<div class="media">{{ articleInfo.author }}</div>
			</div>
			<p v-html="articleInfo.content"></p>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue';
	import hospital from '@/services/hospital';
	import dayJS from 'dayjs';
	
	export default {
		name: 'ArticleDetailsPage',
		props: {
			id: String
		},
		filters: {
			dateFormat(e) {
				return dayJS(e).format('YYYY年MM月DD');
			}
		},
		data(){
			return{
				articleInfo: {}
			}
		},
		components: {
			HeaderTitle
		},
		mounted() {
			// console.log(this.id);
			this.getArticleInfo();
		},
		methods:{
			async getArticleInfo(){
				const articleInfo = await hospital.getArticleInfo({ articleID: this.id });
				if(articleInfo.rows > 0){
					this.articleInfo = articleInfo.data.pop();
				}
				console.log(this.articleInfo)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article-details {
		padding-top: 78px;
		.details-box {
			overflow: hidden;
			.details-title {
				font-size: 42px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				line-height: 44px;
				margin: 40px auto 0;
				text-align: center;
				box-sizing: border-box;
				padding: 0 22px;
			}

			.time-box {
				display: flex;
				justify-content: center;
				font-size: 26px;
				font-weight: 400;
				color: rgba(102, 102, 102, 0.83);
				line-height: 28px;
				padding-bottom: 16px;
				width: 670px;
				margin: 34px auto 0;
				border-bottom: 1px solid rgba(226, 223, 223, 1);

				.media {
					margin-left: 40px;
				}
			}

			p {
				overflow: hidden;
				text-indent: 2em;
				width: 668px;
				margin: 16px auto 60px;
				font-size: 30px;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 62px;
				text-align: justify;
			}
		}
	}
</style>

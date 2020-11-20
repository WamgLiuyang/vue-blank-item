<template>
	<div class="inquiry">
		<h2 class="title">问诊记录</h2>
		<ul class="inquiry-list">
			<li v-for="(item, index) in chats" :key="index" @click="$router.push('/chatroom')">
				<img class="avatar" :src="item.avatar" alt="avatar">
				<div class="user-info">
					<div class="user-name">
						<div class="name">{{item.name}}({{item.housing}})</div>
						<div class="date">{{item.date}}</div>
					</div>
					<div class="chat-content">{{item.content}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'InquiryPage',
		data(){
			return{
				chats:[
					{
						avatar:this.imgPath + 'static/image/common/avatar_1.png',
						date:'16:34',
						content:'这是什么情况',
						name:'张三丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_2.png',
						date:'16:34',
						content:'你好，很高兴为您服务，请问有什么问题？',
						name:'张四丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_3.png',
						date:'16:34',
						content:'你好，我肚子疼',
						name:'张唔丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_4.png',
						date:'16:34',
						content:'请详细描述一下。。。',
						name:'张溜丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_5.png',
						date:'16:34',
						content:'肚子上下左右，前后全疼，抽抽疼',
						name:'张期丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_6.png',
						date:'16:34',
						content:'你好，我肚子疼',
						name:'张唔丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_7.png',
						date:'16:34',
						content:'请详细描述一下。。。',
						name:'张溜丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_8.png',
						date:'16:34',
						content:'肚子上下左右，前后全疼，抽抽疼',
						name:'张溜丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_1.png',
						date:'16:34',
						content:'肚子上下左右，前后全疼，抽抽疼',
						name:'张溜丰',
						housing:'西提红山'
					},
					{
						avatar:this.imgPath + 'static/image/common/avatar_2.png',
						date:'16:34',
						content:'肚子上下左右，前后全疼，抽抽疼',
						name:'张溜丰',
						housing:'西提红山'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inquiry{
		.title{
			background-color: #69C3C9;
			padding: 20px 0;
			font-size:36px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height: 38px;
			text-align: center;
			position: fixed;
			top: 0;
			z-index: 9;
			width: 100%;
		}
		.inquiry-list{
			margin-top: 78px;
			li{
				height: 150px;
				width:680px;
				margin: 0 auto;
				border-bottom:1px solid rgba(238,237,237,1);
				display: flex;
				align-items: center;
				.avatar{
					width:92px;
					height:92px;
					border-radius:10px;
					overflow: hidden;
				}
				.user-info{
					width: 562px;
					margin-left: 26px;
					.user-name{
						overflow: hidden;
						.name{
							float: left;
							font-size:34px;
							font-weight:500;
							color:rgba(51,51,51,1);
							line-height:36px;
						}
						.date{
							float: right;
							font-size:26px;
							font-weight:400;
							color:rgba(102,102,102,1);
						}
					}
					.chat-content{
						width:500px;
						margin-top: 20px;
						font-size:28px;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(153,153,153,1);
						line-height:30px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
				// 562
			}
		}
	}
</style>
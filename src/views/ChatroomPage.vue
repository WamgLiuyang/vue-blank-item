<template>
	<div class="chatroom">
		<div class="header-title">
			<h2 class="title">
				<img class="back" src="../assets/image/back.png" alt="back" @click="$router.back(-1)">
				<span>张三丰</span>
				<img class="next" src="../assets/image/chatroom/video.png" alt="next" >
			</h2>
		</div>
		<div :class="['chat-content', !photoBoxHide && 'chat-pb']" ref="chatContent">
			<div class="date">3月10日 14:28</div>
			<div class="other-one">
				<img :src="this.imgPath + 'static/image/common/doctor.png'" alt="other-avatar">
				<div class="message-box">您好，有什么可以帮助您吗？有 需要联系我。</div>
			</div>
			<div class="you-message">
				<img :src="this.imgPath + 'static/image/common/avatar_6.png'" alt="other-avatar">
				<div class="message-box">肚子疼。。。</div>
			</div>
			<div class="other-one">
				<img :src="this.imgPath + 'static/image/common/doctor.png'" alt="other-avatar">
				<div class="message-box">请详细描述一下。</div>
			</div>
			<div class="you-message">
				<img :src="this.imgPath + 'static/image/common/avatar_6.png'" alt="other-avatar">
				<div class="message-box">肚子上下左右，前后全疼，抽抽 疼0......</div>
			</div>
			<div class="tips">3月10 14:38 系统提示：该医生已下线，本次咨询免费</div>
		</div>
		<div class="input-box" ref="inputBox">
			<form class="input-main" @submit.prevent.stop="sendMessage">
				<label class="ui_button" style="display: block;position: relative;">
					<img src="../assets/image/chatroom/voice.png" alt="voice">
				</label>
				<!-- <input type="file" id="camera" accept="audio/*" capture="microphone" style="position:absolute;clip:rect(0 0 0 0);"/> -->
				<input :class="form.message.length > 0 && 'input-small'" type="text" v-model="form.message">
				<img src="../assets/image/chatroom/emoji.png" alt="emoji">
				<img src="../assets/image/chatroom/more.png" alt="more" @click="photoBoxHide = !photoBoxHide">
				<button :class="['send', form.message.length <= 0 && 'send-hide']" type="submit">发送</button>
			</form>
			<div :class="['photo-box', photoBoxHide && 'photo-box-hide']">
				<label class="ui_button" for="camera" style="display: block;">
					<div class="image-button">
						<img src="../assets/image/chatroom/camera.png" alt="button-icon">
						<div class="button-text">拍照</div>
					</div>
				</label>
				<input type="file" id="camera" accept="image/*" capture="camera" style="position:absolute;clip:rect(0 0 0 0);"/>
				<label class="ui_button" for="file" style="display: block;">
					<div class="image-button ml">
						<img src="../assets/image/chatroom/image.png" alt="button-icon">
						<div class="button-text">照片</div>
					</div>
				</label>
				<input type="file" id="file" accept="image/*"  style="position:absolute;clip:rect(0 0 0 0);"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ChatroomPage',
		data(){
			return{
				photoBoxHide: true,
				form:{
					message:''
				}
			}
		},
		mounted() {
			console.log(navigator.userAgent);
			this.inputFocus();
		},
		methods:{
			sendMessage(){
				this.form.message = '';
			},
			inputFocus(){
				const _that = this;
				$(`input[type="text"]`).on('focus', function(e) {
					const _this = this;
					const u = navigator.userAgent;
					const isAndroid = (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) && (u.indexOf('Edg') === -1) && (u.indexOf('x5app') > -1);
					if(isAndroid){
						// alert(1)
						_that.$refs.chatContent.style.height = 'calc(100% - 330px)';
						_that.$refs.inputBox.style.bottom = '330px';
					}
				}).on('blur', function(e) {
					_that.$refs.chatContent.style.height = '100%';
					_that.$refs.inputBox.style.bottom = '0';
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chatroom{
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
					width: 49px;
					height:33px;
				}
				img{
					position: absolute;
				}
			}
		}
		.chat-pb{
			padding-bottom: 392px !important;
		}
		.chat-content{
			overflow-y: scroll;
			position: fixed;
			padding: 80px 0 108px;
			height: 100%;
			box-sizing: border-box;
			background-color: #EDEDED;
			width: 100%;
			.date{
				font-size:26px;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:28px;
				margin-top: 38px;
				text-align: center;
			}
			.other-one{
				margin-left: 26px;
				overflow: hidden;
				margin-top: 42px;
				img[alt="other-avatar"]{
					width:76px;
					height:76px;
					border-radius:10px;
					float: left;
				}
				.message-box{
					position: relative;
					min-height: 80px;
					border-radius: 6px;
					margin-left: 26px;
					float: left;
					display: flex;
					align-items: center;
					max-width:510px;
					box-sizing: border-box;
					padding: 18px 30px;
					line-height: 44px;
					background-color:#CDEAFC;
					font-size:32px;
					&::before{
						content: ' ';
						position:absolute;
						top: 30px;
						left:-22px; 
						width:0;
						height:0;
						font-size:0;
						border:solid 12px;
						border-color:transparent #CDEAFC transparent transparent ;
					}
				}
			}
			.you-message{
				margin-right: 26px;
				overflow: hidden;
				margin-top: 42px;
				img[alt="other-avatar"]{
					width:76px;
					height:76px;
					border-radius:10px;
					float: right;
				}
				.message-box{
					position: relative;
					min-height: 80px;
					border-radius: 6px;
					margin-right: 26px;
					float: right;
					display: flex;
					align-items: center;
					max-width:510px;
					box-sizing: border-box;
					padding: 18px 30px;
					line-height: 44px;
					background-color:#FFFFFF;
					font-size:32px;
					&::before{
						content: ' ';
						position:absolute;
						top: 30px;
						right:-22px; 
						width:0;
						height:0;
						font-size:0;
						border:solid 12px;
						border-color:transparent transparent transparent #FFFFFF;
					}
				}
			}
			.tips{
				text-align: center;
				margin-top: 66px;
				font-size:26px;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:26px;
			}
		}
		.input-box{
			width: 100%;
			position: fixed;
			bottom: 0;
			.input-main{
				background-color: #F8F6F9;
				box-shadow:0px 1px 0px 0px rgba(228,227,227,1);
				height:109px;
				display: flex;
				align-items: center;
				position: relative;
				img[alt="voice"]{
					margin-left: 16px;
					width:52px;
					height:52px;
				}
				.input-small{
					width: 400px !important;
				}
				input{
					transition: width .3s;
					box-sizing: border-box;
					width:470px;
					height:77px;
					background:rgba(255,255,255,1);
					box-shadow:0px 0px 1px 0px rgba(205,205,205,0.69);
					border-radius:6px;
					margin-left: 17px;
					padding:0 18px;
					font-size:32px;
					font-weight:500;
					color:rgba(1,1,1,1);
				}
				img[alt="emoji"]{
					width:53px;
					height:53px;
					margin-left: 20px;
				}
				img[alt="more"]{
					width: 52px;
					height:52px;
					margin-left: 20px;
				}
				.send-hide{
					transform: translateX(calc(100% + 22px));
				}
				.send{
					transition: transform .3s;
					position: absolute;
					width:120px;
					height:64px;
					background:rgba(7,193,96,1);
					border-radius:6px;
					border: none;
					box-sizing: border-box;
					font-size:32px;
					font-weight:400;
					color:rgba(255,255,255,1);
					right: 22px;
					
					z-index: 99;
				}
			}
			.photo-box-hide{
				height: 0 !important;
			}
			.photo-box{
				transition: height .3s;
				width:720px;
				height:244px;
				background-color:#FEFBFF;
				overflow: hidden;
				.ml{
					margin-left: 86px !important;
				}
				.image-button{
					float: left;
					margin: 40px 0 0 50px;
					width: 87px;
					img[alt="button-icon"]{
						width: 87px;
						height: 87px;
					}
					.button-text{
						font-size:28px;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:30px;
						text-align: center;
					}
				}
			}
		}
	}
</style>
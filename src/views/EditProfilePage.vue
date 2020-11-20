<template>
	<div class="edit-profile">
		<HeaderTitle titleText="修改资料"></HeaderTitle>
		<ul class="profile-list bb20">
			<li>
				<div class="tab-title">头像</div>
				<label class="ui_button" for="camera" style="display: block;">
					<div class="tab-centon">
						<img :src="this.imgPath + 'static/image/common/doctor.png'" alt="avatar">
						<img src="../assets/image/notice/more.png" alt="more">
					</div>
				</label>
				<input type="file" id="camera" accept="image/*" style="position:absolute;clip:rect(0 0 0 0);" @change="avatarChoice" ref="avatar"/>
			</li>
			<router-link tag="li" to="/revise/phone_number">
				<div class="tab-title">手机号</div>
				<div class="tab-centon">
					<div class="centon-text">13454515210</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
			<router-link tag="li" to="/revise/full_name">
				<div class="tab-title">真实姓名</div>
				<div class="tab-centon">
					<div class="centon-text">张世玉</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
		</ul>
		<ul class="profile-list bb20">
			<router-link tag="li" to="/revise/title">
				<div class="tab-title">职称：</div>
				<div class="tab-centon">
					<div class="centon-text">副主任医师/副教授</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
			<router-link tag="li" to="/revise/hospital">
				<div class="tab-title">医院：</div>
				<div class="tab-centon">
					<div class="centon-text">天坛医院</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
			<router-link tag="li" to="/revise/department">
				<div class="tab-title">所属科室：</div>
				<div class="tab-centon">
					<div class="centon-text">血液科</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
		</ul>
		<ul class="profile-list">
			<router-link tag="li" to="/revise/profile">
				<div class="tab-title">个人简介：</div>
				<div class="tab-centon">
					<div class="centon-text">临床血液学博士，主任医师，教育部副主任</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
			<router-link tag="li" to="/revise/expert" style="border-bottom: 1px solid #eeeded;">
				<div class="tab-title">擅长描述：</div>
				<div class="tab-centon">
					<div class="centon-text">各种白血病、造血干细胞移植白血病</div>
					<img src="../assets/image/notice/more.png" alt="more">
				</div>
			</router-link>
		</ul>
		<img :src="temp" alt="">
		<div>{{ $store.state.name }}</div>
	</div>
</template>

<script>
	import HeaderTitle from '../components/HeaderTitle.vue'
	export default {
		name:'EditProfilePage',
		components:{ HeaderTitle },
		data(){
			return{
				temp:''
			}
		},
		mounted() {
			// alert(document.body.clientWidth);
		},
		methods:{
			avatarChoice(e){
				const file = this.$refs.avatar.files[0],_this = this;
				let reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function(){
					// console.log(reader);return;
					_this.$store.commit('edit', reader.result);
					_this.$router.push('/avatar')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-profile{
		padding-top: 78px;
		width: 100%;
		overflow: hidden;
		.bb20{
			border-bottom:20px solid #F5F5F5;
		}
		.profile-list{
			li{
				margin: 0 auto;
				width:668px;
				height: 114px;
				box-sizing: border-box;
				border-bottom:1px solid rgba(238,237,237,1);
				display: flex;
				justify-content: space-between;
				align-items: center;
				.tab-title{
					font-size:34px;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
				.tab-centon{
					height: 100%;
					display: flex;
					align-items: center;
					position: relative;
					img[alt="avatar"]{
						width:76px;
						height:76px;
						border-radius:50%;
					}
					img[alt="more"]{
						width: 30px;
						height: 30px;
						margin-left: 14px;
					}
					.centon-text{
						// text-align: justify;
						// overflow: hidden;      
						// text-overflow: ellipsis;      
						// display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */      
						// -webkit-line-clamp: 1; /* 控制最多显示几行 */      
						// -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */  
						white-space:nowrap;/* 规定文本是否折行 */  
						overflow: hidden;/* 规定超出内容宽度的元素隐藏 */
						text-overflow: ellipsis;
						font-size:30px;
						font-weight:400;
						color:rgba(153,153,153,1);
						line-height:80px;
						text-align: justify;
						max-width:410px;
						@media screen and (max-width: 375px) {
							max-width:424px;
						}
					}
				}
				&:last-child{
					border-bottom: none;
				}
			}
		}
	}
</style>
<template>
	<div class="avatar">
		<div id="clipper-container"></div>
		<img class="buttom" src="../assets/image/cancel.png" alt="cancel" @click="$router.back(-1)">
		<img class="buttom" src="../assets/image/confirm.png" alt="confirm" @click="clip">
		<img v-if="clipSrc" :src="clipSrc" alt="clipSrc">
	</div>
</template>

<script>
	export default {
		name: 'AvatarPage',
		data() {
			return {
				avatar: this.$store.state.avatarBase64,
				clipper: {},
				clipSrc: null
			}
		},
		mounted() {
			if (this.$store.state.avatarBase64.length === 0) {
				this.$router.back(-1);
			} else {
				this.clipperInit();
			}
			
		},
		methods: {
			clipperInit(src) {
				const container = document.getElementById('clipper-container'), _this = this;;
				const clipper = new Clipper(container, {
					coverShape: 'rect',
					coverColor: '#000000',
					coverSize: 0.68,
					coverOpacity: 0.4,
					beforeAF() {
						// stats.begin()
					},
					afterAF() {
						// stats.end()
					}
				});
				clipper.drawImg(this.avatar);
				this.clipper = clipper;
			},
			clip(){
				const _this = this;
				this.clipper.clip(function (data) {
					console.log(data);
					_this.clipSrc = data;
				}, {
					format: 'base64'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: #ccc;

		#clipper-container {
			width: 100%;
			height: 100%;
		}

		.buttom {
			position: fixed;
			z-index: 199;
			width: 89px;
			height: 89px;
			bottom: 64px;
		}

		img[alt="cancel"] {
			left: 90px;
		}

		img[alt="confirm"] {
			right: 90px;
		}
		img[alt="clipSrc"]{
			position: fixed;
			z-index: 299;
			width: auto;
			top: 0;
		}
	}
</style>

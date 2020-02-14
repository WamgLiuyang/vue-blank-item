<template>
	<div class="main">
		<HomeHeader></HomeHeader>
		<img alt="Vue logo" src="../assets/image/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import HomeHeader from '../components/Home/HomeHeader.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,HomeHeader
	},
	mounted(){
		// jQ 引入成功
		console.log($('img').attr('src'));
	}
};
</script>

<style lang="scss" scopedc>
.main {
	text-align: center;
	img{
		margin: 0 auto;
	}
}
</style>
	
<template>
	<router-view id="app"></router-view>
</template>

<script>
	export default {
		name: 'App',
		watch: {
			$route(to, from) {
				document.title = to.meta.title;
				// console.log(); //到哪去
			}
		},
		mounted() {}
	}
</script>

<style scoped>
	#app {
		/* position: fixed;
		width: 100%;
		height: 100%;
		overflow-y: scroll; */
	}
</style>

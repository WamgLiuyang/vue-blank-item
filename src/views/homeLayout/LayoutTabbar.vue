<template>
	<div>
		<router-view class="view-content"></router-view>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import TabBar from '../../components/TabBar.vue'
	export default {
		name:'LayoutTabbar',
		components: { TabBar },
		
	}
</script>

<style lang="scss" scoped>
	.view-content{
		background-color: transparent;
		padding-bottom: 112px;
	}
</style>
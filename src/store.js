import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态 let reader = new FileReader();
        avatarBase64: ''
    },
	mutations:{
		edit(state, e){
			state.avatarBase64 = e;
		}
	}
})

export default store
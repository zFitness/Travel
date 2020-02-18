import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  // 全局公用数据
  state: {
    city: '北京'
  },
  mutations: {
    /**
     * 
     * @param {state 中所有的数据} state 
     * @param {城市} city 
     */
    changeCity (state, city) {
      state.city = city;
      console.log(city);
    }
  }
})
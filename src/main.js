import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
//singel file componet =app.vue
//コンポーネントをimport
//webpackのvue loaderが動かす
//importするとオブジェクトになる？
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
//基本的にfalseでおk
new Vue({
  render: h => h(App),
  // render: function(h){
  //   return createEle,em t(app)
  // }
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');


// fetch('https://5d7f689015404800142245d4.mockapi.io/isac', {
//   method: 'GET',
// }).then(response => response.json()).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.error(err);
// });

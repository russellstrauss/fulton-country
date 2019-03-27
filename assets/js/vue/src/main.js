import Vue from 'vue';
import { store } from './store';
import VueApp from './App.vue';
Vue.config.productionTip = false;

let app = document.querySelector('#app');
if (app) {
		
	new Vue({
		render: function(createElement) {
			return createElement(VueApp);
		},
		store
	}).$mount(app);
}

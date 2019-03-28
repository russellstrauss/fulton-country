import Vue from 'vue';
import { store } from './store';
import Header from './components/Header/Header.vue';
import Hero from './components/Hero/Hero.vue';
import ServicesGrid from './components/ServicesGrid/ServicesGrid.vue';
import Search from './components/Search/Search.vue';
import News from './components/News/News.vue';
import UpcomingEvents from './components/Events/UpcomingEvents.vue';
import Bios from './components/Bios/Bios.vue';
import DistrictLocator from './components/DistrictLocator/DistrictLocator.vue';
import SocialCarousel from './components/Social/SocialCarousel.vue';
import NewsletterSignup from './components/News/NewsletterSignup.vue';
import Footer from './components/Footer/Footer.vue';
Vue.config.productionTip = false;

let componentInitializers = [
	{
		selector: '.header-vue',
		vueComponent: Header
	},
	{
		selector: '.hero-vue',
		vueComponent: Hero
	},
	{
		selector: '.services-grid-vue',
		vueComponent: ServicesGrid
	},
	{
		selector: '.search-vue',
		vueComponent: Search
	},
	{
		selector: '.news-vue',
		vueComponent: News
	},
	{
		selector: '.upcoming-events-vue',
		vueComponent: UpcomingEvents
	},
	{
		selector: '.bios-vue',
		vueComponent: Bios
	},
	{
		selector: '.district-locator-vue',
		vueComponent: DistrictLocator
	},
	{
		selector: '.social-carousel-vue',
		vueComponent: SocialCarousel
	},
	{
		selector: '.newsletter-signup-vue',
		vueComponent: NewsletterSignup
	},
	{
		selector: '.footer-vue',
		vueComponent: Footer
	}
]

componentInitializers.forEach(function(component) {
	
	let elements = document.querySelectorAll(component.selector);
	
	if (elements.length) {
	
		elements.forEach(function(element) {
			
			let vueMountedElement = element.querySelector('.vue');
			
			if (vueMountedElement) {
				
				new Vue({
					render: function(createElement) {
						return createElement(component.vueComponent);
					},
					store
				}).$mount(vueMountedElement);
			}
		});
	}
});
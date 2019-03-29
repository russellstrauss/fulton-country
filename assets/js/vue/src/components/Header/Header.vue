<template>

	<header class="header-main container-fluid">
		
		{{ title }}
		
		<UtilityNav></UtilityNav>
		<SiteNavigation></SiteNavigation>
		
	</header>
	
</template>

<script>

	import UtilityNav from './UtilityNav.vue';
	import SiteNavigation from './SiteNavigation.vue';
	import axios from 'axios';
	
	export default {
		name: 'Header',
		
		components: {
			UtilityNav,
			SiteNavigation
		},
		
		data() {
			return {
				title: "Header Title"
			}
		},
		
		computed: {
			
		},
		
		mounted: function() {
			
			/* eslint-disable no-console */
			let self = this;
		
			let endpointID = this.$el.parentElement.getAttribute('data-endpoint-id');
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Header/' + endpointID + '.json';
			
			axios.get(endpoint).then(function(response) {
				
				self.title = response.data.title;
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		
		methods: {
			
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
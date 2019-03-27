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
			
			let self = this;
		
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Header/HeaderData.json';

			axios.get(endpoint).then(function(response) {
				
				self.title = response.data.title;
			})
			.catch(function (error) {
				/* eslint-disable no-console */
				console.log(error);
			});
		},
		
		methods: {
			
		}
	}
	
</script>
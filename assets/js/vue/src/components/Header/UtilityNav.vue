<template>
		
	<nav class="utility-nav">
		{{ title }}
	</nav>
		
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'UtilityNav',
		
		data() {
			return {
				title: ""
			}
		},
		
		mounted: function() {
			
			let self = this;
		
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Header/UtilityNavData.json';

			axios.get(endpoint).then(function(response) {
				
				self.title = response.data.title;
			})
			.catch(function (error) {
				/* eslint-disable no-console */
				console.log(error);
			});
		}
	}
	
</script>
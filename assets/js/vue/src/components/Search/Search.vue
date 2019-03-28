<template>

	<div class="search container-fluid">
		
		{{ title }}
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'Search',
		
		data() {
			return {
				title: ""
			}
		},
		
		mounted: function() {
			
			/* eslint-disable no-console */
			let self = this;
		
			let endpointID = this.$el.parentElement.getAttribute('data-endpoint-id');
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Search/' + endpointID + '.json';

			axios.get(endpoint).then(function(response) {
				
				self.title = response.data.title;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
	
</script>
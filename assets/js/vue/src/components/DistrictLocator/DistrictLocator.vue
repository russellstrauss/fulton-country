<template>

	<div class="district-locator container-fluid">
		
		{{ title }}
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'DistrictLocator',
		
		data() {
			return {
				title: ""
			}
		},
		
		mounted: function() {
			
			let self = this;
		
			let endpointID = this.$el.parentElement.getAttribute('data-endpoint-id');
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/DistrictLocator/' + endpointID + '.json';

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

<style lang="scss" scoped>
	
</style>
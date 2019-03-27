<template>

	<div class="services-grid container-fluid">
		
		{{ title }}
		
		<div class="container">
			
		</div>
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'ServicesGrid',
		
		data() {
			return {
				title: ""
			}
		},
		
		mounted: function() {
			
			let self = this;
		
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/ServicesGrid/ServicesGridData.json';

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
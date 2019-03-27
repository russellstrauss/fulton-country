<template>

	<div class="bios container-fluid">
		
		{{ title }}
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'Bios',
		
		data() {
			return {
				title: ""
			}
		},
		
		mounted: function() {
			
			let self = this;
		
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Bios/BiosData.json';

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
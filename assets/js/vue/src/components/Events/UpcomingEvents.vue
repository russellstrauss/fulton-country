<template>

	<div class="upcoming-events container-fluid">
		
		<header>
			<h5 class="subtitle">{{ subtitle }}</h5>
			<h2 class="title">{{ title }}</h2>
		</header>
		
		<div class="event-grid">
			<div class="event featured-event">
				Featured Event
			</div>
			<div class="event wide">
				Wide
			</div>
			<div class="event wide">
				Wide
			</div>
			<div class="event wide">
				Wide
			</div>
			<div class="event single">
				Single
			</div>
			<div class="event single">
				Single
			</div>
			<div class="event single">
				Single
			</div>
			<div class="event single">
				Single
			</div>
		</div>
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'UpcomingEvents',
		
		data() {
			return {
				title: "",
				subtitle: ""
			}
		},
		
		mounted: function() {
			
			/* eslint-disable no-console */
			let self = this;
		
			let endpointID = this.$el.parentElement.getAttribute('data-endpoint-id');
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Events/' + endpointID + '.json';

			axios.get(endpoint).then(function(response) {
				
				self.title = response.data.title;
				self.subtitle = response.data.subtitle;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
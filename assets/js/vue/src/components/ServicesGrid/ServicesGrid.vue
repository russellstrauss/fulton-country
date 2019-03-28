<template>

	<div class="services-grid container-fluid">
		
		<h5 class="subtitle">{{ subtitle }}</h5>
		<h2 class="title">{{ title }}</h2>
		
		<div class="container">
			
			<ul class="services" v-if="services">
				<li v-bind:key="service.id" v-for="service in services">
					<header>
						<img class="icon" :src="service.icon" :alt="service.title">
					</header>
					<footer>
						<h3>{{ service.title }}</h3>
						<a :href="service.ctaLink">{{ service.ctaText }}</a>
					</footer>
				</li>
			</ul>
			
		</div>
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	
	export default {
		name: 'ServicesGrid',
		
		data() {
			return {
				subtitle: "",
				title: "",
				services: [],
				viewMoreText: "",
				viewMoreLink: ""
			}
		},
		
		mounted: function() {
			
			/* eslint-disable no-console */
			let self = this;
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/ServicesGrid/ServicesGridData.json';

			axios.get(endpoint).then(function(response) {
				self.subtitle = response.data.subtitle;
				self.title = response.data.title;
				self.services = response.data.services;
				self.viewMoreText = response.data.viewMoreText;
				self.viewMoreLink = response.data.viewMoreLink;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
	
</script>

<style lang="scss" scoped>
	
	.subtitle {
		text-align: center;
	}
	
	.title {
		text-align: center;
	}
	
	.services-grid {
		
		.services {
			padding: 0;
			list-style-type: none;
			display: flex;
			flex-wrap: wrap;
			
			li {
				@include grid(3, 30);
				@include card;
				padding: 20px;
				
				header {
					border-bottom: 1px solid $color-alto;
					margin-bottom: 20px;
					
					.icon {
						display: block;
						margin: 0 auto 30px auto;
					}
				}
				
				footer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					h3 {
						text-align: center;
					}
					
					a {
						text-align: center;
						color: $color-burnt-sienna;
						text-transform: uppercase;
					}
				}
			}
		}
	}
	
</style>
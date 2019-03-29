<template>

	<div class="services-grid container-fluid">
		
		<header>
			<h5 class="subtitle">{{ subtitle }}</h5>
			<h2 class="title">{{ title }}</h2>
		</header>
		
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
			
			<a class="button-primary" :href="viewMoreLink.linkURL">{{ viewMoreLink.linkText }}</a>
			
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
	
	
	.services-grid {
		padding: 60px $gutters;
		
		.container {
			padding: 0;
		}
		
		header {
			background-color: white;
			padding: 30px;
			display: table;
			margin: auto;
			text-align: center;
			margin-bottom: 20px;
			
			.subtitle {
				color: $color-burnt-sienna;
				text-align: center;
				margin-bottom: 0;
			}
			
			.title {
				text-align: center;
				margin-bottom: 0;
				
				&:after {
					content: '';
					border-bottom: 4px solid $color-viking;
					position: absolute;
					width: 100%;
					left: 0;
					z-index: -100;
				}
			}
		}
		
		.services {
			padding: 0;
			list-style-type: none;
			
			@include tablet {
				display: flex;
				flex-wrap: wrap;
			}
			
			li {
				@include card;
				padding: 20px;
				margin-bottom: 30px;
				
				@include tablet {
					@include grid(3, 30);
				}
				
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
		
		.button-primary {
			display: table;
			margin: 0 auto;
		}
	}
	
</style>
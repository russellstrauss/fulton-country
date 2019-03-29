<template>

	<div class="hero container-fluid">
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-bind:key="slide.id" v-for="slide in slides" :style="'background-image:url(' + slide.image + ');'">
					<h3 class="subtitle">{{ slide.subtitle }}</h3>
					<h2 class="title">{{ slide.title}}</h2>
					<div class="caption">{{ slide.caption }}</div>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>

	import axios from 'axios';
	import Swiper from 'swiper';
	
	export default {
		name: 'Hero',
		
		data() {
			return {
				slides: []
			}
		},
		
		mounted: function() {
			
			/* eslint-disable no-console */
			let self = this;
			let endpoint = location.protocol + '//' + window.location.host + '/assets/js/vue/src/components/Hero/HeroData.json';

			axios.get(endpoint).then(function(response) {
				
				self.slides = response.data.slides;
			})
			.catch(function (error) {
				console.log(error);
			});
			
		},
		
		updated() {
			this.initializeSwiper();
		},
		
		methods: {
			
			initializeSwiper: function() {
				
				let swiperContainer = this.$el.querySelector('.swiper-container');
				
				if (swiperContainer) {
					
					new Swiper(swiperContainer, {
						loop: true,
						a11y: true,
						speed: 425,
						pagination: {
							el: '.swiper-pagination',
							type: 'fraction'
						}
					});
				}
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	
	.hero {
		padding: 0;
		
		.swiper-container {
			
			.swiper-wrapper {
				
				.swiper-slide {
					@include background-cover;
					height: 75vh;
				}
			}
		}
	}
	
</style>
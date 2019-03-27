<template>

	<div>
		<Header></Header>
		<Hero></Hero>
		<Search></Search>
		<ServicesGrid></ServicesGrid>
		<News></News>
		<UpcomingEvents></UpcomingEvents>
		<Bios></Bios>
		<DistrictLocator></DistrictLocator>
		<SocialCarousel></SocialCarousel>
		<NewsletterSignup></NewsletterSignup>
		<Footer></Footer>
	</div>
	
</template>

<script>

	import Header from './components/Header/Header.vue';
	import Hero from './components/Hero/Hero.vue';
	import ServicesGrid from './components/ServicesGrid/ServicesGrid.vue';
	import Search from './components/Search/Search.vue';
	import News from './components/News/News.vue';
	import UpcomingEvents from './components/Events/UpcomingEvents.vue';
	import Bios from './components/Bios/Bios.vue';
	import DistrictLocator from './components/DistrictLocator/DistrictLocator.vue';
	import SocialCarousel from './components/Social/SocialCarousel.vue';
	import NewsletterSignup from './components/News/NewsletterSignup.vue';
	import Footer from './components/Footer/Footer.vue';
	
	export default {
		name: 'App',
		
		components: {
			Header,
			Hero,
			Search,
			ServicesGrid,
			News,
			UpcomingEvents,
			Bios,
			DistrictLocator,
			SocialCarousel,
			NewsletterSignup,
			Footer
		}
	}
	
</script>
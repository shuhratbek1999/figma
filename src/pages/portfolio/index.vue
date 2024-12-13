<template>
	<div class="flex flex-col items-center">
		<Navbar :content="content" />
		<Featured :featured="featured" />
		<FutureProject :project="project" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import Featured from '../../components/Featured.vue';
import FutureProject from '../../components/FutureProject.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import aboutImg from '/img/aboutbg.png';
import portImg1 from '/img/portimg1.png';
import portImg2 from '/img/portimg2.png';
import portImg3 from '/img/portimg3.png';
import portImg4 from '/img/portimg4.png';
import portImg5 from '/img/portimg5.png';
import portImg6 from '/img/portimg6.png';
import portImg7 from '/img/portimg7.png';
import portImg8 from '/img/portimg8.png';
import portImg9 from '/img/portimg9.png';
import portImg10 from '/img/portimg10.png';
import portImg11 from '/img/portimg11.png';
import portImg12 from '/img/portimg12.png';
import Project1 from '/img/project1.png';
import Project2 from '/img/project2.png';
import Project3 from '/img/project3.png';
import Project4 from '/img/project4.png';
import Project5 from '/img/test.png';
const content = ref({
	title: 'OUR WORK – A REFLACTION OF EXCELLENCE',
	text: 'Discover Our Luxury Home Improvement Projects',
	img: aboutImg,
	facts: [
		'Our portfolio highlights our passion for outstanding design, top-tier quality, and skilled craftsmanship. Every project demonstrates our unwavering commitment to turning living spaces into elegant, practical, and stunning homes.',
	],
});
const featured = ref({
	lists: [
		{ img: portImg1 },
		{ img: portImg2 },
		{ img: portImg3 },
		{ img: portImg4 },
		{ img: portImg5 },
		{ img: portImg6 },
		{ img: portImg7 },
		{ img: portImg8 },
		{ img: portImg9 },
		{ img: portImg10 },
		{ img: portImg11 },
		{ img: portImg12 },
	],
});
const project = ref({
	title: 'Future projects',
	images: [
		{ img: Project1 },
		{ img: Project2 },
		{ img: Project3 },
		{ img: Project4 },
		{ img: Project5 },
	],
});
</script>

<style lang="scss" scoped></style>

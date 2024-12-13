<template>
	<div class="home flex flex-col items-center">
		<Navbar :content="content" />
		<FutureProject :project="project" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import FutureProject from '../../components/FutureProject.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import BackImg from '/img/img.png';
import List1 from '/img/list1.png';
import List2 from '/img/list2.png';
import List3 from '/img/list3.png';
import List4 from '/img/list4.png';
import AboutLeft from '/img/about.png';
import AboutRight from '/img/about2.png';
import Project1 from '/img/project1.png';
import Project2 from '/img/project2.png';
import Project3 from '/img/project3.png';
import Project4 from '/img/project4.png';
import Project5 from '/img/test.png';
const content = ref({
	title: 'Building with VISION, QUALITY,and PRIDE',
	button: 'ABOUT US',
	facts: [
		'Real Estate Investment & Development',
		'Property Management',
		'General Contractors',
		'Project Management',
	],
	img: BackImg,
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

<style scoped></style>

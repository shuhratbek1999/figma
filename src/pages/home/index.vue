<template>
	<div class="home flex flex-col items-center">
		<Navbar :content="content" />
		<Featured :featured="featured" />
		<AboutUs :about="about" />
		<FutureProject :project="project" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import Featured from '../../components/Featured.vue';
import AboutUs from '../../components/AboutUs.vue';
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
const featured = ref({
	title: 'Featured Insights',
	lists: [
		{
			img: List1,
			title: 'Project Management',
			content: 'Seamless Execution from Concept to Completion',
		},
		{
			img: List2,
			title: 'Plan Processing',
			content: 'Efficient Planning for Smooth Project Approval',
		},
		{
			img: List3,
			title: 'Drafting Services',
			content: 'Detail-Oriented Drafting for Perfect Design Realization',
		},
		{
			img: List4,
			title: 'General Contracting',
			content: 'Expert Building Services for Superior Quality',
		},
	],
	num: 4,
});
const about = ref({
	title: 'About Us',
	text: `
    Based in the vibrant heart of Miami, our real estate development company was founded with a singular vision: to deliver excellence in every phase of property development. With a keen understanding of the complexities inherent to the real estate landscape, we have successfully navigated and thrived in Miami’s highly competitive market. Our dedication goes beyond meeting client expectations; we aim to exceed them through tailored solutions and unwavering commitment to client satisfaction. By blending innovation, expertise, and a client-first approach, we have become a trusted partner in shaping the communities of Miami.
    `,
	img: {
		img_left: AboutLeft,
		img_right: AboutRight,
	},
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

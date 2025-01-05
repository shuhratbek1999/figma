<template>
	<div class="about flex flex-col items-center">
		<Navbar :content="content" />
		<AboutContent :about="about" />
		<Featured :featured="featured" />
		<FutureProject :project="project" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import AboutContent from '../../components/AboutContent.vue';
import Featured from '../../components/Featured.vue';
import FutureProject from '../../components/FutureProject.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import aboutImg from '/img/aboutbg.png';
import Logo from '/img/logo2.png';
import List1 from '/img/list1.png';
import List2 from '/img/aboutPro.png';
import List3 from '/img/aboutPro2.png';
import Project1 from '/img/project1.png';
import Project2 from '/img/project2.png';
import Project3 from '/img/project3.png';
import Project4 from '/img/project4.png';
import Project5 from '/img/test.png';
const content = ref({
	img: aboutImg,
});
const about = ref({
	title: 'About Us',
	text: `
    Premier Developers corp was established in 2021 as a real estate development company. Premier Development Corp we understand the real estate markets and we are committed to creating innovative and sustainable solutions that meet the needs of our clients. Our team consists of experienced architects, engineers, construction professionals, and real estate experts who are passionate about delivering exceptional results. Premier Developers corp is built on a foundation of integrity, professionalism, and a commitment to excellence. We are proud of our reputation for delivering high-quality workmanship and the best possible customer service. Our goal is to create lasting relationships with our clients, and we are dedicated to providing them with the support they need to achieve their real estate goals.
    `,
	img: Logo,
	img_text: `
	Premier Developers is dedicated to delivering exceptional residential and commercial properties that showcase innovative design, superior quality, and unparalleled attention to detail.
	`,
});
const featured = ref({
	lists: [
		{
			img: List1,
			title: 'Premier Developers corp',
			content:
				'Whether you are looking to invest in a new property or are seeking a development partner, you can count on Premier Development Corp. to provide you with the highest level of service and quality',
		},
		{
			img: List2,
			title: 'WIDE RANGE OF PROPERTIES',
			content:
				'With a robust selection of skilled professionals Premier Developers leverages its extensive expertise, experience, and creativity to create developments that not only meet the needs of their clients, but also exceed their expectations.',
		},
		{
			img: List3,
			title: 'FINANCING MADE EASY',
			content:
				'Our stress-free finance department can find financial solutions to save you money through value engineering.',
		},
	],
	role: 'side',
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

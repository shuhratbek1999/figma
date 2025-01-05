<template>
	<div class="faqs flex flex-col items-center">
		<Navbar :content="content" />
		<Settings :featured="settings" />
		<FutureProject :project="project" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import Featured from '../../components/Featured.vue';
import Settings from '../../components/Settings.vue';
import FutureProject from '../../components/FutureProject.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import faqsImg from '/img/faqs.png';
import Project1 from '/img/project1.png';
import Project2 from '/img/project2.png';
import Project3 from '/img/project3.png';
import Project4 from '/img/project4.png';
import Project5 from '/img/test.png';
const content = ref({
	title: 'FAQS',
	text: 'Your Questions Answered',
	img: faqsImg,
	facts: [
		'Find answers to common questions about our services, processes, and more. This section is designed to help you get quick information and better understand how we can assist with your home improvement projects.',
	],
	color: {
		title: 'yellow',
		text: 'white',
	},
	width: '860',
	role: 'faqs',
});
const settings = ref({
	title: 'General Questions',
	lists: [
		{
			title: 'What types of home improvement services do you offer?',
			content:
				'We offer a comprehensive suite of home improvement services, including interior and exterior renovations as well as new home construction. Our experienced team oversees every aspect of your project, from management and design to seamless execution. We are committed to delivering exceptional quality and craftsmanship, ensuring each project reflects our high standards of excellence.',
		},
		{
			title: 'Do you provide free consultations?',
			content:
				"Yes, we offer free consultations to discuss your project ideas, goals, and needs. During the consultation, our team will listen to your vision, provide expert advice, and offer personalized recommendations for your project. Whether you're planning a major renovation, new construction, or any other home improvement, we're here to guide you and help bring your ideas to life.",
		},
		{
			title: 'How does the project management service work?',
			content:
				'Our project management service provides a smooth and hassle-free home improvement experience from start to finish. We begin with a thorough consultation and site evaluation to understand your needs. Next, we work on refining designs, handle all necessary permits, and create a clear project schedule and budget. Throughout construction, our project managers oversee every step to ensure quality and keep you informed with regular updates. Once the project is complete and passes final inspections, we’ll walk you through everything and provide ongoing support to ensure your complete satisfaction.',
		},
		{
			title: 'What is included in your general contractor services?',
			content:
				'Our general contractor services provide complete project management from beginning to end. We assist with consultation, planning, and design, and ensure all required permits are secured. Our experienced team oversees all construction tasks, including framing, roofing, plumbing, and electrical work. We source high-quality materials, coordinate with subcontractors, and ensure the project meets all building code requirements. Throughout the process, we maintain clear communication, provide regular updates, and offer support even after the project is completed to ensure your satisfaction.',
		},
		{
			title: 'Can I see examples of your past projects?',
			content:
				"You can explore examples of our previous work by visiting the portfolio section on our website. There, you'll find a variety of completed projects, including interior remodels, exterior renovations, and new home constructions.",
		},
		{
			title: 'How long does a typical home renovation project take?',
			content:
				'The duration of a typical home renovation project can vary widely depending on the scope and complexity of the work. ',
		},
	],
	main_bg: 'bg-white',
	box_bg: 'bg-featCol',
	text_col: 'text-black',
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

<template>
	<div class="project Type flex flex-col items-center">
		<Navbar :content="content">
			<template v-slot:projects>
				<div
					class="navbar_all xx:h-full xs:h-full w-full flex flex-col items-center xl:h-102"
				>
					<div
						class="absolute xx:w-full xs:w-full md:w-full lg:w-full xl:w-full md:h-102 lg:h-102 xl:h-102 inset-0 bg-black opacity-60 z-40"
					></div>
					<div
						class="navbar_top w-11/12 flex xx:flex-col xs:flex-col md:flex-row lg:flex-row xl:flex-row mt-44 z-50"
					>
						<div class="navbar_top_nav xl:w-103">
							<h1
								class="xx:text-3xl font-montserrat md:text-8xl xl:text-8xl -mt-10 text-white font-extrabold"
							>
								{{ projectAll.title }}
							</h1>
							<p
								class="text-white py-2 font-montserrat xl:text-bass xl:my-2 xx:text-xs font-normal"
							>
								{{ projectAll.title_text }}
							</p>
							<button
								class="border-2 xx:text-base xx:py-1 xl:py-2 text-white py-1 px-2 my-3 border-yellow-800 font-montserrat"
							>
								{{ projectAll.title_btn }}
							</button>
						</div>
						<div class="navbar_top_list flex">
							<div
								class="list_item m-2"
								v-for="(item, index) in projectAll.top"
								:key="index"
							>
								<img :src="item.img" alt="" />
								<p
									class="text-white xx:text-xx xx:h-8 xs:text-xx md:text-xl lg:text-xl xl:text-xl bg-aboutBg xl:h-16 lg:h-16 md:h-16 flex items-center justify-center font-semibold font-montserrat"
								>
									{{ item.text }}
								</p>
							</div>
						</div>
					</div>
					<div
						class="navbat_footer w-11/12 flex xx:flex-wrap xs:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap z-50"
					>
						<div
							class="navbar_footer_list m-2 xl:w-111 xx:w-104 xs:w-104"
							v-for="(item, index) in projectAll.footer"
							:key="index"
						>
							<img :src="item.img" alt="" />
							<p
								class="text-white xx:text-xx xx:h-8 xs:text-xx md:text-xl lg:text-xl xl:text-xl bg-aboutBg xl:h-16 lg:h-16 md:h-16 flex items-center justify-center font-semibold font-montserrat"
							>
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</template>
		</Navbar>
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
import Our1 from '/img/our1.png';
import Our2 from '/img/our2.png';
import Our3 from '/img/our3.png';
import Our4 from '/img/our4.png';
import Our5 from '/img/our5.png';
const content = ref({
	img: BackImg,
	route: 'project',
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
const projectAll = ref({
	title: 'Our Projects',
	title_text:
		'Dive into our portfolio of stunning home renovations, exterior makeovers, and new constructions that echo our commitment to excellence and detail.',
	title_btn: 'Schedule a Free Consultation',
	top: [
		{ img: Our1, text: 'Major exterior Remodeling' },
		{ img: Our2, text: 'Major Interior Remodeling' },
	],
	footer: [
		{ img: Our3, text: 'Home additions' },
		{ img: Our4, text: 'New Construction' },
		{ img: Our5, text: 'Commercial Construction' },
	],
});
</script>

<style scoped></style>

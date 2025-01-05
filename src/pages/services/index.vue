<template>
	<div class="services flex flex-col items-center">
		<Navbar :content="content" />
		<Featured :featured="featured">
			<template v-slot:services>
				<div
					class="lists flex xx:flex-wrap xs:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap xx:my-1 xl:my-4"
				>
					<div
						class="flex xx:w-105 flex-col items-center justify-center m-1 py-4 rounded-xl bg-featCol xl:w-1/4"
						v-for="(list, index) in featured.lists_top"
						:key="index"
					>
						<div
							class="list_item xx:w-10/12 xs:w-10/12 md:w-7/12 lg:w-7/12 xl:w-7/12"
						>
							<img
								:src="list.img"
								class="xx:w-9 xx:h-11 xs:w-9 xs:h-11"
								alt="img"
							/>
							<h1
								class="xx:text-xs md:text-xl my-2 lg:text-xl xl:text-xl text-featTextCol font-bold"
							>
								{{ list.title }}
							</h1>
							<p
								class="text-start xx:text-xx xs:text-xx md:text-base xl:text-base"
							>
								{{ list.content }}
							</p>
						</div>
					</div>
				</div>
			</template>
		</Featured>
		<ServicePlan :plan="plan" />
		<Settings :featured="featureds" />
		<div
			class="design xx:bg-center xx:h-32 bg-aboutBg xx:bg-contain bg-no-repeat xl:bg-right-bottom xl:bg-cover w-full xl:h-90"
			:style="{ backgroundImage: `url(${desBg})` }"
		></div>
		<Settings :featured="designs" />
		<div
			class="expert xx:bg-center xx:h-38 bg-aboutBg xx:bg-contain bg-no-repeat xl:bg-right-bottom xl:bg-cover w-full xl:h-90"
			:style="{ backgroundImage: `url(${ExpBg})` }"
		></div>
		<Settings :featured="Contracts" />
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
import ServicePlan from '../../components/ServicePlan.vue';
import FutureProject from '../../components/FutureProject.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import aboutImg from '/img/services.png';
import desBg from '/img/des.png';
import ExpBg from '/img/exp.png';
import planImg from '/img/plan.png';
import Set1 from '/img/set1.png';
import Set2 from '/img/set2.png';
import Set3 from '/img/set3.png';
import Set4 from '/img/set4.png';
import Set5 from '/img/set5.png';
import Set6 from '/img/set6.png';
import Set7 from '/img/set7.png';
import Set8 from '/img/set8.png';
import des1 from '/img/des1.png';
import des2 from '/img/des2.png';
import des3 from '/img/des3.png';
import des4 from '/img/des4.png';
import des5 from '/img/des5.png';
import des6 from '/img/des6.png';
import des7 from '/img/des7.png';
import des8 from '/img/des8.png';
import Ser1 from '/img/ser1.png';
import Ser2 from '/img/ser2.png';
import Ser3 from '/img/ser3.png';
import Ser4 from '/img/ser4.png';
import Ser5 from '/img/ser5.png';
import Ser6 from '/img/ser6.png';
import Ser7 from '/img/ser7.png';
import Ser8 from '/img/ser8.png';
import Project1 from '/img/project1.png';
import Project2 from '/img/project2.png';
import Project3 from '/img/project3.png';
import Project4 from '/img/project4.png';
import Project5 from '/img/test.png';
const content = ref({
	title: 'Project Management Owners Representation',
	text: 'Expert Project Management for complete project success, Ensuring Excellence in Every Detail of Your Project',
	img: aboutImg,
	facts: [
		'We specialize in simplifying the complexities of real estate development with unmatched expertise. Our project management services are tailored to ensure your project progresses efficiently, stays on budget, and is completed on schedule.',
	],
	width: '860',
	role: 'services',
});
const featured = ref({
	title: 'Why Our Project Management Stands Out',
	lists: [
		{
			img: Ser1,
			title: 'Experienced Team:',
			content: 'Seasoned professionals dedicated to your project’s success.',
		},
		{
			img: Ser2,
			title: 'Client-Centric Approach:',
			content: 'Tailoring our services to meet your unique needs.',
		},
		{
			img: Ser3,
			title: 'Effective Communication:',
			content: 'Keeping you informed at every project stage.',
		},
		{
			img: Ser4,
			title: 'Proven Track Record:',
			content: 'A portfolio of successfully managed luxury developments.',
		},
	],
	lists_top: [
		{
			img: Ser5,
			title: 'Comprehensive Planning:',
			content: 'From initial concept to project execution.',
		},
		{
			img: Ser6,
			title: 'Budget Management:',
			content: 'Ensuring cost-efficiency without compromising quality.',
		},
		{
			img: Ser7,
			title: 'Timeline Oversight:',
			content: 'Keeping your project on track with meticulous scheduling.',
		},
		{
			img: Ser8,
			title: 'Quality Assurance:',
			content: 'Supervising all aspects to maintain the highest standards.',
		},
	],
	role: 'top',
});
const Contracts = ref({
	title: 'Your Premier Choice for General Contracting',
	lists: [
		{
			img: des1,
			title: 'Comprehensive Project Oversight:',
			content: 'Ensuring every aspect is flawlessly executed.',
		},
		{
			img: des2,
			title: 'Custom-Tailored Approach:',
			content: 'Adapting to your specific needs and preferences.',
		},
		{
			img: des3,
			title: 'Timely Completion:',
			content: 'Committing to on-time delivery without compromising quality.',
		},
		{
			img: des4,
			title: 'Transparent Communication:',
			content: 'Keeping you informed and involved at every step.',
		},
	],
	lists_top: [
		{
			img: des5,
			title: 'Full-Service Construction:',
			content: 'From minor renovations to major building projects.',
		},
		{
			img: des6,
			title: 'Quality Material Selection:',
			content: 'Using only the best materials for durability and aesthetics.',
		},
		{
			img: des7,
			title: 'Skilled Workmanship:',
			content: 'Employing experienced craftsmen for exceptional results.',
		},
		{
			img: des8,
			title: 'Safety and Compliance:',
			content: 'Prioritizing safety while adhering to all regulations.',
		},
	],
	main_bg: 'bg-aboutBg',
	box_bg: 'bg-setBg',
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
const plan = ref({
	title: 'Efficient Plan Processing for Your Home Projects',
	name: 'Streamlining Your Path to Project Approval',
	text: 'At Premier Developers Corp, we guide you through the complexities of renovations with confidence and clarity. Our plan processing services ensure your project complies with all regulatory requirements while staying true to your vision and goals.',
	bagImg: planImg,
});
const designs = ref({
	lists: [
		{
			img: des1,
			title: 'Custom Design Solutions:',
			content: 'Custom Design Solutions:.',
		},
		{
			img: des2,
			title: 'Advanced Technology',
			content:
				'Utilizing the latest software for accurate and efficient drafting.”',
		},
		{
			img: des3,
			title: 'Collaborative Process:',
			content: 'Working closely with you to ensure every detail is perfect.”',
		},
		{
			img: des4,
			title: 'Comprehensive Documentation:',
			content: 'Providing complete sets of plans for construction.”',
		},
		{
			img: des5,
			title: 'Expert Drafters:',
			content: 'A team with extensive experience in high-end home design.',
		},
		{
			img: des6,
			title: 'Precision and Accuracy:',
			content: 'Guaranteeing meticulous attention to detail in every plan.',
		},
		{
			img: des7,
			title: 'Efficient Turnaround:',
			content: 'Ensuring timely delivery of all drafting projects.',
		},
		{
			img: des8,
			title: 'Integrated Approach:',
			content:
				'Seamlessly working with our project management and general contracting teams.',
		},
	],
	main_bg: 'bg-aboutBg',
	box_bg: 'bg-setBg',
});
const featureds = ref({
	lists: [
		{
			img: Set1,
			title: 'Regulatory Compliance:',
			content:
				'Ensuring your project adheres to all local building codes and regulations.',
		},
		{
			img: Set2,
			title: 'Permit Acquisition:',
			content:
				'Handling all necessary permits for a hassle-free start to your project.',
		},
		{
			img: Set3,
			title: 'Collaboration width Authorities',
			content:
				'Communicate width local authorities for smooth project approval.',
		},
		{
			img: Set4,
			title: 'Collaboration with Authorities:',
			content: 'Liaising with local authorities for smooth project approval.',
		},
		{
			img: Set5,
			title: 'Expert Knowledge:',
			content: 'Deep understanding of local regulations and requirements.',
		},
		{
			img: Set6,
			title: 'Timely Processing:',
			content:
				'Accelerating the approval process to keep your project on schedule.',
		},
		{
			img: Set7,
			title: 'Attention to Detail:',
			content: 'Ensuring no detail is overlooked in the documentation.',
		},
		{
			img: Set1,
			title: 'Seamless Integration:',
			content:
				'Coordinating with our project management and drafting services for a unified approach.',
		},
	],
	main_bg: 'bg-aboutBg',
	box_bg: 'bg-setBg',
});
</script>

<style lang="scss" scoped></style>

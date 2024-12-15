<template>
	<div
		class="navbar xx:h-80 xx:bg-center xx:bg-cover xs:h-80 w-full md:h-102 lg:h-102 xl:h-102 xl:bg-right-bottom lg:bg-right-bottom relative z-60"
		:style="[
			props.content.role == 'services'
				? {
						backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
        url(${backImg})
      `,
				  }
				: {
						backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
        url(${backImg})
      `,
				  },
		]"
	>
		<div class="content_top fixed z-50 top-0 w-full flex justify-center h-20">
			<div
				class="absolute xx:w-full xs:w-full md:w-full lg:w-full xl:w-full inset-0 bg-black opacity-50"
			></div>
			<div
				class="navbar_nav relative z-10 flex items-center justify-between w-11/12"
			>
				<img :src="logo" width="150" height="67" alt="logo" />
				<ul
					class="flex items-center justify-between xx:hidden xs:hidden md:flex xl:flex lg:flex"
				>
					<li
						v-for="page in Pages"
						:key="page"
						@click="PagesLink(page)"
						class="px-5 text-base text-white cursor-pointer"
						:class="page != 'Contact' ? 'nav_link' : ''"
					>
						<button
							class="contact rounded text-sm w-32 h-9 font-bold text-white"
							v-if="page === 'Contact'"
						>
							{{ page }}
						</button>
						<span v-else>{{ page }}</span>
					</li>
				</ul>
				<img
					:src="Gambuer"
					alt="Gambuer"
					class="xx:flex w-12 h-8 xx:ml-32 xs:flex md:hidden lg:hidden xl:hidden"
					@click="showDrawer"
				/>
				<div class="drawer xx:flex xs:flex lg:hidden xl:hidden md:hidden">
					<a-drawer
						:width="200"
						title="Menu"
						:placement="placement"
						:open="open"
						@close="onClose"
					>
						<ul class="flex flex-col">
							<li
								v-for="page in Pages"
								:key="page"
								@click="PagesLink(page)"
								class="px-5 text-base cursor-pointer nav_link py-2 font-montserrat xx:text-sm"
							>
								<span>{{ page }}</span>
							</li>
						</ul>
					</a-drawer>
				</div>
			</div>
		</div>
		<slot name="projects"></slot>
		<div
			class="navbar_content"
			:class="[
				props.content.role == 'home'
					? 'xx:mt-28 xl:ml-28 xx:ml-20 xl:mt-80'
					: '',
				props.content.role == 'portfolio'
					? 'xx:mt-36 xl:ml-24 xx:ml-4 xl:mt-96'
					: '',
				props.content.role == 'services'
					? 'xx:mt-32 xl:ml-24 xx:ml-4 xl:mt-96'
					: '',
				props.content.role == 'faqs'
					? 'xx:mt-44 xl:ml-24 xx:ml-4 xl:mt-98'
					: '',
			]"
		>
			<h1
				class="xx:text-base xs:text-base xl:text-7xl font-bold font-montserrat"
				:class="[
					props.content.role == 'home' ? 'xl:w-114 xx:w-15 xl:text-7xl' : '',
					props.content.role == 'portfolio'
						? 'xl:w-17 xx:w-15 xl:text-7xl'
						: '',
					props.content.role == 'services' ? 'xl:w-115 xl:text-7xl' : '',
					props.content.role != 'faqs' ? 'text-white' : 'text-featTextCol',
					props.content.role == 'faqs' ? 'xl:text-8xl' : '',
				]"
				v-if="props.content.title"
			>
				{{ props.content.title }}
			</h1>
			<button
				class="contact rounded text-sm xx:w-28 xx:h-6 xx:text-base xl:w-52 xl:h-14 xl:text-2xl font-montserrat font-bold text-white my-4"
				v-if="props.content.button"
			>
				{{ props.content.button }}
			</button>
			<p
				class="content_text xx:text-xs font-bold my-3 font-montserrat"
				:class="[
					props.content.role == 'home' ? 'xl:ml-28 xx:ml-16 xl:mt-80' : '',
					props.content.role == 'portfolio'
						? 'xl:w-17 xx:w-15 xl:text-4xl text-featTextCol'
						: '',
					props.content.role == 'services'
						? 'xl:w-113 xx:w-15 xl:text-3xl text-featTextCol'
						: '',
					props.content.role == 'faqs' ? 'xl:text-5xl text-white' : '',
				]"
				v-if="props.content.text"
			>
				{{ props.content.text }}
			</p>
			<ol v-if="props.content.facts">
				<li
					class="xx:text-fx xs:text-fx xx:my-0 xl:my-2 lg:my-2 md:text-base lg:text-xl text-white list-inside font-montserrat"
					:class="[
						props.content.text ? 'list-none' : 'list-disc',
						props.content.role == 'portfolio' ? 'xl:w-17 xx:w-72' : '',
						props.content.role == 'services'
							? 'xx:w-9/12 xl:w-115 xl:text-xl'
							: '',
						props.content.role == 'faqs'
							? 'xl:text-2xl xx:text-xx xx:w-9/12 text-ffff xl:w-116'
							: 'xl:text-xl',
					]"
					v-for="fact in props.content.facts"
					:key="fact"
				>
					{{ fact }}
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Logo from '/img/logo.png';
import gambur from '/img/gambur.png';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
	content: {
		type: Object,
		required: true,
	},
});
const placement = ref('left');
const open = ref(false);
const logo = ref(Logo);
const Gambuer = ref(gambur);
const backImg = ref(props.content.img);
let Pages = ref([
	'Home',
	'About Us',
	'Portfolio',
	'Project Type',
	'Services',
	'FAQS',
	'Contact',
]);
const PagesLink = page => {
	switch (page) {
		case 'About Us':
			router.push('/about');
			break;
		case 'Home':
			router.push('/');
			break;
		case 'Portfolio':
			router.push('/portfolio');
			break;
		case 'Project Type':
			router.push('/project');
			break;
		case 'Services':
			router.push('/services');
			break;
		case 'FAQS':
			router.push('/faqs');
			break;
		default:
			break;
	}
};
const showDrawer = () => {
	open.value = true;
};
const onClose = () => {
	open.value = false;
};
const gradientStart = ref('rgba(255, 0, 0, 0.5)');
const gradientEnd = ref('rgba(0, 0, 255, 0.5)');
const imageOpacity = ref('0.7');
// const navbarStyle = computed(() => {
// 	return {
// 		backgroundImage: `linear-gradient(to right,${gradientStart.value},${gradientEnd.value},url(${backImg.value}))`,
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center',
// 		backgroundRepeat: 'no-repeat',
// 		filter: `opacity(${imageOpacity.value})`,
// 	};
// });
</script>

<style scoped>
.contact {
	background: linear-gradient(to right, #d07e15, #ffc470);
}
.list {
	list-style: inside circle;
}
.nav_link {
	transition: all 0.3s ease-in-out;
}
.nav_link:hover {
	padding-bottom: 2px;
	border-bottom: 1px solid white;
}
</style>

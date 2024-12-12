<template>
	<div
		class="navbar xx:h-98 xs:h-98 w-full md:h-screen lg:h-screen xl:h-screen bg-right-top bg-cover"
		:style="{ backgroundImage: `url(${backImg})` }"
	>
		<div
			class="content_top fixed z-50 top-0 w-full flex justify-center h-20 inset-0"
		>
			<div
				class="absolute xx:w-full xs:w-full md:w-full lg:w-full xl:w-full inset-0 bg-black opacity-50"
			></div>
			<div
				class="navbar_nav relative z-10 flex items-center justify-between w-11/12 opacity-100"
			>
				<img :src="logo" width="150" height="67" alt="logo" />
				<ul
					class="flex items-center justify-between xx:hidden xs:hidden md:flex xl:flex lg:flex"
				>
					<li
						v-for="page in Pages"
						:key="page"
						class="px-5 text-base text-white cursor-pointer nav_link"
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
					class="xx:flex xx:ml-32 xs:flex md:hidden lg:hidden xl:hidden"
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
								class="px-5 text-base cursor-pointer nav_link py-2"
							>
								<span>{{ page }}</span>
							</li>
						</ul>
					</a-drawer>
				</div>
			</div>
		</div>
		<div
			class="navbar_content xx:p-2 xs:p-2 xx:ml-10 xx:w-52 xs:ml-10 xs:w-52 md:ml-20 md:w-99 md:h-89 lg:ml-20 lg:w-99 lg:h-89 xl:ml-20 xl:w-99 xl:h-89 mt-32 md:p-10 lg:p-10 xl:p-10 text-white"
		>
			<h1
				class="xx:text-xl xs:text-xl md:text-5xl lg:text-5xl xl:text-5xl"
				v-if="props.content.title"
			>
				{{ props.content.title }}
			</h1>
			<button
				class="contact rounded text-sm w-32 h-9 font-bold text-white my-4"
				v-if="props.content.button"
			>
				{{ props.content.button }}
			</button>
			<ol v-if="props.content.facts" class="list">
				<li
					class="xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
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
import { ref } from 'vue';
import Logo from '/img/logo.png';
import gambur from '/img/gambur.png';
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
const showDrawer = () => {
	open.value = true;
};
const onClose = () => {
	open.value = false;
};
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

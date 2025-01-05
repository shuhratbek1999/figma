<template>
	<div
		class="footer w-full bg-aboutBg flex flex-col items-center justify-end xx:h-52 xs:h-56 md:h-64 lg:h-64 xl:h-64 -mt-1 relative"
	>
		<div class="footer_navbar flex flex-wrap items-center w-11/12 mx-auto mb-2">
			<div
				class="footer_navbar_items md:absolute md:top-2 lg:absolute xl:absolute w-full flex flex-wrap items-center justify-center mb-4 xl:h-full lg:h-full"
			>
				<div
					class="Footer_navbar_item cursor-pointer xx:text-xz xs:text-xx md:text-xl lg:text-xl xl:text-xl px-4 py-2 text-white text-center"
					v-for="nav in Navbar"
					:key="nav"
					@click="PagesLink(nav)"
				>
					{{ nav }}
				</div>
			</div>
			<div class="logo_links w-full flex items-center justify-between">
				<div class="img flex-1 flex justify-center md:justify-start">
					<img :src="LogoImg" alt="logo" class="w-auto h-auto max-h-16" />
				</div>
				<div class="links flex flex-1 justify-end space-x-2">
					<div
						class="links_item w-10 h-10 flex justify-center items-center rounded-full bg-gray-400"
						v-for="(item, index) in Links"
						:key="index"
					>
						<img :src="item.img" alt="link icon" class="w-6 h-6" />
					</div>
				</div>
			</div>
		</div>
		<div class="footer_line w-11/12 h-0.5 mt-2 bg-gray-400"></div>
		<div class="footer_text xx:mt-6 md:mt-8 lg:mt-8 xl:mt-8">
			<p class="text-center text-gray-300 text-sm">
				Premier Developers, LLC 2023  All Rights Reserved
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '/img/logo.png';
import Insta from '/img/instaa.png';
import Face from '/img/face.png';
import Linkedin from '/img/link.png';
import { useRouter } from 'vue-router';
const router = useRouter();
const LogoImg = ref(Logo);
const Navbar = ref(['Home', 'About Us', 'Project Type', 'Services', 'FAQS']);
const Links = ref([{ img: Insta }, { img: Face }, { img: Linkedin }]);
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
</script>

<style lang="scss" scoped></style>

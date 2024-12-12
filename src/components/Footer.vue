<template>
	<div
		class="footer w-full bg-aboutBg flex flex-col items-center h-40 mt-5 relative"
	>
		<div class="footer_navbar flex flex-wrap items-center w-11/12 mx-auto mb-2">
			<div
				class="footer_navbar_items md:absolute md:top-2 lg:absolute xl:absolute w-full flex flex-wrap items-center justify-center mb-4"
			>
				<div
					class="Footer_navbar_item xx:text-xx xs:text-xx md:text-xl lg:text-xl xl:text-xl px-4 py-2 text-white text-center"
					v-for="nav in Navbar"
					:key="nav"
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
		<div class="footer_line w-11/12 h-0.5 bg-gray-400"></div>
		<div class="footer_text mt-2">
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
const LogoImg = ref(Logo);
const Navbar = ref(['Home', 'About Us', 'Project Type', 'Services', 'FAQS']);
const Links = ref([{ img: Insta }, { img: Face }, { img: Linkedin }]);
</script>

<style lang="scss" scoped></style>

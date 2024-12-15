<template>
	<div
		class="aboutUs w-full xx:h-104 xs:h-104 md:h-98 lg:h-98 xl:h-98 flex xx:flex-col xs:flex-col md:flex-row lg:flex-row xl:flex-row items-center bg-aboutBg"
	>
		<div
			class="aboutUs_img relative h-full xx:w-11/12 xs:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2"
			v-if="AboutContent.img"
		>
			<img
				:src="AboutContent.img.img_left"
				alt="images"
				class="img1 absolute xx:left-2 xx:bottom-36 xx:w-52 xx:h-36 xs:w-52 xs:left-2 xs:bottom-36 md:w-64 md:left-36 md:bottom-52 lg:bottom-52 lg:left-36 lg:w-64 xl:w-64 xl:h-44 xl:left-36 xl:bottom-52"
			/>
			<img
				:src="AboutContent.img.img_right"
				alt="images2"
				class="img2 absolute xx:right-2 xx:bottom-8 xx:w-52 xx:h-36 xs:w-52 xs:right-2 xs:bottom-6 md:right-16 md:bottom-20 lg:right-16 lg:bottom-20 xl:right-16 xl:h-44 xl:bottom-20 md:w-64 lg:w-64 xl:w-64"
			/>
		</div>
		<div class="aboutUs_text xx:w-11/12 xs:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2">
			<div
				class="aboutUs_text_title flex items-center pb-4"
				v-if="AboutContent.title"
			>
				<div class="line w-16 h-0.3 bg-white mr-4"></div>
				<h1 class="text-white font-montserrat">{{ AboutContent.title }}</h1>
			</div>
			<div
				class="aboutUs_text_content text-gray-300 italic xx:text-base xx:w-full xs:text-base md:text-lg md:w-97 lg:w-97 lg:text-lg xl:w-97 xl:text-lg font-epilogue pb-4"
				v-if="AboutContent.text"
			>
				{{ AboutContent.text }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	about: {
		type: Object,
		required: true,
	},
});
const AboutContent = ref(props.about);
</script>

<style lang="scss" scoped></style>

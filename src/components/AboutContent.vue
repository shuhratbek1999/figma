<template>
	<div class="about w-full flex flex-col items-center">
		<div
			class="about_top py-10 xx:w-11/12 xs:w-11/12 md:w-9/12 lg:w-9/12 xl:w-9/12"
		>
			<h1
				class="xx:text-2xl xs:text-2xl md:text-6xl lg:text-6xl xl:text-6xl font-bold font-montserrat"
			>
				{{ About.title }}
			</h1>
			<p
				class="xx:text-base xs:text-base font-normal md:text-xl lg:text-xl xl:text-xl font-montserrat text-justify"
			>
				{{ About.text }}
			</p>
		</div>
		<div class="about_footer flex justify-center bg-contactCol">
			<div
				class="about_footer_content xx:p-2 xx:w-full flex items-center lg:w-11/12 lg:p-5 xl:w-11/12 xl:p-5"
			>
				<img
					:src="About.img"
					alt="img"
					class="xx:hidden xs:hidden md:inline md:w-97 md:h-60 lg:inline lg:w-97 lg:h-60 xl:inline xl:w-97 xl:h-60"
				/>
				<p
					class="xx:text-base xs:text-base md:text-2xl lg:text-2xl xl:text-2xl text-abouttext text-center font-montserrat"
				>
					{{ About.img_text }}
				</p>
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
const About = ref(props.about);
</script>

<style lang="scss" scoped></style>

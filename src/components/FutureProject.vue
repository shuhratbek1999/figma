<template>
	<div class="project py-5">
		<div class="project_title flex justify-center">
			<h1
				v-if="Project.title"
				class="mb-8 border-b-4 border-yellow-600 pb-1 inline-block lg:text-3xl font-semibold"
			>
				{{ Project.title }}
			</h1>
		</div>
		<ul class="project_img xx:hidden xs:hidden md:flex lg:flex xl:flex">
			<li v-for="item in Project.images" :key="item">
				<img :src="item.img" :alt="item.img" />
			</li>
		</ul>
		<div class="carousel xx:flex xs:flex md:hidden lg:hidden xl:hidden">
			<a-carousel autoplay>
				<template #prev-arrow>
					<div class="custom-arrow">&lt;</div>
				</template>
				<template #next-arrow>
					<div class="custom-arrow">&gt;</div>
				</template>

				<div
					v-for="(item, index) in Project.images"
					:key="index"
					class="carousel-slide"
				>
					<img :src="item.img" :alt="item.img" />
				</div>
			</a-carousel>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});
const Project = ref(props.project);
</script>

<style scoped>
.carousel-slide {
	height: 160px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #364d79;
	color: white;
	font-size: 18px;
}
.custom-arrow {
	color: red;
	font-size: 20px;
	cursor: pointer;
}
</style>

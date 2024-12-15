<template>
	<div class="project py-5 w-full">
		<div class="project_title flex justify-center">
			<h1
				v-if="Project.title"
				class="mb-8 border-b-4 border-yellow-600 pb-1 inline-block lg:text-3xl font-semibold font-montserrat"
			>
				{{ Project.title }}
			</h1>
		</div>
		<ul class="project_img xx:hidden xs:hidden md:flex lg:flex xl:flex">
			<li
				v-for="(item, index) in Project.images"
				:key="index"
				:ref="el => (Projects[index] = el)"
			>
				<img :src="item.img" :alt="item.img" />
			</li>
		</ul>
		<div
			class="carousel xx:w-full xx:inline xs:inline md:hidden lg:hidden xl:hidden"
		>
			<swiper
				:modules="modules"
				:slides-per-view="3"
				navigation
				@slideChange="onSlideChange"
				class="swiper"
			>
				<swiper-slide
					class="w-48 h-36 flex justify-center items-center"
					:style="{ width: '31%' }"
					v-for="item in Project.images"
					:key="item"
				>
					<img class="" :src="item.img" :alt="item.img" />
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
const modules = ref([Navigation, A11y]);
const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});
const onSlideChange = swiper => {
	if (swiper.activeIndex == 4) {
		setTimeout(() => {
			swiper.slideTo(0);
		}, 2000);
	}
};
const Projects = ref([]);
const Project = ref(props.project);
onMounted(async () => {
	await nextTick();
	gsap.registerPlugin(ScrollTrigger);
	Projects.value.forEach(set => {
		gsap.fromTo(
			set,
			{
				opacity: 0,
				y: 80,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: set,
					start: 'top 80%',
				},
			}
		);
	});
});
</script>

<style scoped>
/* .mySwiper {
	width: 100%;
	height: 300px;
} */
/* .swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
} */
.swiper {
	width: 96% !important;
}
</style>

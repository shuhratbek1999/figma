<template>
	<div
		class="lists w-full flex flex-col items-center justify-center"
		:class="[featured.main_bg]"
	>
		<div
			class="list_item w-11/12 flex flex-wrap justify-center xx:my-1 xl:my-4"
		>
			<div
				class="flex xx:w-105 flex-col items-center justify-center mx-1 my-4 py-4 rounded-xl"
				:class="[
					featured.box_bg,
					featured.text_col ? 'xl:w-105 xx:w-11/12 lg:w-105' : 'xl:w-110',
				]"
				v-for="(list, index) in featured.lists"
				:ref="el => (Settings[index] = el)"
				:key="index"
			>
				<div
					class="list_item xx:w-10/12 xs:w-10/12"
					:class="[
						featured.text_col
							? 'md:w-10/12 lg:w-10/12 xl:w-10/12'
							: 'md:w-7/12 lg:w-7/12 xl:w-7/12',
					]"
				>
					<div class="img" v-if="list.img">
						<img
							:src="list.img"
							class="xx:w-9 xx:h-11 xs:w-9 xs:h-11"
							alt="img"
						/>
					</div>
					<h1
						class="xx:text-xs md:text-xl lg:text-xl xl:text-xl font-bold font-montserrat my-1"
						:class="[featured.text_col ? 'text-black' : 'text-featTextCol']"
					>
						{{ list.title }}
					</h1>
					<p
						class="text-start xx:text-xx xs:text-xx md:text-base xl:text-base font-montserrat"
						:class="[featured.text_col ? 'text-black' : 'text-white']"
					>
						{{ list.content }}
					</p>
				</div>
			</div>
		</div>
		<div class="settings_list_title" v-if="featured.title">
			<h1
				class="xx:text-sm text-center xl:text-2xl uppercase text-white font-montserrat font-bold"
			>
				{{ featured.title }}
			</h1>
		</div>
		<div
			class="list_item w-11/12 flex flex-wrap justify-center xx:my-1 xl:my-4"
		>
			<div
				class="flex xx:w-105 flex-col items-center justify-center mx-1 my-4 py-4 rounded-xl bg-setBg xl:w-110"
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
						class="xx:text-xs md:text-xl lg:text-xl xl:text-xl text-featTextCol font-bold font-montserrat my-1"
					>
						{{ list.title }}
					</h1>
					<p
						class="text-start xx:text-xx xs:text-xx md:text-base xl:text-base text-white font-montserrat"
					>
						{{ list.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const props = defineProps({
	featured: {
		type: Object,
		required: true,
	},
});
const Settings = ref([]);
const featured = ref(props.featured);
onMounted(async () => {
	await nextTick();
	gsap.registerPlugin(ScrollTrigger);
	Settings.value.forEach(set => {
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

<style lang="scss" scoped></style>

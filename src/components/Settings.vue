<template>
	<div
		class="lists w-full flex flex-col items-center justify-center bg-aboutBg"
	>
		<div
			class="list_item w-11/12 flex flex-wrap justify-center xx:my-1 xl:my-4"
		>
			<div
				class="flex xx:w-105 flex-col items-center justify-center mx-1 my-4 py-4 rounded-xl bg-setBg xl:w-110"
				v-for="(list, index) in featured.lists"
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
		<div class="settings_list_title" v-if="featured.title">
			<h1 class="xx:text-sm xl:text-2xl text-white font-montserrat font-bold">
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
import { ref } from 'vue';
const props = defineProps({
	featured: {
		type: Object,
		required: true,
	},
});
const featured = ref(props.featured);
</script>

<style lang="scss" scoped></style>

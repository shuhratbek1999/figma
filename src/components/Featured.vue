<template>
	<div class="featured bg-white w-full flex justify-center py-10">
		<div class="featured_content w-11/12" v-if="Content">
			<div
				class="featured_content_title flex justify-center"
				v-if="Content.title"
			>
				<h1
					class="text-center text-3xl font-semibold mb-8 border-b-4 border-yellow-600 pb-1 inline-block"
				>
					{{ Content.title }}
				</h1>
			</div>
			<div
				class="featured_content_list flex xx:flex-wrap xs:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap"
				v-if="Content.lists"
			>
				<div
					class="featured_content_list_item flex cursor-pointer flex-col items-center xx:w-105 xx:m-1 xs:m-1 xs:w-105 md:w-1/4 lg:w-1/4 xl:w-1/4 md:mx-2 lg:mx-2 xl:mx-2 bg-featCol rounded-lg p-4"
					v-for="(list, index) in Content.lists"
					:key="index"
				>
					<img
						:src="list.img"
						class="xx:w-9 xx:h-11 xs:w-9 xs:h-11 md:w-14 md:h-16 lg:w-14 lg:h-16 xl:w-14 xl:h-16"
						alt="img"
					/>
					<h1
						class="xx:text-xs md:text-xl lg:text-xl xl:text-xl text-featTextCol font-bold"
					>
						{{ list.title }}
					</h1>
					<p
						class="text-center xx:text-xx xs:text-xx md:text-sm lg:text-sm xl:text-sm"
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
const Content = ref(props.featured);
</script>

<style lang="scss" scoped></style>

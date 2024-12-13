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
				class="featured_content_list flex xx:flex-wrap xs:flex-wrap"
				v-if="Content.lists"
				:class="[
					Content.lists.length > 5
						? 'md:flex-wrap lg:flex-wrap xl:flex-wrap'
						: 'md:flex-nowrap lg:flex-nowrap xl:flex-nowrap',
				]"
			>
				<div
					class="featured_content_list_item flex cursor-pointer flex-col items-center xx:mx-1 xx:my-1 xs:mx-1 xs:my-1 md:mx-2 md:my-2 lg:my-2 lg:mx-2 xl:my-2 xl:mx-2 bg-featCol rounded-lg"
					:class="[
						Content.lists.length < 5
							? `xl:w-1/${Content.lists.length} lg:w-1/${Content.lists.length} p-4`
							: 'xl:w-111 md:w-111 lg:w-111 xx:w-1/2 xs:w-1/2 border-2',
						list.title ? 'bg-featCol' : 'bg-white',
						Content.lists.length == 3
							? 'xx:w-full xs:w-full'
							: 'xx:w-105 xs:w-105',
					]"
					v-for="(list, index) in Content.lists"
					:key="index"
				>
					<img
						:src="list.img"
						class="xx:w-9 xx:h-11 xs:w-9 xs:h-11"
						:class="[
							Content.lists.length > 4
								? 'xl:w-full xl:h-72 md:h-72 md:w-full lg:h-72 lg:w-full xx:w-full xx:h-32 xs:w-full xs:h-32'
								: 'md:w-14 lg:w-14 xl:w-14 md:h-16 lg:h-16 xl:h-16',
						]"
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

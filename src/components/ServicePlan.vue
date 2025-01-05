<template>
	<div
		class="service_plan bg-right-top bg-cover w-full xl:h-94"
		:style="{ backgroundImage: `url(${service.bagImg})` }"
	>
		<div class="service_plan_content w-full">
			<!-- <h1>{{ service.title }}</h1> -->
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	plan: {
		type: Object,
		required: true,
	},
});
const service = ref(props.plan);
</script>

<style lang="scss" scoped></style>

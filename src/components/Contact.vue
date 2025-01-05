<template>
	<div
		class="contact w-full xx:py-5 md:h-101 lg:h-101 xl:h-104 flex flex-col justify-center items-center relative top-5"
	>
		<div
			class="contact_content xx:flex xx:justify-center md:justify-start lg:justify-start xl:justify-start w-11/12 h-3/5 bg-white"
		>
			<div
				class="contact_content_top flex flex-col xx:items-center xl:items-start"
			>
				<h1
					class="font-bold xx:text-base xx:w-full xx:text-center xs:text-center xs:w-full xs:text-base md:text-4xl md:text-start lg:text-start xl:text-start lg:text-4xl xl:text-4xl font-epilogue md:w-103 lg:w-103 xl:w-103"
				>
					Ready To Elevate Your Property?
				</h1>
				<p
					class="italic font-light xx:text-xx xx:w-11/12 xx:text-center md:text-start md:text-xl lg:text-start lg:text-xl xl:text-start xl:text-xl my-2 font-epilogue xl:w-112"
				>
					Contact us today to schedule a consultation and explore how we can
					help you maximize your property’s potential.
				</p>
				<button
					class="input_btn rounded-md xx:w-32 xx:h-7 md:w-52 md:h-14 md:text-2xl lg:w-52 lg:h-14 lg:text-2xl xl:w-52 xl:h-14 xl:text-2xl font-bold"
				>
					CONTACT US
				</button>
			</div>
		</div>
		<div
			class="contact_form md:absolute xx:m-4 xs:m-4 md:m-0 lg:m-0 xl:m-0 lg:absolute xl:absolute xl:-bottom-16 lg:-bottom-16 md:right-28 lg:right-28 xl:right-28 z-20"
		>
			<Forma />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Forma from './Form.vue';
const formState = ref({
	email: '',
});
</script>

<style scoped>
.input_btn {
	background: linear-gradient(to right, #d07e15, #ffc470);
}
</style>

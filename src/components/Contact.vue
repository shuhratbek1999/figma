<template>
	<div
		class="contact w-full md:h-101 lg:h-101 xl:h-101 flex flex-col justify-center items-center relative top-5"
	>
		<div class="contact_content w-11/12 h-3/5 bg-white">
			<div
				class="contact_content_top xx:w-11/12 xs:w-11/12 md:w-108 lg:w-108 xl:w-108"
			>
				<h1
					class="font-bold xx:text-base xs:text-base md:text-4xl lg:text-4xl xl:text-4xl"
				>
					Ready To Elevate Your Property?
				</h1>
				<p
					class="italic font-light xx:text-xx md:text-xl lg:text-xl xl:text-xl my-2"
				>
					Contact us today to schedule a consultation and explore how we can
					help you maximize your property’s potential.
				</p>
				<button class="input_btn rounded-md w-52 h-14 font-bold text-2xl">
					Contact Us
				</button>
			</div>
		</div>
		<div
			class="contact_form md:absolute xx:m-4 xs:m-4 md:m-0 lg:m-0 xl:m-0 lg:absolute xl:absolute bottom-4 md:right-28 lg:right-28 xl:right-28 z-20"
		>
			<Forma />
		</div>
		<div class="contact_email w-full flex justify-center h-2/5 bg-contactCol">
			<a-form
				:model="formState"
				name="basic"
				:label-col="{ span: 8 }"
				:wrapper-col="{ span: 16 }"
				autocomplete="off"
				class="w-11/12"
			>
				<a-form-item
					name="email"
					:rules="[{ required: true, message: 'Please input your email!' }]"
					class="relative xx:w-full xs:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mt-10"
				>
					<span
						class="text-white xx:text-sm xs:text-sm md:text-xl lg:text-xl xl:text-xl font-normal"
						>Enter your email address to receive latest tips & deals.</span
					>
					<a-input
						v-model:value="formState.email"
						placeholder="Enter Your Email"
						class="rounded-3xl py-5 w-full md:mt-2 lg:mt-2 xl:mt-2"
					/>
					<button
						class="absolute right-2 xx:top-7 xs:top-7 md:top-11 lg:top-11 xl:top-11 font-bold w-48 rounded-3xl input_btn p-2"
						style="height: 53px"
					>
						FREE TIPS & DEALS
					</button>
				</a-form-item>
			</a-form>
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

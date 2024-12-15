<template>
	<div
		class="contact w-full md:h-101 lg:h-101 xl:h-101 flex flex-col justify-center items-center relative top-5"
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
			class="contact_form md:absolute xx:m-4 xs:m-4 md:m-0 lg:m-0 xl:m-0 lg:absolute xl:absolute bottom-20 md:right-28 lg:right-28 xl:right-28 z-20"
		>
			<Forma />
		</div>
		<div class="contact_email w-full flex justify-center h-1/3 bg-contactCol">
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
						class="text-white xx:text-xs xs:text-xs md:text-xl lg:text-xl xl:text-xl font-epilogue"
						>Enter your email address to receive latest tips & deals.</span
					>
					<a-input
						v-model:value="formState.email"
						placeholder="Enter Your Email"
						class="rounded-3xl xx:h-10 xs:h-10 md:h-16 lg:h-16 xl:h-16 w-full"
					/>
					<button
						class="absolute right-1 font-bold xx:h-8 xx:mt-1 xs:mt-1 xs:h-8 xx:w-40 xx:text-xs xs:text-xs md:text-xl lg:text-xl xl:text-xl md:w-48 md:h-14 md:top-8 md:mt-0.5 lg:mt-0.5 lg:top-8 lg:h-14 xl:mt-1 xl:top-6 xl:h-14 lg:w-48 xl:w-48 rounded-3xl input_btn p-1"
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

<template>
	<a-form
		:model="formState"
		v-bind="layout"
		name="nest-messages"
		:validate-messages="validateMessages"
		@finish="onFinish"
		class="xx:w-11/12 xs:w-11/12 md:w-101 lg:w-101 xl:w-101 p-5 md:min-h-98 lg:min-h-98 xl:min-h-98 bg-white rounded-3xl form shadow-xl"
	>
		<div
			class="form_top flex xx:flex-row xs:flex-row md:flex-col lg:flex-col xl:flex-col"
		>
			<a-form-item
				:name="['user', 'name']"
				label="Full Name"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				:rules="[{ required: true }]"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-input v-model:value="formState.user.name" />
			</a-form-item>
			<a-form-item
				:name="['user', 'Email']"
				label="Email"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				:rules="[{ required: true }]"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-input v-model:value="formState.user.email" />
			</a-form-item>
		</div>
		<div
			class="form_center flex xx:flex-row xs:flex-row md:flex-col lg:flex-col xl:flex-col"
		>
			<a-form-item
				:name="['user', 'phone_number']"
				label="Phone Number"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				:rules="[{ required: true }]"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-input v-model:value="formState.user.phone_number" />
			</a-form-item>
			<a-form-item
				:name="['user', 'interest']"
				label="What service are you interested in?"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				:rules="[{ required: true }]"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-input v-model:value="formState.user.interest" />
			</a-form-item>
		</div>
		<div
			class="form_top flex xs:flex-row md:flex-col lg:flex-col xl:flex-col xx:flex-row-reverse"
		>
			<a-form-item
				:name="['user', 'price']"
				label="Your Budget"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				:rules="[{ required: true }]"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-input v-model:value="formState.user.price" />
			</a-form-item>
			<a-form-item
				:name="['user', 'introduction']"
				label="Message"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<a-textarea v-model:value="formState.user.introduction" />
			</a-form-item>
		</div>
		<a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
			<button class="w-52 h-11 send mt-5 rounded-3xl font-bold text-base">
				Send Message
			</button>
		</a-form-item>
	</a-form>
</template>
<script setup>
import { reactive } from 'vue';
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
const formState = reactive({
	user: {
		name: '',
		phone_number: '+998 ',
		email: '',
		interest: '',
		price: 0,
	},
});
const onFinish = values => {
	console.log('Success:', values);
};
</script>
<style scoped>
/* .form {
	box-shadow: 0px 0px 1px black;
} */
.send {
	background: linear-gradient(to right, #d07e15, #ffc470);
}
</style>

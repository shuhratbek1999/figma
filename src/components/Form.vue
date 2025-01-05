<template>
	<a-form
		:model="formState"
		v-bind="layout"
		name="nest-messages"
		:validate-messages="validateMessages"
		@finish="onFinish"
		class="xx:w-full xx:ml-0 md:ml-0 lg:ml-0 xl:ml-0 xs:w-full md:w-101 lg:w-101 xl:w-101 p-5 md:min-h-98 lg:min-h-98 xl:min-h-98 bg-white xl:rounded-3xl lg:rounded-3xl xx:rounded-md form relative"
	>
		<div
			class="form_top flex xx:flex-row xs:flex-row md:flex-col lg:flex-col xl:flex-col"
		>
			<a-form-item
				:name="['user', 'name']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>Full name</span
					>
				</template>
				<a-input v-model:value="formState.user.name" />
			</a-form-item>

			<a-form-item
				:name="['user', 'Email']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>Email</span
					>
				</template>
				<a-input v-model:value="formState.user.email" />
			</a-form-item>
		</div>
		<div
			class="form_center flex xx:flex-row xs:flex-row md:flex-col lg:flex-col xl:flex-col"
		>
			<a-form-item
				:name="['user', 'phone_number']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>Phone number</span
					>
				</template>
				<a-input v-model:value="formState.user.phone_number" />
			</a-form-item>
			<a-form-item
				:name="['user', 'interest']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>What service are you interested in?</span
					>
				</template>
				<a-input v-model:value="formState.user.interest" />
			</a-form-item>
		</div>
		<div
			class="form_top flex xs:flex-row md:flex-col lg:flex-col xl:flex-col xx:flex-row-reverse"
		>
			<a-form-item
				:name="['user', 'price']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>Your budget</span
					>
				</template>
				<a-input v-model:value="formState.user.price" />
			</a-form-item>
			<a-form-item
				:name="['user', 'introduction']"
				:label-col="{ span: 24 }"
				:wrapper-col="{ span: 24 }"
				class="xx:w-1/2 xs:w-1/2 md:w-full lg:w-full xl:w-full my-0 xx:mx-1 xs:mx-1"
			>
				<template #label>
					<span
						class="custom-label xx:text-xx xs:text-xx md:text-base lg:text-base xl:text-base"
						>Message</span
					>
				</template>
				<a-textarea :rows="4" v-model:value="formState.user.introduction" />
			</a-form-item>
		</div>
		<a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 14 }">
			<button
				class="xx:absolute xx:w-24 xx:text-xx xx:h-7 xx:-top-14 xs:top-20 xs:text-xx xs:w-28 md:absolute md:-top-0 md:-bottom-6 md:right-28 md:w-52 md:h-11 lg:absolute lg:-top-0 lg:-bottom-6 lg:right-28 lg:w-52 lg:h-11 xl:absolute xl:-top-0 xl:-bottom-6 xl:right-28 xl:w-52 xl:h-11 send mt-5 rounded-3xl font-bold md:text-base lg:text-base xl:text-base"
			>
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
		phone_number: '',
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
.form {
	box-shadow: 0px 0px 20px rgb(214, 212, 212);
}
</style>

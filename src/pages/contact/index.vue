<template>
	<div class="about flex flex-col items-center">
		<Navbar :content="content" />
		<Contact />
		<Footer />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import aboutImg from '/img/aboutbg.png';
const content = ref({
	img: aboutImg,
});
</script>

<style lang="scss" scoped></style>

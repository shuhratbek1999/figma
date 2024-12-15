import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/about/index.vue';
import Contact from '../pages/contact/index.vue';
import Faqs from '../pages/faqs/index.vue';
import Home from '../pages/home/index.vue';
import Portfolio from '../pages/portfolio/index.vue';
import Project from '../pages/project/index.vue';
import Services from '../pages/services/index.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About Us',
		component: About,
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio,
	},
	{
		path: '/project',
		name: 'Project',
		component: Project,
	},
	{
		path: '/services',
		name: 'Services',
		component: Services,
	},
	{
		path: '/faqs',
		name: 'Faqs',
		component: Faqs,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = new createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition; // Bu foydalanuvchi "back" yoki "forward" tugmachasini bosganda o'sha joyga qaytaradi.
		} else {
			return { top: 0 }; // Har doim sahifaning eng yuqorisiga skroll qiladi.
		}
	},
});
export default router;

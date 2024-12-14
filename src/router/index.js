import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/about/index.vue';
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
];

const router = new createRouter({
	history: createWebHistory(),
	routes,
});
export default router;

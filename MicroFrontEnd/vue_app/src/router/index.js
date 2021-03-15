import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
const base = '/vue3/';
const router = createRouter({
    history: createWebHistory(base),
    routes
});

export default router;

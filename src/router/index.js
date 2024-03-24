import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import SolicitudesLista from '@/views/SolicitudesLista.vue';
import SolicitudDetalle from '@/views/SolicitudDetalle.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/solicitudes', name: 'SolicitudesLista', component: SolicitudesLista },
  { path: '/solicitudes/:id', name: 'SolicitudDetalle', component: SolicitudDetalle },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

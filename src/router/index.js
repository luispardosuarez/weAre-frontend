import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Login from '@/views/LoginView.vue';
import Register from '@/views/RegisterView.vue';
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
  history: createWebHistory('/'),
  routes
});

export default router;

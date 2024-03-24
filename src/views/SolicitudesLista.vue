<script setup>
import { onMounted, ref } from 'vue';
import SolicitudService from '@/services/SolicitudService';

const solicitudes = ref([]);

onMounted(async () => {
  try {
    const response = await SolicitudService.getAllSolicitudes();
    solicitudes.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
    <div>
      <h2>Solicitudes</h2>
      <ul>
        <li v-for="solicitud in solicitudes" :key="solicitud.id">
          {{ solicitud.nombre }} - <router-link :to="'/solicitud/' + solicitud.id">Ver Detalle</router-link>
        </li>
      </ul>
    </div>
  </template>
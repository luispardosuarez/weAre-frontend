<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SolicitudService from '@/service/SolicitudService';

const route = useRoute();
const solicitud = ref(null);

onMounted(async () => {
  try {
    const response = await SolicitudService.getSolicitudById(route.params.id);
    solicitud.value = response.data;
  } catch (error) {
    console.error('Error al cargar la solicitud:', error);
  }
});

</script>
<template>

  <div class="solicitud-detalle">
    <h2>Detalle de la Solicitud</h2>
    <div v-if="solicitud">
      <p><strong>Características:</strong> {{ solicitud.caracteristicas }}</p>
      <p><strong>Responsabilidades:</strong> {{ solicitud.responsabilidades }}</p>
      <p><strong>Requisitos:</strong> {{ solicitud.requisitos }}</p>
      <!-- Agrega más campos según tu modelo de datos -->
    </div>
    <div v-else>
      <p>Cargando detalles de la solicitud...</p>
    </div>
  </div>
</template>
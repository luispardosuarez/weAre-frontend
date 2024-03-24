<script setup>
import { ref } from 'vue';
import SolicitudService from '@/services/SolicitudService'; 

const solicitudes = ref([]);
const terminoBusqueda = ref(''); // Término de búsqueda

// Función para buscar solicitudes basadas en el término de búsqueda
const buscarSolicitudes = async () => {
  if (terminoBusqueda.value.trim()) {
    try {
      const response = await SolicitudService.getSolicitudesPorPosicion(terminoBusqueda.value);
      solicitudes.value = response.data;
    } catch (error) {
      console.error(error);
    }
  } else {
    // Si no hay término de búsqueda, se podría optar por no mostrar nada o traer todas las solicitudes
    solicitudes.value = [cargarTodasLasSolicitudes()];
  }
};

const cargarTodasLasSolicitudes = async () => {
  try {
    const response = await SolicitudService.getAllSolicitudes();
    solicitudes.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

// Descomentar si queremos cargar todas las solicitudes al montar el componente
// onMounted(cargarTodasLasSolicitudes);
</script>


<template>
  <div>
    <h2>Solicitudes</h2>
    <input v-model="terminoBusqueda" placeholder="Buscar por posición...">
    <button @click="buscarSolicitudes">Buscar</button>
    <ul>
      <li v-for="solicitud in solicitudes" :key="solicitud.id">
        {{ solicitud.nombre }} - <router-link :to="'/solicitud/' + solicitud.id">Ver Detalle</router-link>
      </li>
    </ul>
  </div>
</template>
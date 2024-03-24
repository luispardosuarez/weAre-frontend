<script setup>
// No hay necesidad de exportar 'name' en script setup
</script>


<template>
  <div class="home">
    <h1>Bienvenido a la Gestión de Solicitudes</h1>
    <p>Esta es una aplicación para manejar las solicitudes internas de la empresa.</p>
    <div class="links">
      <router-link to="/login">Iniciar Sesión</router-link> |
      <router-link to="/register">Registrarse</router-link> |
      <router-link to="/solicitudes">Ver Solicitudes</router-link>
    </div>
  </div>
</template>


<style scoped>
.home {
  text-align: center;
}

.links {
  margin-top: 20px;
}
</style>
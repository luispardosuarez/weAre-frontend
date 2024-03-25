<script setup>

  import AuthService from '@/services/AuthService'; 
  import { ref } from 'vue';

  const user = ref({
    username: '',
    email: '',
    password: '',
  });

  const register = async () => {
    try {
      await AuthService.register(user.value);
      $router.push('/login'); // Redireccionar al login tras un registro exitoso
      alert('Registro exitoso. Por favor, inicia sesión.');
    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Error durante el registro.');
    }
  };

</script>
<template>

  <div class="register">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="user.username" placeholder="Nombre de usuario" required />
      <input type="email" v-model="user.email" placeholder="Email" required />
      <input type="password" v-model="user.password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  </div>
  
</template>

<style scoped lang="scss">

</style>
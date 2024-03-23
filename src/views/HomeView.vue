<script setup>

  import AuthService from '@/services/AuthService';
  import { useRouter } from 'vue-router';

  const credentials = {
    username: '',
    password: '',
  };

  const router = useRouter();

  const login = async () => {
    try {
      const response = await AuthService.login(credentials);
      router.push('/solicitudes');
    } catch (error) {
      console.error(error);
    }
  };

</script>


<template>

  <main>
    <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="credentials.username" placeholder="Username" />
      <input type="password" v-model="credentials.password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
  </main>

</template>

<style scoped lang="scss">


</style>

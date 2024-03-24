<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/service/AuthService';

const router = useRouter();
const username = ref('');
const password = ref('');

const credentials = () => ({
  username: username.value,
  password: password.value,
});

const login = async () => {
  try {
    await AuthService.login(credentials());
    router.push('/solicitudes');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="credentials.username" placeholder="Username" />
      <input type="password" v-model="credentials.password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
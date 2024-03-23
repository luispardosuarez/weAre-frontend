<script setup>
  

  
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

<style >

</style>

<script setup>
const nombreUsuario = localStorage.getItem('user');

const logout = () => {
  AuthService.logout();
};
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo">
      <img src="../src/assets/img/logo_weAre-removebg-preview.png" alt="Logo weAre people software"> 
    </router-link>

    <div class="navbar-user">
      <span class="saludo">¡WeAre,!</span>
      <span class="nombre-usuario">{{ nombreUsuario }}</span>
      <button @click="logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="white" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" alt="Logout"/>
        </svg>
      </button>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped lang="scss">

  #app {
    .navbar {
      background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }

    .navbar-logo img {
      height: 60px; 
      margin-left: 17px;
    }

    .navbar-user {
      display: flex;
      align-items: center;
    }

    .saludo {
      font-size: 1.1rem;
      margin-right: 15px; 
    }

    .nombre-usuario {
      font-size: 1.5rem;
      font-weight: 600;
      margin-right: 10px; 
    }

    .navbar-user button {
      background: none;
      border: none;
      cursor: pointer;
    }

    .bi-person-lines-fill {
      margin-right: 20px;
    }
  }
  
</style>

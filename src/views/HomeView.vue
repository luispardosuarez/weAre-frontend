<script setup>


const logout = () => {
  AuthService.logout();
};
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo">
      <img src="../assets/img/logo_weAre-removebg-preview.png" alt="Logo weAre people software"> 
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

  <main>
    <div class="container">
 
      <div class="button-wrapper">
        <button class="custom-button">Gestión de Candidatos</button>
      </div>
      <div class="cards-container">
        <div class="card card1">
          <div class="card-body">
            <h4 class="card-title">Peticiones</h4>
          </div>
        </div>
        <div class="card card2">
          <div class="card-body">
            <h4 class="card-title">Candidate Persona</h4>
          </div>
        </div>
        <div class="card card3">
          <div class="card-body">
            <h4 class="card-title">Pruebas Técnicas</h4>
          </div>
        </div>
        <div class="card card4">
          <div class="card-body">
            <h4 class="card-title">Gestión de Procesos</h4>
          </div>
        </div>
        <div class="card card5">
          <div class="card-body">
            <h4 class="card-title">Redes Sociales</h4>
          </div>
        </div>
        <div class="card card6">
          <div class="card-body">
            <h4 class="card-title">Procesos Asíncronos</h4>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="copyright">
      <h7><span class="weare-text">weAre</span> people Software</h7>
    </div>
  </footer>

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
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .header {
      margin-right: auto;
    }

    .button-wrapper {
      margin-left: auto;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .custom-button {
      border: 1px solid #B64491;
      border-radius: 10px;
      background-color: transparent;
      color: #B64491;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      transition: background-color 0.3s, color 0.3s;
    }

    .custom-button:hover {
      background-color: #B64491;
      color: white;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .card {
      width: calc(33.33% - 40px);
      margin: 20px;
      height: 150px;
      border: 1px solid #ccc;
      border-radius: 10px;
      transition: background-color 0.3s, border-color 0.3s;
    }

    .card-body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .card-title {
      margin: 0;
    }

    .card1,
    .card4 {
      border-color: #E2552F;
      color: #E2552F;
    }

    .card2,
    .card5 {
      border-color: #DB3660;
      color: #DB3660;
    }

    .card3,
    .card6 {
      border-color: #CB3C82;
      color: #CB3C82;
    }

    .card:hover {
      background-color: transparent;
    }

    .card:hover .card-title {
      color: white;
    }

    .card1:hover,
    .card4:hover {
      background-color: #E2552F;
    }

    .card2:hover,
   .card5:hover {
     background-color: #DB3660;
    }

    .card3:hover,
    .card6:hover {
      background-color: #CB3C82;
    }

    .header h3 {
      margin: 0;
      color: #803F9A;
    }

    .we-highlight {
      color: #B64491;
    }

    @media only screen and (max-width: 600px) {
      .container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header,
      .button-wrapper {
        width: 100%;
        text-align: center;
      }

      .header h3 {
        margin: 0;
        margin-bottom: 10px;
      }

      .custom-button {
        width: calc(100% - 40px);
        border-width: 1px;
        box-sizing: border-box;
      }

      .card {
        width: calc(100% - 40px);
      }
    }
  }

  
  footer {
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 1.5%;


    .weare-text {
      font-size: 1.5rem;
    }
  }

</style>
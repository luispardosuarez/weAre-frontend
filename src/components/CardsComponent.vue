<script setup>
</script>

<template>

  <main>
    <div class="container">
      <div class="header">
        <h3>¡weAre, Luis!</h3>
      </div>
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

</template>

<style scoped lang="scss">

  
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

</style>
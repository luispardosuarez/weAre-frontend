<script setup>



</script>

<template>

  <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style="width: 185px;" alt="logo">
                    <h3 class="mt-1 mb-5 pb-1">
                      <span style="color: #E8642A;">weAre</span>
                      <span>&nbsp;</span>
                      <span style="color: #DB365B;">people</span>
                      <span>&nbsp;</span>
                      <span style="color: #C33F88;">software</span>
                    </h3>
                  </div>
  
                  <form>
                    <p class="mb-3" style="margin-bottom: 0.8rem;">Please login to your account</p>
  
                    <div class="form-outline mb-2">
                      <input type="text" id="form2Example11" class="form-control"
                        placeholder="Username" />
                      <label class="form-label" for="form2Example11">Username</label>
                    </div>
  
                    <div class="form-outline mb-2">
                      <input type="password" id="form2Example22" class="form-control" />
                      <label class="form-label" for="form2Example22">Password</label>
                    </div>
  
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                        in</button>
                        <br>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>
                  </form>
  
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h1 class="mb-4" style="color: #7F3E99; font-size: 3.9rem; text-align: center;">weAre</h1>
                  <p class="small mb-0" style="text-align: center; font-size: 1.3rem;">beyond people, beyond software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped lang="scss">

  section {
    .gradient-custom-2 {
      background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    }

    .form-outline {
      margin-bottom: 0.5rem; 
    }

    .card-body {
      margin-bottom: 1.5rem; 
    }

    @media (min-width: 768px) {
      .gradient-form {
        height: 100vh !important;
      }
    }

    @media (min-width: 769px) {
      .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
      }
    }
  }

</style>

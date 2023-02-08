<template>
  <div class="lockscreen account-page" style="height: 100vh;">
   <!-- Main Wrapper -->
        <div class="main-wrapper">
      <div class="account-content">
        <div class="container">
        
          <!-- Account Logo -->
          <div class="account-logo">
            <router-link to="/index"><img src="../../../../assets/img/logo2.png" alt="Dreamguy's Technologies"></router-link>
          </div>
          <!-- /Account Logo -->
          
          <div class="account-box">
            <div class="account-wrapper">

              <!-- Lock User Img -->
              <div class="lock-user">
                <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg" class="rounded-circle">
                <h4>John Doe</h4>
              </div>
              <!-- /Lock User Img -->
              
              <!-- Account Form -->
              <form action="/index">
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password">
                </div>
                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit">Enter</button>
                </div>
                <div class="account-footer">
                  <p>Sign in as a different user? <router-link to="/register">Login</router-link></p>
                </div>
              </form>
              <!-- /Account Form -->
              
            </div>
          </div>
        </div>
      </div>
        </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
    },
    name: 'lockscreen'
  }
</Script>
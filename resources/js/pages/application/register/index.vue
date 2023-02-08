<template>
  <div class="register account-page" style="height: 100vh;">
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
              <h3 class="account-title">Register</h3>
              <p class="account-subtitle">Access to our dashboard</p>

              <!-- Account Form -->
              <Form class="register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="form-group">
                  <label>Email</label> <span class="text-danger">*</span>
                  <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                  <div class="invalid-feedback">{{errors.email}}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group password-icon2">
                  <label>Password</label> <span class="text-danger">*</span>
                  <Field name="password" type="password" class="form-control pass-input" :class="{ 'is-invalid': errors.password }" />
                  <div class="invalid-feedback">{{errors.password}}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="form-group password-icon2">
                  <label>Repeat Password</label> <span class="text-danger">*</span>
                  <Field name="confirmpassword" type="password" class="form-control pass-input" :class="{ 'is-invalid': errors.confirmpassword }" />
                  <div class="invalid-feedback">{{errors.confirmpassword}}</div>
                  <div class="emailshow text-danger" id="confirmpassword"></div>
                </div>

                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit">Register</button>
                </div>
                <div class="account-footer">
                  <p>Already have an account? <router-link to="/">Login</router-link></p>
                </div>
              </Form>
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
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Form, Field } from 'vee-validate';
import { router } from '../../../router';
import VueRouter from 'vue-router'
import * as Yup from 'yup';
export default {
  components: {
        Form,
        Field,
    },
setup() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Confirm password is required'),
        });
      const onSubmit = (values) => {
      if(values.password === values.confirmpassword) {
      let Rawdata = localStorage.getItem('storedData');
      let Pdata= [];
      Pdata = JSON.parse(Rawdata);
       const Eresult = Pdata.find(({ email }) => email == values.email);
       if(Eresult){
        document.getElementById("email").innerHTML = "This email are already exist"
       } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push('/index')
          localStorage.setItem('storedData', jsonData);
        }
      }  else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching"
      }
    };
        return {
            schema,
            onSubmit
        };

    }


}
</script>
<style>
</style>

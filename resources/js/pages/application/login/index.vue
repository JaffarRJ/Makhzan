<template>
    <div class="login account-page" style="height:100vh !important;">
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
                            <h3 class="account-title">Login</h3>
                            <p class="account-subtitle">Access to our dashboard</p>
                            <!-- Account Form -->
<!--                            @submit="onSubmit"-->
                            <Form class="login" @submit="login" :validation-schema="schema" v-slot="{ errors }">
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <Field name="email" type="text"  v-model="setlogin.email" class="form-control" :class="{ 'is-invalid': errors.email }" />
                                    <div class="invalid-feedback">{{errors.email}}</div>
                                    <div class="emailshow text-danger" id="email"></div>
                                </div>
                                <div class="form-group password-icon">
                                    <div class="row">
                                        <div class="col">
                                            <label>Password</label>
                                        </div>
                                        <div class="col-auto">
                                            <router-link class="text-muted" to="/forgot-password">
                                                Forgot password?
                                            </router-link>
                                        </div>
                                    </div>
                                    <Field name="password" type="password" v-model="setlogin.password" class="form-control pass-input" :class="{ 'is-invalid': errors.password }" /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                                    <div class="invalid-feedback">{{errors.password}}</div>
                                    <div class="emailshow text-danger" id="password"></div>
                                </div>
                                <div class="form-group text-center">
                                    <button class="btn btn-primary account-btn" type="submit" value="Login">Login</button>
                                </div>
                                <div class="account-footer">
                                    <p>Don't have an account yet? <router-link to="/register">Register</router-link></p>
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
    import { ref } from 'vue';
    import { router } from '../../../router';
    import VueRouter from 'vue-router';
    import { useStore } from 'vuex';
    import { Form, Field } from 'vee-validate';
    import axios from 'axios';

    import * as Yup from 'yup';
    export default {
        data() {
            return {
                setlogin: {
                    email: null,
                    password: null,
                    has_error: false
                }
            }
        },

        mounted() {
            if($('.toggle-password').length > 0) {
                $(document).on('click', '.toggle-password', function() {
                    $(this).toggleClass("fa-eye fa-eye-slash");
                    var input = $(".pass-input");
                    if (input.attr("type") == "password") {
                        input.attr("type", "text");
                    } else {
                        input.attr("type", "password");
                    }
                });
            }
        },
        methods: {
            async login() {
                let users = localStorage.getItem('storedData');
                if (users === null) {
                    let password = this.setlogin;
                    const jsonData = JSON.stringify(password);
                    localStorage.setItem('storedData', jsonData);
                }
                await this.axios.post('/api/auth/login', this.setlogin).then(response => {
                    let resposneData = response.data;
                    console.log(resposneData)
                    console.log(resposneData.data.token)
                    if(resposneData.success === true) {
                        localStorage.setItem('token', resposneData.data.token);
                        router.push('/index')
                        } else {
                            document.getElementById("password").innerHTML = resposneData.message;
                        }
                        // this.$router.push({name: "index"})
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        components: {
            Form,
            Field,
        }
    }
</script>
<!--<script>-->
<!--    import { ref } from 'vue'-->
<!--    import { router } from '../../../router';-->
<!--    import VueRouter from 'vue-router'-->
<!--    import { useStore } from 'vuex'-->
<!--    import { Form, Field } from 'vee-validate';-->
<!--    import * as Yup from 'yup';-->
<!--    export default {-->
<!--        components: {-->
<!--            Form,-->
<!--            Field,-->
<!--        },-->
<!--        mounted() {-->
<!--            if($('.toggle-password').length > 0) {-->
<!--                $(document).on('click', '.toggle-password', function() {-->
<!--                    $(this).toggleClass("fa-eye fa-eye-slash");-->
<!--                    var input = $(".pass-input");-->
<!--                    if (input.attr("type") == "password") {-->
<!--                        input.attr("type", "text");-->
<!--                    } else {-->
<!--                        input.attr("type", "password");-->
<!--                    }-->
<!--                });-->
<!--            }-->
<!--        },-->
<!--        setup() {-->
<!--            let users = localStorage.getItem('storedData');-->
<!--            if (users === null) {-->
<!--                let password = [-->
<!--                    {-->
<!--                        email: 'admin@dreamguys.in',-->
<!--                        password: '123456',-->
<!--                    },-->
<!--                ];-->
<!--                const jsonData = JSON.stringify(password);-->
<!--                localStorage.setItem('storedData', jsonData);-->
<!--            }-->
<!--            const schema = Yup.object().shape({-->
<!--                email: Yup.string()-->
<!--                    .required('Email is required')-->
<!--                    .email('Email is invalid'),-->
<!--                password: Yup.string()-->
<!--                    .min(6, 'Password must be at least 6 characters')-->
<!--                    .required('Password is required'),-->
<!--            });-->
<!--            const onSubmit = (values) => {-->
<!--                document.getElementById("email").innerHTML = ""-->
<!--                document.getElementById("password").innerHTML = ""-->
<!--                let data = localStorage.getItem('storedData');-->
<!--                var Pdata= JSON.parse(data)-->
<!--                const Eresult= Pdata.find(({ email }) => email === values.email);-->
<!--                if (Eresult) {-->
<!--                    if (Eresult.password === values.password) {-->
<!--                        router.push('/index')-->
<!--                    } else {-->
<!--                        document.getElementById("password").innerHTML = "Incorrect password"-->
<!--                    }-->
<!--                } else {-->
<!--                    document.getElementById("email").innerHTML = "Email is not valid"-->
<!--                }-->
<!--            };-->
<!--            return {-->
<!--                schema,-->
<!--                onSubmit,-->
<!--            };-->

<!--        }-->


<!--    }-->
<!--</script>-->
<style>
</style>

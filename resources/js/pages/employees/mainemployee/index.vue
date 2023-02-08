<template>
    <div class="employees">
        <div class="main-wrapper">
            <main-header></main-header>
            <sidebar></sidebar>
            <!-- Page Wrapper -->
            <div class="page-wrapper">

                <!-- Page Content -->
                <div class="content container-fluid">

                    <employeeheader/>

                    <employeefilter/>

                    <employeecontent :employees='employees'/>
                </div>
                <!-- /Page Content -->

                <!-- Passing function as a prop -->
                <employeemodal :function_reload_employees="reload_employees"/>

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'

export default {
    data() {
        const getEmployees = async () => {
            let response = await axios.get('api/employees')
            this.employees = response.data;
            console.log(response.data);
            console.log(this.employees);
        };
        onMounted(getEmployees);
        return {
            employees: [],
        }
    },
    methods: {
        reload_employees(res) {
            // this for redirecting to any other vue js route
//					this.$router.push('/employees');

            axios.get('api/employees').then(response => {
                this.employees = response.data;
            })

            console.log('end');
        }
    },
    mounted() {

    },
    name: 'employees'
}
</Script>

<template>
<div class="card">
            <div class="card-body">
              <!-- <h4 class="card-title">Solid justified</h4> -->
              <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                <li class="nav-item"><router-link class="nav-link" to="/user-dashboard">Dashboard</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/user-all-jobs">All </router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/saved-jobs">Saved</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/applied-jobs">Applied</router-link></li>
                <li class="nav-item"><router-link v-bind:class="{'active': currentPath == 'job-aptitude'}" class="nav-link" to="/interviewing">Interviewing</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/offered-jobs">Offered</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/visited-jobs">Visitied </router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/archived-jobs">Archived </router-link></li>
              </ul>
            </div>
          </div> 
</template>
  <script>  
    export default {
      components: {
    },
    mounted() {
    },
      computed: {
        currentPath() {
            return this.$route.name;
        }
      },
    data() {
       return {
                activeClass: 'active',
            };
              //  isactive : true
    },
          }
         
          </script>
          <style>
        .sidebar-menu li a.active {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
}
      </style>
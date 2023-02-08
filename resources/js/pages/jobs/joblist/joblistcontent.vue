<template>
  <div class="row">
            <div class="col-md-6" v-for="item in joblist" :key="item.id">
              <router-link class="job-list" to="/job-view">
                <div class="job-list-det">
                  <div class="job-list-desc">
                    <h3 class="job-list-title">{{item.title}}</h3>
                    <h4 class="job-department">{{item.job}}</h4>
                  </div>
                  <div class="job-type-info">
                    <span class="job-types">{{item.worktype}}</span>
                  </div>
                </div>
                <div class="job-list-footer">
                  <ul>
                    <li><i class="fa fa-map-signs"></i> {{item.city}}</li>
                    <li><i class="fa fa-money"></i> {{item.rate}}</li>
                    <li><i class="fa fa-clock-o"></i> {{item.date}}</li>
                  </ul>
                </div>
              </router-link>
            </div>
  </div>
</template>
<script>
  import joblist from '../../../../assets/json/joblist.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    joblist: joblist
    }
    },
    components: {
   
    },
  }
</Script>
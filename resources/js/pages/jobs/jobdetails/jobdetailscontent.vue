<template>
<div class="job-content job-widget" v-for="item in jobdetaildescribe" :key="item.id">
                <div class="job-desc-title"><h4>{{item.jobtitle}}</h4></div>
                <div class="job-description">
                  <p>{{item.jobcontent}}</p>
                </div>
</div>

</template>
<script>
  import jobdetaildescribe from '../../../../assets/json/jobdetaildescribe.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobdetaildescribe: jobdetaildescribe
    }
    },
    components: {
   
    },
  }
</Script>
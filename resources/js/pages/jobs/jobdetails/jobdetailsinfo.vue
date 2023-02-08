<template>

<div class="job-info job-widget" v-for="item in jobdetailcontent" :key="item.id">
                <h3 class="job-title">{{item.title}}</h3>
                <span class="job-dept">{{item.title1}}</span>
                <ul class="job-post-det">
                  <li><i class="fa fa-calendar"></i> {{item.date}} <span class="text-blue">{{item.datedetail}}</span></li>
                  <li><i class="fa fa-calendar"></i> {{item.date1}} <span class="text-blue">{{item.datedetail1}}</span></li>
                  <li><i class="fa fa-user-o"></i> {{item.exp}} <span class="text-blue">{{item.expno}}</span></li>
                  <li><i class="fa fa-eye"></i> {{item.view}} <span class="text-blue">{{item.viewno}}</span></li>
                </ul>
              </div>
</template>
<script>
  import jobdetailcontent from '../../../../assets/json/jobdetailcontent.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobdetailcontent: jobdetailcontent
    }
    },
    components: {
   
    },
  }
</Script>
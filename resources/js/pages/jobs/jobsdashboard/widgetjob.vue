<template>
<div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" v-for="item in jobdashwidget" :key="item.id">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="fa fa-briefcase"></i></span>
                  <div class="dash-widget-info">
                    <h3>{{item.no}}</h3>
                    <span>{{item.jobtype}}</span>
                  </div>
                </div>
              </div>
            </div>
</div>
</template>
<script>
  import jobdashwidget from '../../../../assets/json/jobdashwidget.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobdashwidget: jobdashwidget
    }
    },
    components: {
   
    },
  }
</Script>
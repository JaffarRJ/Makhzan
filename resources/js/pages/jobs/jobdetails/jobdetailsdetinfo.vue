<template>

<div class="job-det-info job-widget" v-for="item in jobdetailinfo" :key="item.id">
                <a class="btn job-btn" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_job">Edit</a>
                <div class="info-list">
                  <span><i class="fa fa-bar-chart"></i></span>
                  <h5>{{item.type}}</h5>
                  <p>{{item.typedetail}}</p>
                </div>
                <div class="info-list">
                  <span><i class="fa fa-money"></i></span>
                  <h5>{{item.sal}}</h5>
                  <p>{{item.saldetail}}</p>
                </div>
                <div class="info-list">
                  <span><i class="fa fa-suitcase"></i></span>
                  <h5>{{item.exp}}</h5>
                  <p>{{item.expdetail}}</p>
                </div>
                
                <div class="info-list">
                  <span><i class="fa fa-ticket"></i></span>
                  <h5>{{item.vaccany}}</h5>
                  <p>{{item.vacancydetail}}</p>
                </div>
                <div class="info-list">
                  <span><i class="fa fa-map-signs"></i></span>
                  <h5>{{item.loc}}</h5>
                  <p> {{item.locdetail}}
                  <br> {{item.locadd}},
                  <br> {{item.locplace}},
                  <br> {{item.locplace1}}</p>
                </div>
                <div class="info-list">
                  <p class="text-truncate"> {{item.pho}}
                  <br> <a href="mailto:danielporter@example.com" title="danielporter@example.com">{{item.mail}}</a>
                  <br> <a href="https://www.example.com" target="_blank" title="https://www.example.com">{{item.website}}</a>
                  </p>
                </div>
                <div class="info-list text-center">
                  <a class="app-ends" href="javascript:void(0)">{{item.websitedesc}}</a>
                </div>
              </div>
</template>
<script>
  import jobdetailinfo from '../../../../assets/json/jobdetailinfo.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobdetailinfo: jobdetailinfo
    }
    },
    components: {
   
    },
  }
</Script>
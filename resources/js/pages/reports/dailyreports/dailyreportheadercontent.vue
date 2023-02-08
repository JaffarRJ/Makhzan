<template>
<div class="row justify-content-center">

              <div class="col-md-3 col-sm-6" v-for="item in dailyreport" :key="item.id">
                <div class="card">
                  <div class="card-body text-center">
                    <h3><b>{{item.no}}</b></h3>
                    <p>{{item.description}}</p>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import dailyreport from '../../../../assets/json/dailyreport.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      dailyreport: dailyreport
    }
    },
    components: {
    }
  }
</Script>
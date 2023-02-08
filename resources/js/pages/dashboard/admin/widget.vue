<template>
<div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" v-for="item in adminwidget" :key="item.id">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="fa fa-cubes"></i></span>
                  <div class="dash-widget-info">
                    <h3>{{item.no}}</h3>
                    <span>{{item.name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import adminwidget from '../../../../assets/json/adminwidget.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      adminwidget: adminwidget
    }
    },
    components: {
    },
  }
</Script>
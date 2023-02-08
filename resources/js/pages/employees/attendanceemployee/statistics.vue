<template>
 <div class="col-md-4">
              <div class="card att-statistics">
                <div class="card-body">
                  <h5 class="card-title">Statistics</h5>
                  <div class="stats-list">
                    <div class="stats-info" v-for="item in statisticsattendance" :key="item.id">
                      <p>{{item.day}} <strong>{{item.hours}} <small>{{item.hours1}}</small></strong></p>
                      <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 31%" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import statisticsattendance from '../../../../assets/json/statisticsattendance.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      statisticsattendance: statisticsattendance
    }
  }
  }
</Script>
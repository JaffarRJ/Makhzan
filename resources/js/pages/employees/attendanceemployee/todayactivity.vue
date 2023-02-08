<template>
 <div class="col-md-4">
              <div class="card recent-activity">
                <div class="card-body">
                  <h5 class="card-title">Today Activity</h5>
                  <ul class="res-activity-list">
                    <li v-for="item in attendanceactivity" :key="item.id">
                      <p class="mb-0">{{item.in}}</p>
                      <p class="res-activity-time">
                        <i class="fa fa-clock-o"></i>
                        {{item.time}}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
</template>
<script>
import attendanceactivity from '../../../../assets/json/attendanceactivity.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      attendanceactivity: attendanceactivity
    }
  }
  }
</Script>
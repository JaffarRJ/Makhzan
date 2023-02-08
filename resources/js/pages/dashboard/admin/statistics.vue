<template>
<div class="row">

            <div class="col-md-12 col-lg-12 col-xl-4 d-flex">
              <div class="card flex-fill dash-statistics">
                <div class="card-body">
                  <h5 class="card-title">Statistics</h5>
                  <div class="stats-list">
                    <div class="stats-info" v-for="item in adminstatistic" :key="item.id">
                      <p>{{item.leave}} <strong>{{item.percent}} <small>{{item.percent1}}</small></strong></p>
                      <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 31%" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h4 class="card-title">Task Statistics</h4>
                  <div class="statistics">
                    <div class="row">
                      <div class="col-md-6 col-6 text-center">
                        <div class="stats-box mb-4">
                          <p>Total Tasks</p>
                          <h3>385</h3>
                        </div>
                      </div>
                      <div class="col-md-6 col-6 text-center">
                        <div class="stats-box mb-4">
                          <p>Overdue Tasks</p>
                          <h3>19</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-purple" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 22%" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">22%</div>
                    <div class="progress-bar bg-success" role="progressbar" style="width: 24%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">24%</div>
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 26%" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">21%</div>
                    <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">10%</div>
                  </div>
                  <div>
                    <p><i class="fa fa-dot-circle-o text-purple me-2"></i>Completed Tasks <span class="float-end">166</span></p>
                    <p><i class="fa fa-dot-circle-o text-warning me-2"></i>Inprogress Tasks <span class="float-end">115</span></p>
                    <p><i class="fa fa-dot-circle-o text-success me-2"></i>On Hold Tasks <span class="float-end">31</span></p>
                    <p><i class="fa fa-dot-circle-o text-danger me-2"></i>Pending Tasks <span class="float-end">47</span></p>
                    <p class="mb-0"><i class="fa fa-dot-circle-o text-info me-2"></i>Review Tasks <span class="float-end">5</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h4 class="card-title">Today Absent <span class="badge bg-inverse-danger ms-2">5</span></h4>
                  <div class="leave-info-box" v-for="item in adminstatistic1" :key="item.id">
                    <div class="media d-flex align-items-center">
                      <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/user.jpg"></router-link>
                      <div class="media-body flex-grow-1">
                        <div class="text-sm my-0">{{item.name}}</div>
                      </div>
                    </div>
                    <div class="row align-items-center mt-3">
                      <div class="col-6">
                        <h6 class="mb-0">{{item.date}}</h6>
                        <span class="text-sm text-muted">{{item.leave}}</span>
                      </div>
                      <div class="col-6 text-end">
                        <span class="badge bg-inverse-danger">{{item.status}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="load-more text-center">
                    <a class="text-dark" href="javascript:void(0);">Load More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import adminstatistic from '../../../../assets/json/adminstatistic.json';
import adminstatistic1 from '../../../../assets/json/adminstatistic1.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      adminstatistic: adminstatistic,
      adminstatistic1: adminstatistic1
    }
    },
    components: {
    },
  }
</Script>
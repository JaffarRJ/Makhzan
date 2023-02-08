<template>

<div class="row">
            <div class="col-md-12">
              <div class="card card-table">
                <div class="card-header">
                  <h3 class="card-title mb-0">Shortlist Candidates</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-nowrap custom-table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Job Title</th>
                          <th>Departments</th>
                          <th class="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in jobdashshortlist" :key="item.id">
                          <td>
                            {{item.no}}
                          </td>
                          <td>
                            <h2 class="table-avatar">
                              <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                              <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                            </h2>
                          </td>
                          <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                          <td>{{item.department}}</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0)">
                                <i class="fa fa-dot-circle-o text-danger"></i>{{item.status}}
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import jobdashshortlist from '../../../../assets/json/jobdashshortlist.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      jobdashshortlist: jobdashshortlist
    }
    },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>
<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="scheduletable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>User Available Timings</th>
                      <th class="text-center">Schedule timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe <span>Web Designer</span></router-link>
                        </h2>
                      </td>
                      <td><router-link to="/job-details">Web Developer</router-link></td>
                      <td><b>11-03-2020</b> - 11:00 AM-12:00 PM<br><b>12-03-2020</b> - 10:00 AM-11:00 AM<br><b>01-01-1970</b> - 10:00 AM-11:00 AM<br> </td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#edit_job" href="javascript:void(0)">
                            Schedule Time
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></router-link>
                          <router-link to="/profile">Richard Miles <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td><router-link to="/job-details">Web Designer</router-link></td>
                      <td><b>11-03-2020</b> - 11:00 AM-12:00 PM<br><b>12-03-2020</b> - 10:00 AM-11:00 AM<br><b>01-01-1970</b> - 10:00 AM-11:00 AM<br> </td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#edit_job" href="javascript:void(0)">
                            Schedule Time
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#scheduletable')
    },
    name: 'activities'
  }
</Script>
<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="dailyreports">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Department</th>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in dailyreporttable" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.no1}}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.date}}</td>
                      <td>{{item.department}}</td>
                      <td class="text-center">
                        <button class="btn btn-outline-info btn-sm">{{item.status}}</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import dailyreporttable from '../../../../assets/json/dailyreporttable.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      dailyreporttable: dailyreporttable
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#dailyreports')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'activities'
  }
</Script>
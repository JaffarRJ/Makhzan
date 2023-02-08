<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="payslipcontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Employee Name</th>
                      <th>Paid Amount</th>
                      <th>Payment Month</th>
                      <th>Payment Year</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in payslipreport" :key="item.id">
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.job}}</span></router-link>
                        </h2>
                      </td>
                      <td>$200</td>
                      <td>Apr</td>
                      <td>2019</td>
                      <td class="text-center"> <a href="javascript:void(0)" class="btn btn-sm btn-primary">PDF</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import payslipreport from '../../../../assets/json/payslipreport.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      payslipreport: payslipreport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#payslipcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>
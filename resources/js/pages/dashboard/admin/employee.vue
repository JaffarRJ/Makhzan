<template>
<div class="row">
            <div class="col-md-12">
              <div class="card-group m-b-30">
                <div class="card" v-for="item in adminemployee" :key="item.id">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-3">
                      <div>
                        <span class="d-block">{{item.new}}</span>
                      </div>
                      <div>
                        <span class="text-success">{{item.percent}}</span>
                      </div>
                    </div>
                    <h3 class="mb-3">{{item.newno}}</h3>
                    <div class="progress mb-2" style="height: 5px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 70%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mb-0">{{item.describe}}</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
</template>
<script>
import adminemployee from '../../../../assets/json/adminemployee.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      adminemployee: adminemployee
    }
    },
    components: {
    },
  }
</Script>
<template>

<div class="col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <h3 class="card-title text-center">Latest Jobs</h3>
                      <ul class="list-group" v-for="item in latestjobdash" :key="item.id">
                          <li class="list-group-item list-group-item-action">{{item.job}} <span class="float-end text-sm text-muted">{{item.hour}}</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
</template>
<script>
  import latestjobdash from '../../../../assets/json/latestjobdash.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    latestjobdash: latestjobdash
    }
    },
    components: {
   
    },
  }
</Script>
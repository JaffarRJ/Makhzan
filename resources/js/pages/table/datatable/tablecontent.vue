<template>
<div class="table-responsive">
                    <table class="datatable table table-stripped mb-0" id="datatablecontent">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in datatable" :key="item.id"> 
                          <td>{{item.name}}</td>
                          <td>{{item.position}}</td>
                          <td>{{item.office}}</td>
                          <td>{{item.age}}</td>
                          <td>{{item.salary}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
</template>
<script>
import datatable from '../../../../assets/json/datatable.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      datatable: datatable
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#datatablecontent')
    },
    name: 'activities'
  }
</Script>
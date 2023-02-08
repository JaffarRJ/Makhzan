<template>
  <div class="attendanceemployee">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
        <div class="page-wrapper">
        <div class="content container-fluid">
        
        <attendemployeeheader />

          <div class="row">
          <timesheet />
          <statistics1 />
          <todayactivity />
          </div>
          <attendempfilter />
           <div class="row">
          <div class="col-lg-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date </th>
                      <th>Punch In</th>
                      <th>Punch Out</th>
                      <th>Production</th>
                      <th>Break</th>
                      <th>Overtime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in attendancetable" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.date}}</td>
                      <td>{{item.punchin}}</td>
                      <td>{{item.punchout}}</td>
                      <td>{{item.production}}</td>
                      <td>{{item.break}}</td>
                      <td>{{item.overtime}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import attendancetable from '../../../../assets/json/attendancetable.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      attendancetable: attendancetable
    }
  },
    components: {
   
    },
    mounted() {

    },
    name: 'attendanceemployee'
  }
</Script>
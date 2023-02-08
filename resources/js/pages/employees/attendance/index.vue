<template>
  <div class="attendance">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>

            <!-- Page Wrapper -->
            <div class="page-wrapper">
            <div class="content container-fluid">
            <attendanceheader />
            <attendancefilter />
              <div class="row">
              <div class="col-lg-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                      <th>11</th>
                      <th>12</th>
                      <th>13</th>
                      <th>14</th>
                      <th>15</th>
                      <th>16</th>
                      <th>17</th>
                      <th>18</th>
                      <th>19</th>
                      <th>20</th>
                      <th>22</th>
                      <th>23</th>
                      <th>24</th>
                      <th>25</th>
                      <th>26</th>
                      <th>27</th>
                      <th>28</th>
                      <th>29</th>
                      <th>30</th>
                      <th>31</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in attendance" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link class="avatar avatar-xs" to="/profile"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}}</router-link>
                        </h2>
                      </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td>
                        <div class="half-day">
                          <span class="first-off"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></span> 
                        </div>
                      </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td>
                        <div class="half-day">
                          <span class="first-off"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></span>
                        </div>
                      </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><i class="fa fa-close text-danger"></i> </td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                      <td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#attendance_info"><i class="fa fa-check text-success"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              </div>
              </div>
             <!-- /Page Content -->
              <attendancemodal />
            </div>
      <!-- Page Wrapper -->
    </div>
  </div>
</template>
<script>
 import attendance from '../../../../assets/json/attendance.json';
 const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      attendance: attendance
    }
    },
    components: {
   
    },
    mounted() {

    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'attendance'
  }
</Script>
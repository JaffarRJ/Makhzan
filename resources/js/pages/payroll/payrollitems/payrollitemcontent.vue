<template>

  <!-- Tab Content -->
          <div class="tab-content">
          
            <!-- Additions Tab -->
            <div class="tab-pane show active" id="tab_additions">
            
              <!-- Add Addition Button -->
              <div class="text-end mb-4 clearfix">
                <button class="btn btn-primary add-btn" type="button" data-bs-toggle="modal" data-bs-target="#add_addition"><i class="fa fa-plus"></i> Add Addition</button>
              </div>
              <!-- /Add Addition Button -->

              <!-- Payroll Additions Table -->
              <div class="payroll-table card">
                <div class="table-responsive">
                  <table class="table table-hover table-radius">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Default/Unit Amount</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in payrolladd" :key="item.id">
                        <th>{{item.name}}</th>
                        <td>{{item.category}}</td>
                        <td>{{item.default}}</td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_addition"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_addition"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /Payroll Additions Table -->
              
            </div>
            <!-- Additions Tab -->
            
            <!-- Overtime Tab -->
            <div class="tab-pane" id="tab_overtime">
            
              <!-- Add Overtime Button -->
              <div class="text-end mb-4 clearfix">
                <button class="btn btn-primary add-btn" type="button" data-bs-toggle="modal" data-bs-target="#add_overtime"><i class="fa fa-plus"></i> Add Overtime</button>
              </div>
              <!-- /Add Overtime Button -->

              <!-- Payroll Overtime Table -->
              <div class="payroll-table card">
                <div class="table-responsive">
                  <table class="table table-hover table-radius">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Rate</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in payrollovertime" :key="item.id">
                        <th>{{item.name}}</th>
                        <td>{{item.rate}}</td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_overtime"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_overtime"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /Payroll Overtime Table -->
              
            </div>
            <!-- /Overtime Tab -->
            
            <!-- Deductions Tab -->
            <div class="tab-pane" id="tab_deductions">
            
              <!-- Add Deductions Button -->
              <div class="text-end mb-4 clearfix">
                <button class="btn btn-primary add-btn" type="button" data-bs-toggle="modal" data-bs-target="#add_deduction"><i class="fa fa-plus"></i> Add Deduction</button>
              </div>
              <!-- /Add Deductions Button -->

              <!-- Payroll Deduction Table -->
              <div class="payroll-table card">
                <div class="table-responsive">
                  <table class="table table-hover table-radius">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Default/Unit Amount</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in payrolldeduction" :key="item.id">
                        <th>{{item.name}}</th>
                        <td>{{item.category}}</td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_deduction"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_deduction"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- /Payroll Deduction Table -->
              
            </div>
            <!-- /Deductions Tab -->
            
          </div>
          <!-- Tab Content -->
</template>
<script>
import payrolladd from '../../../../assets/json/payrolladd.json';
import payrollovertime from '../../../../assets/json/payrollovertime.json'
import payrolldeduction from '../../../../assets/json/payrolldeduction.json'
  import Vue from 'vue'
  export default {
    data() {
    return {
      payrolladd: payrolladd,
      payrollovertime: payrollovertime,
      payrolldeduction: payrolldeduction
    }
    },
    components: {
    }
  }
</Script>
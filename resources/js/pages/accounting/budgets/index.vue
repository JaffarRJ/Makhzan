<template>
  <div class="budgets">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                
                <budgetheader />  
                    
                <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Budget No</th>
                                            <th>Budget Title</th>
                                            <th>Budget Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Revenue</th>
                                            <th>Total Expenses</th>
                                            <th>Tax Amount</th>
                                            <th>Budget Amount</th>
                                            <th class="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in budgets" :key="item.id">
                                            <td>{{item.budgetno}}</td>
                                            <td>{{item.budgettitle}}</td>
                                            <td>{{item.budgettype}}</td>
                                            <td>{{item.startdate}}</td>
                                            <td>{{item.enddate}}</td>
                                            <td>{{item.totalrevenue}}</td>
                                            <td>{{item.totalexpenses}}</td>
                                            <td>{{item.taxamount}}</td>
                                            <td>{{item.budgetamount}}</td>
                                            <td class="text-end">
                                                <div class="dropdown dropdown-action">
                                                    <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_categories"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
           </div>
        <!-- /Page Content -->
                
       <budgetmodal />

      </div>
    <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import budgets from '../../../../assets/json/budgets.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      budgets: budgets
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'budgets'
  }
</Script>
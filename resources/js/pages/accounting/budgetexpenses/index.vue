<template>
  <div class="budgetexpenses">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <budgetexpenseheader /> 
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Notes</th>                    
                      <th>Category Name</th>
                      <th>SubCategory Name</th>
                      <th>Amount</th>
                      <th>Revenue Date</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in budgetexpenses" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.notes}}</td>
                      <td>{{item.categoryname}}</td>
                      <td>{{item.subcategoryname}}</td>
                      <td>{{item.amount}}</td>
                      <td>{{item.revenuedate}}</td>
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

        <budgetexpensemodal />

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import budgetexpenses from '../../../../assets/json/budgetexpenses.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      budgetexpenses: budgetexpenses,
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'budgetexpenses'
  }
</Script>
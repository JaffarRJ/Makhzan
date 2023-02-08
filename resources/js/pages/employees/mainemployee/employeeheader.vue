<template>
 <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Employee</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Employee</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_employee"><i class="fa fa-plus"></i> Add Employee</a>
                  <form action="/api/import/employee" class="d-inline" id="employeeImport" method="POST" enctype="multipart/form-data">
                      <input id="fileUpload" name="file" type="file" accept=".xls,.xlsx" hidden>
                      <a href="javascript:void(0)" @click="chooseFiles()" class="btn add-btn float-end mx-1" ><i class="fa fa-plus"></i> Import Employees</a>
                  </form>
                  <form action="/api/export/employee" class="d-inline" id="employeeExport" method="GET" enctype="multipart/form-data">
                    <a href="javascript:void(0)" @click="exportEmployee()" class="btn add-btn float-end mx-1" ><i class="fa fa-plus"></i>Export Employees</a>
                  </form>
                  <div class="view-icons">
                  <router-link to="/employees" class="grid-view btn btn-link active me-2"><i class="fa fa-th"></i></router-link>
                  <router-link to="/employees-list" class="list-view btn btn-link"><i class="fa fa-bars"></i></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
</template>
<script>
import Vue from 'vue'
export default {
    methods: {
        chooseFiles: function () {
            document.getElementById("fileUpload").click()
            this.uploadFile();
        },
        uploadFile: function (){
            document.getElementById("fileUpload").onchange = function() {
                document.getElementById("employeeImport").submit();
            };
        },
        exportEmployee: function (){
                document.getElementById("employeeExport").submit();
        }
    }
}
</Script>

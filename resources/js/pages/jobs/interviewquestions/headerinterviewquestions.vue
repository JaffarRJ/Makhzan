<template>
 <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Interview Questions</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item">Jobs</li>
                  <li class="breadcrumb-item active">Interview Questions</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn mb-1" data-bs-toggle="modal" data-bs-target="#add_question"><i class="fa fa-plus"></i> Add Question</a>
                <a href="javascript:void(0)" class="btn add-btn me-1 mb-1" data-bs-toggle="modal" data-bs-target="#add_category"><i class="fa fa-plus"></i> Add Category</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
</template>
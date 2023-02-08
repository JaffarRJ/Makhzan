<template>
<!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Clients</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Clients</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="javascript:void(0)" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_client"><i class="fa fa-plus"></i> Add Client</a>
                <div class="view-icons">
                  <router-link to="/clients" class="grid-view btn btn-link active me-2"><i class="fa fa-th"></i></router-link>
                  <router-link to="/clients-list" class="list-view btn btn-link"><i class="fa fa-bars"></i></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
</template>
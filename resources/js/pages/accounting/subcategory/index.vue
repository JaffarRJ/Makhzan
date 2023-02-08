<template>
  <div class="categories">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                
                <subcategoriesheader />
                    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Category Name </th>
                                            <th>Sub-Category Name</th>
                                            <th class="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in categories" :key="item.id">
                                            <td>{{item.no}}</td>
                                            <td>{{item.categoryname}}</td>
                                            <td>{{item.subcategoryname}}</td>
                                            <td class="text-end">
                                                <div class="dropdown dropdown-action">
                                                    <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_categories"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <router-link class="dropdown-item" to="/sub-category"><i class="fa fa-object-ungroup m-r-5"></i> Sub-Category </router-link>
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
                
            <subcategoriesmodal />

        </div>
        <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import categories from '../../../../assets/json/categories.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      categories: categories
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'categories'
  }
</Script>
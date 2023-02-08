<template>
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3" v-for="item in projects" :key="item.id">
              <div class="card">
                <div class="card-body">
                  <div class="dropdown dropdown-action profile-action">
                    <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                      <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_project"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                    </div>
                  </div>
                  <h4 class="project-title"><router-link to="/project-view">{{item.title}}</router-link></h4>
                  <small class="block text-ellipsis m-b-15">
                    <span class="text-xs">{{item.no}}</span> <span class="text-muted">{{item.nodetail}} </span>
                     <span class="text-xs">{{item.no1}}</span> <span class="text-muted">{{item.no1detail}}</span>
                  </small>
                  <p class="text-muted">{{item.description}}
                  </p>
                  <div class="pro-deadline m-b-15">
                    <div class="sub-title">
                      {{item.title1}}
                    </div>
                    <div class="text-muted">
                      {{item.title1date}}
                    </div>
                  </div>
                  <div class="project-members m-b-15">
                    <div>{{item.title2}}</div>
                    <ul class="team-members">
                      <li>
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" :src="loadImg(item.image)"></a>
                      </li>
                    </ul>
                  </div>
                  <div class="project-members m-b-15">
                    <div>{{item.title3}}</div>
                    <ul class="team-members">
                      <li>
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../../assets/img/profiles/avatar-05.jpg"></a>
                      </li>
                      <li class="dropdown avatar-dropdown">
                        <a href="javascript:void(0)" class="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <div class="avatar-group">
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-09.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-10.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-11.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-12.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-13.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-01.jpg">
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0)">
                              <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                            </a>
                          </div>
                          <div class="avatar-pagination">
                            <ul class="pagination">
                              <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span class="visually-hidden">Previous</span>
                                </a>
                              </li>
                              <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                              <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                              <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                <span class="visually-hidden">Next</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p class="m-b-5">{{item.title4}} <span class="text-success float-end">{{item.percentage}}</span></p>
                  <div class="progress progress-xs mb-0">
                    <div class="progress-bar bg-success" role="progressbar" data-bs-toggle="tooltip" title="40%" style="width: 40%"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
</template>
<script>
  import Vue from 'vue'
  import projects from '../../../../assets/json/projects.json';
  import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  export default {
    data() {
    return {
      projects: projects
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
    name: 'projects'
  }
</Script>
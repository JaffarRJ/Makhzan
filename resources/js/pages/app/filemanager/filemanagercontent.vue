<template>

<div class="file-cont-wrap">
                  <div class="file-cont-inner">
                    <div class="file-cont-header">
                      <div class="file-options">
                        <a href="javascript:void(0)" id="file_sidebar_toggle" class="file-sidebar-toggle">
                          <i class="fa fa-bars"></i>
                        </a>
                      </div>
                      <span>File Manager</span>
                      <div class="file-options">
                        <span class="btn-file"><input type="file" class="upload"><i class="fa fa-upload"></i></span>
                      </div>
                    </div>
                    <div class="file-content">
                      <form class="file-search">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <i class="fa fa-search"></i>
                          </div>
                          <input type="text" class="form-control rounded-pill" placeholder="Search">
                        </div>
                      </form>
                      <div class="file-body">
                        <div class="file-scroll">
                          <div class="file-content-inner">
                            <h4>Recent Files</h4>
                            <div class="row row-sm">
                              <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3" v-for="item in filemanager" :key="item.id">
                                <div class="card card-file">
                                  <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <a href="javascript:void(0)" class="dropdown-item">View Details</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Share</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Download</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Rename</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Delete</a>
                                    </div>
                                  </div>
                                  <div class="card-file-thumb">
                                    <i class="fa fa-file-pdf-o"></i>
                                  </div>
                                  <div class="card-body">
                                    <h6><a href="">{{item.pdf}} </a></h6>
                                    <span>{{item.size}} </span>
                                  </div>
                                  <div class="card-footer">
                                    <span class="d-none d-sm-inline">{{item.changed}}  </span>{{item.changecontent}} 
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h4>Files</h4>
                            <div class="row row-sm">
                              <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3" v-for="item in filemanager1" :key="item.id">
                                <div class="card card-file">
                                  <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <a href="javascript:void(0)" class="dropdown-item">View Details</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Share</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Download</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Rename</a>
                                      <a href="javascript:void(0)" class="dropdown-item">Delete</a>
                                    </div>
                                  </div>
                                  <div class="card-file-thumb">
                                    <i class="fa fa-file-word-o"></i>
                                  </div>
                                  <div class="card-body">
                                    <h6><a href="">{{item.pdf}}</a></h6>
                                    <span>{{item.size}}</span>
                                  </div>
                                  <div class="card-footer">{{item.changecontent}}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
import filemanager from '../../../../assets/json/filemanager.json';
import filemanager1 from '../../../../assets/json/filemanager1.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      filemanager: filemanager,
      filemanager1: filemanager1
    }
    },
    components: {
    },
  }
</Script>
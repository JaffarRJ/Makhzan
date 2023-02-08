<template>
 <!-- Chat Right Sidebar -->
            <div class="col-lg-3 message-view chat-profile-view chat-sidebar" id="task_window">
              <div class="chat-window video-window">
                <div class="fixed-header">
                  <ul class="nav nav-tabs nav-tabs-bottom">
                    <li class="nav-item"><a class="nav-link" href="#calls_tab" data-bs-toggle="tab">Calls</a></li>
                    <li class="nav-item"><a class="nav-link active" href="#profile_tab" data-bs-toggle="tab">Profile</a></li>
                  </ul>
                </div>

                <div class="tab-content chat-contents">
                  <div class="content-full tab-pane" id="calls_tab">
                    <div class="chat-wrap-inner">
                      <div class="chat-box">
                        <div class="chats">
                          <div class="chat chat-left" v-for="item in chatend" :key="item.id">
                            <div class="chat-avatar">
                              <router-link to="/profile" class="avatar">
                                <img alt="" :src="loadImg(item.image)">
                              </router-link>
                            </div>
                            <div class="chat-body">
                              <div class="chat-bubble">
                                <div class="chat-content">
                                  <span class="task-chat-user">{{item.name}}</span> <span class="chat-time">{{item.time}}</span>
                                  <div class="call-details">
                                    <i class="material-icons">phone_missed</i>
                                    <div class="call-info">
                                      <div class="call-user-details">
                                        <span class="call-description">{{item.description1}}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat-line">
                            <span class="chat-date">January 29th, 2019</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content-full tab-pane show active" id="profile_tab">
                    <div class="display-table">
                      <div class="table-row">
                        <div class="table-body">
                          <div class="table-content">
                            <div class="chat-profile-img">
                              <div class="edit-profile-img">
                                <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="">
                                <span class="change-img">Change Image</span>
                              </div>
                              <h3 class="user-name m-t-10 mb-0">John Doe</h3>
                              <small class="text-muted">Web Designer</small>
                              <a href="javascript:void(0);" class="btn btn-primary edit-btn"><i class="fa fa-pencil"></i></a>
                            </div>
                            <div class="chat-profile-info">
                              <ul class="user-det-list" v-for="item in chatend1" :key="item.id">
                                <li>
                                  <span>{{item.name}}</span>
                                  <span class="float-end text-muted">{{item.name1}}</span>
                                </li>
                                <li>
                                  <span>{{item.dob}}</span>
                                  <span class="float-end text-muted">{{item.date}}</span>
                                </li>
                                <li>
                                  <span>{{item.email}}</span>
                                  <span class="float-end text-muted">{{item.emailid}}</span>
                                </li>
                                <li>
                                  <span>{{item.mobile}}</span>
                                  <span class="float-end text-muted">{{item.no}}</span>
                                </li>
                              </ul>
                            </div>
                            <div class="transfer-files">
                              <ul class="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                                <li class="nav-item"><a class="nav-link active" href="#all_files" data-bs-toggle="tab">All Files</a></li>
                                <li class="nav-item"><a class="nav-link" href="#my_files" data-bs-toggle="tab">My Files</a></li>
                              </ul>
                              <div class="tab-content">
                                <div class="tab-pane show active" id="all_files">
                                  <ul class="files-list">
                                    <li>
                                      <div class="files-cont">
                                        <div class="file-type">
                                          <span class="files-icon"><i class="fa fa-file-pdf-o"></i></span>
                                        </div>
                                        <div class="files-info">
                                          <span class="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span class="file-author"><a href="javascript:void(0)">Loren Gatlin</a></span> <span class="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul class="files-action">
                                          <li class="dropdown dropdown-action">
                                            <a href="" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_horiz</i></a>
                                            <div class="dropdown-menu">
                                              <a class="dropdown-item" href="javascript:void(0)">Download</a>
                                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div class="tab-pane" id="my_files">
                                  <ul class="files-list">
                                    <li>
                                      <div class="files-cont">
                                        <div class="file-type">
                                          <span class="files-icon"><i class="fa fa-file-pdf-o"></i></span>
                                        </div>
                                        <div class="files-info">
                                          <span class="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span class="file-author"><a href="javascript:void(0)">John Doe</a></span> <span class="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul class="files-action">
                                          <li class="dropdown dropdown-action">
                                            <a href="" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_horiz</i></a>
                                            <div class="dropdown-menu">
                                              <a class="dropdown-item" href="javascript:void(0)">Download</a>
                                              <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    <!-- /Chat Right Sidebar -->
</template>
<script>
import chatend from '../../../../assets/json/chatend.json';
import chatend1 from '../../../../assets/json/chatend1.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      chatend: chatend,
      chatend1: chatend1
    }
  },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'activities'
  }
</Script>
<template>
<div class="card mb-0">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="profile-view">
                    <div class="profile-img-wrap">
                      <div class="profile-img">
                        <a href="javascript:void(0)"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                      </div>
                    </div>
                    <div class="profile-basic">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="profile-info-left">
                            <h3 class="user-name m-t-0 mb-0">John Doe</h3>
                            <h6 class="text-muted">UI/UX Design Team</h6>
                            <small class="text-muted">Web Designer</small>
                            <div class="staff-id">Employee ID : FT-0001</div>
                            <div class="small doj text-muted">Date of Join : 1st Jan 2013</div>
                            <div class="staff-msg"><router-link class="btn btn-custom" to="/chat">Send Message</router-link></div>
                          </div>
                        </div>
                        <div class="col-md-7">
                          <ul class="personal-info">
                            <li>
                              <div class="title">Phone:</div>
                              <div class="text"><a href="">9876543210</a></div>
                            </li>
                            <li>
                              <div class="title">Email:</div>
                              <div class="text"><a href="">johndoe@example.com</a></div>
                            </li>
                            <li>
                              <div class="title">Birthday:</div>
                              <div class="text">24th July</div>
                            </li>
                            <li>
                              <div class="title">Address:</div>
                              <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                            </li>
                            <li>
                              <div class="title">Gender:</div>
                              <div class="text">Male</div>
                            </li>
                            <li>
                              <div class="title">Reports to:</div>
                              <div class="text">
                                 <div class="avatar-box">
                                  <div class="avatar avatar-xs">
                                   <img src="../../../assets/img/profiles/avatar-16.jpg" alt="">
                                  </div>
                                 </div>
                                 <router-link to="/profile">
                                  Jeffery Lalor
                                </router-link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pro-edit"><a data-bs-target="#profile_info" data-bs-toggle="modal" class="edit-icon" href="javascript:void(0)"><i class="fa fa-pencil"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>
 <template>
 <!-- Message Notifications -->
          <li class="nav-item dropdown">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <i class="fa fa-comment-o"></i> <span class="badge rounded-pill">8</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Messages</span>
                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/img/profiles/avatar-09.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="notification-message">
                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/img/profiles/avatar-02.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">John Doe</span>
                          <span class="message-time">6 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="notification-message">
                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/img/profiles/avatar-03.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Tarah Shropshire </span>
                          <span class="message-time">5 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="notification-message">
                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/img/profiles/avatar-05.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Mike Litorus</span>
                          <span class="message-time">3 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="notification-message">
                    <router-link to="/chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="../../assets/img/profiles/avatar-08.jpg">
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Catherine Manseau </span>
                          <span class="message-time">27 Feb</span>
                          <div class="clearfix"></div>
                          <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <router-link to="/chat">View all Messages</router-link>
              </div>
            </div>
          </li>
          <!-- /Message Notifications -->
</template>
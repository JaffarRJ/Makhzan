 <template>
 <li class="nav-item dropdown has-arrow main-drop">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span class="user-img me-1"><img src="../../assets/img/profiles/avatar-21.jpg" alt="">
              <span class="status online"></span></span>
              <span class="adminclass">Admin</span>
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/profile">My Profile</router-link>
              <router-link class="dropdown-item" to="/settings">Settings</router-link>
              <router-link class="dropdown-item" to="/">Logout</router-link>
            </div>
          </li>
</template>
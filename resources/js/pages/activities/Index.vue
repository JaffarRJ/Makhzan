<template>
  <div class="activities">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content">
          <headeractivities />
          <div class="row">

            <div class="col-md-12">
              <div class="activity">
                <div class="activity-box">
                  <ul class="activity-list" v-for="item in activities" :key="item.id">
                    <li>
                      <div class="activity-user">
                        <router-link to="/profile" title="Lesley Grauer" data-bs-toggle="tooltip" class="avatar">
                          <img :src="loadImg(item.image)" alt="">
                        </router-link>
                      </div>
                      <div class="activity-content">
                        <div class="timeline-content">
                          <router-link to="/profile" class="name">{{item.name}}</router-link> {{item.description}} <a href="javascript:void(0)">{{item.description1}}</a>
                          <span class="time">{{item.time}}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import activities from '../../../assets/json/activities.json';
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      activities: activities
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
    name: 'activities'
  }
</Script>

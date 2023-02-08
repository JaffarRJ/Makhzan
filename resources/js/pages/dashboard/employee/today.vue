<template>
<div class="col-lg-8 col-md-8">
              <section class="dash-section">
                <h1 class="dash-sec-title">Today</h1>
                <div class="dash-sec-content">
                  <div class="dash-info-list" v-for="item in todayemployeedashboard" :key="item.id">
                    <a href="javascript:void(0)" class="dash-card text-danger">
                      <div class="dash-card-container">
                        <div class="dash-card-icon">
                          <i class="fa fa-hourglass-o"></i>
                        </div>
                        <div class="dash-card-content">
                          <p>{{item.name}}</p>
                        </div>
                        <div class="dash-card-avatars">
                          <div class="e-avatar"><img :src="loadImg(item.image)" alt=""></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <section class="dash-section">
                <h1 class="dash-sec-title">Tomorrow</h1>
                <div class="dash-sec-content">
                  <div class="dash-info-list">
                    <div class="dash-card">
                      <div class="dash-card-container">
                        <div class="dash-card-icon">
                          <i class="fa fa-suitcase"></i>
                        </div>
                        <div class="dash-card-content">
                          <p>2 people will be away tomorrow</p>
                        </div>
                        <div class="dash-card-avatars">
                          <a href="javascript:void(0)" class="e-avatar"><img src="../../../../assets/img/profiles/avatar-04.jpg" alt=""></a>
                          <a href="javascript:void(0)" class="e-avatar"><img src="../../../../assets/img/profiles/avatar-08.jpg" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="dash-section">
                <h1 class="dash-sec-title">Next seven days</h1>
                <div class="dash-sec-content">
                  <div class="dash-info-list">
                    <div class="dash-card">
                      <div class="dash-card-container">
                        <div class="dash-card-icon">
                          <i class="fa fa-suitcase"></i>
                        </div>
                        <div class="dash-card-content">
                          <p>2 people are going to be away</p>
                        </div>
                        <div class="dash-card-avatars">
                          <a href="javascript:void(0)" class="e-avatar"><img src="../../../../assets/img/profiles/avatar-05.jpg" alt=""></a>
                          <a href="javascript:void(0)" class="e-avatar"><img src="../../../../assets/img/profiles/avatar-07.jpg" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dash-info-list">
                    <div class="dash-card">
                      <div class="dash-card-container">
                        <div class="dash-card-icon">
                          <i class="fa fa-user-plus"></i>
                        </div>
                        <div class="dash-card-content">
                          <p>Your first day is going to be  on Thursday</p>
                        </div>
                        <div class="dash-card-avatars">
                          <div class="e-avatar"><img src="../../../../assets/img/profiles/avatar-02.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dash-info-list">
                    <a href="" class="dash-card">
                      <div class="dash-card-container">
                        <div class="dash-card-icon">
                          <i class="fa fa-calendar"></i>
                        </div>
                        <div class="dash-card-content">
                          <p>It's Spring Bank Holiday  on Monday</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            </div>
</template>
<script>
import todayemployeedashboard from '../../../../assets/json/todayemployeedashboard.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      todayemployeedashboard: todayemployeedashboard
    }
  },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>
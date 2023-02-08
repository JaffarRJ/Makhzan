<template>
<div class="contacts-list col-sm-8 col-lg-9">

                          <ul class="contact-list">
                            <li v-for="item in contact" :key="item.id">
                              <div class="contact-cont">
                                <div class="float-start user-img">
                                  <router-link to="/index" class="avatar">
                                    <img class="rounded-circle" alt="" :src="loadImg(item.image)">
                                    <span class="status online"></span>
                                  </router-link>
                                </div>
                                <div class="contact-info">
                                  <span class="contact-name text-ellipsis">{{item.name}}</span>
                                  <span class="contact-date">{{item.description}}</span>
                                </div>
                                <ul class="contact-action">
                                  <li class="dropdown dropdown-action">
                                    <a href="" class="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                      <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
</template>
<script>
import contact from '../../../../assets/json/contact.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      contact: contact
    }
  },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
  }
</Script>
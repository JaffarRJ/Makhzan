<template>
  <div class="row">
            <div class="col-xl-4 col-md-6 col-sm-6" v-for="item in knowledgebase" :key="item.id">
              <div class="topics">
                <h3 class="topic-title"><a href="javascript:void(0)"><i class="fa fa-folder-o"></i> {{item.title}} <span>{{item.titleno}}</span></a></h3>
                <ul class="topics-list">
                  <li><router-link to="/knowledgebase-view"> {{item.list}} </router-link>
                  </li>
                  <li><router-link to="/knowledgebase-view"> {{item.list1}} </router-link>
                  </li>
                  <li><router-link to="/knowledgebase-view"> {{item.list2}} </router-link>
                  </li>
                  <li><router-link to="/knowledgebase-view"> {{item.list3}} </router-link>
                  </li>
                  <li><router-link to="/knowledgebase-view"> {{item.list4}} </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
</template>
<script>
  import knowledgebase from '../../../assets/json/knowledgebase.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    knowledgebase: knowledgebase
    }
    },
    components: {
   
    },
  }
</Script>
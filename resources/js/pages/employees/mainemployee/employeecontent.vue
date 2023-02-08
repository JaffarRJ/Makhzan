<template>
 <div class="row staff-grid-row">
		<div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" v-for="item in employees" :key="item.id">
			<div class="profile-widget">
				<div class="profile-img">
					<router-link to="/profile" class="avatar"><img :src="loadImg(item.image)" alt=""></router-link>
				</div>
				<div class="dropdown profile-action">
					<a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_employee"><i class="fa fa-pencil m-r-5"></i> Edit</a>
						<a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
					</div>
				</div>
				<h4 class="user-name m-t-10 mb-0 text-ellipsis"><router-link to="/profile">{{item.name}}</router-link></h4>
				<div class="small text-muted">{{item.designation}}</div>
			</div>
		</div>
 </div>
</template>
<script>
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
import Vue from 'vue'
import {ref,onMounted} from 'vue'
import axios from 'axios'
	export default {
		props: ['employees'],
		created: function () {
			console.log('user data from parent component:')
			console.log(this.employees) //prints out an empty string
		},
		components: {
		},
		methods: {
				loadImg(imgPath) {
						// return images('./' + imgPath).default
						return images('./avatar-02.jpg').default
		},
		}
	}
</Script>

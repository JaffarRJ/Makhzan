<template>
<!-- Add Employee Modal -->
	<div id="add_employee" class="modal custom-modal fade" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Add Employee</h5>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<!-- <form>-->
						<div class="row">
								<div class="text-sm text-danger" if="errors != ''">
										<p v-for="error in errors" class="mb-0" :key="error"><small>{{ error }} </small></p>
								</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">First Name <span class="text-danger">*</span></label>
									<input class="form-control" type="text" v-model="form.first_name">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Last Name</label>
									<input class="form-control" type="text" v-model="form.last_name">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Username <span class="text-danger">*</span></label>
									<input class="form-control" type="text" v-model="form.user_name">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Email <span class="text-danger">*</span></label>
									<input class="form-control" type="email" v-model="form.email">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Password</label>
									<input class="form-control" type="password" v-model="form.password">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Confirm Password</label>
									<input class="form-control" type="password" v-model="form.password_confirmation">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Employee ID <span class="text-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.employee_id">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Joining Date <span class="text-danger">*</span></label>
									<div class="cal-icon custompicker">
										<datepicker v-model="form.join_date"  class="picker"
										:editable="true"
										:clearable="false" />
							</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Phone </label>
									<input class="form-control" type="text" v-model="form.phone">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Company</label>
									 <select class="form-control" v-model="form.company">
											<option value="0" disabled selected>Select Company</option>
											<option value="1">Global Technologies</option>
											<option value="2">Delta Info tech</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Department <span class="text-danger">*</span></label>
									<select class="form-control" v-model="form.department">
											<option disabled selected value="0">Select Department</option>
											<option value="1">Web Development</option>
											<option value="2">IT Management</option>
											<option value="3">Marketing</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Designation <span class="text-danger">*</span></label>
									<select class="form-control" v-model="form.designation">
											<option disabled selected value="0">Select Designation</option>
											<option value="1">Web Designer</option>
											<option value="2">Web Developer</option>
											<option value="3">Android Developer</option>
									</select>
								</div>
							</div>
						</div>
						<div class="d-none table-responsive m-t-15">
							<table class="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th class="text-center">Read</th>
										<th class="text-center">Write</th>
										<th class="text-center">Create</th>
										<th class="text-center">Delete</th>
										<th class="text-center">Import</th>
										<th class="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Holidays</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Leaves</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Clients</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Projects</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Chats</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Assets</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="submit-section">
							<button class="btn btn-primary submit-btn" @click="storeEmployee">Submit</button>
						</div>
					<!--</form>-->
				</div>
			</div>
		</div>
	</div>
	<!-- /Add Employee Modal -->

	<!-- Edit Employee Modal -->
	<div id="edit_employee" class="modal custom-modal fade" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Edit Employee</h5>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">First Name <span class="text-danger">*</span></label>
									<input class="form-control" value="John" type="text">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Last Name</label>
									<input class="form-control" value="Doe" type="text">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Username <span class="text-danger">*</span></label>
									<input class="form-control" value="johndoe" type="text">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Email <span class="text-danger">*</span></label>
									<input class="form-control" value="johndoe@example.com" type="email">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Password</label>
									<input class="form-control" value="johndoe" type="password">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Confirm Password</label>
									<input class="form-control" value="johndoe" type="password">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Employee ID <span class="text-danger">*</span></label>
									<input type="text" value="FT-0001" readonly class="form-control floating">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Joining Date <span class="text-danger">*</span></label>
									<div class="cal-icon custompicker">
										<datepicker v-model="enddate"  class="picker"
										:editable="true"
										:clearable="false" />
							</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Phone </label>
									<input class="form-control" value="9876543210" type="text">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="col-form-label">Company</label>
									<select class="select">
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
										<option selected>International Software Inc</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Department <span class="text-danger">*</span></label>
									<select class="select">
										<option>Select Department</option>
										<option>Web Development</option>
										<option>IT Management</option>
										<option>Marketing</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Designation <span class="text-danger">*</span></label>
									<select class="select">
										<option>Select Designation</option>
										<option>Web Designer</option>
										<option>Web Developer</option>
										<option>Android Developer</option>
									</select>
								</div>
							</div>
						</div>
						<div class="table-responsive m-t-15">
							<table class="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th class="text-center">Read</th>
										<th class="text-center">Write</th>
										<th class="text-center">Create</th>
										<th class="text-center">Delete</th>
										<th class="text-center">Import</th>
										<th class="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Holidays</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Leaves</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Clients</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Projects</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Chats</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Assets</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input checked="" type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
										<td class="text-center">
											<input type="checkbox">
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="submit-section">
							<button class="btn btn-primary submit-btn">Save</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- /Edit Employee Modal -->

	<!-- Delete Employee Modal -->
	<div class="modal custom-modal fade" id="delete_employee" role="dialog">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body">
					<div class="form-header">
						<h3>Delete Employee</h3>
						<p>Are you sure want to delete?</p>
					</div>
					<div class="modal-btn delete-action">
						<div class="row">
							<div class="col-6">
								<a href="javascript:void(0);"  class="btn btn-primary continue-btn">Delete</a>
							</div>
							<div class="col-6">
								<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Delete Employee Modal -->
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { ref,reactive } from 'vue'

	const currentDate = ref(new Date())
	const currentDate1 = ref(new Date())
	const errors = ref([])
	export default {
		// getting the passed prop from parent
		props: [ 'function_reload_employees' ],
		 setup(props) {
				 const form = reactive({
						 first_name:'',
						 last_name:'',
						 user_name:'',
						 email:'',
						 password:'',
						 password_confirmation:'',
						 employee_id:'',
						 join_date:currentDate,
						 phone:'',
						 company:'0',
						 department:'0',
						 designation:'0',
				 })
				 const storeEmployee = async() => {
						 try{
								 await axios.post('api/employees',form);
								 formReset();
								$("#add_employee").modal('hide');
								// calling the prop based function
								 props.function_reload_employees();
						 }catch(e){
							 console.log(e)
							//	 let data = [];
							//			 for(const key in e.response.data.errors){
							//					 data.push(e.response.data.errors[key][0]);
							//			 }
							//	errors.value = data;
						 }
				 }
				 const formReset = () =>{
						 // employee_id.value = '';
						 form.first_name='';
						 form.last_name='';
						 form.user_name='';
						 form.email='';
						 form.password='';
						 form.password_confirmation='';
						 form.employee_id='';
						 form.join_date=currentDate;
						 form.phone='';
						 form.company='0';
						 form.department='0';
						 form.designation='0';
				 }
				 return {
			startdate: currentDate,
			enddate: currentDate1,
			form,storeEmployee, errors
		}
		},
		
		components: {

		},
		mounted() {
				// Select 2
				if ($('.select').length > 0) {
								$('.select').select2({
										minimumResultsForSearch: -1,
										width: '100%'
								});
						}
		}
	}
</Script>

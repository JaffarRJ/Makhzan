<template>
<div class="row">
  <div class="col-sm-6 col-md-3">
    <div class="form-group">
        <label>Client <span class="text-danger">*</span></label>
        <select class="select">
            <option>Please Select</option>
            <option selected>Barry Cuda</option>
            <option>Tressa Wexler</option>
        </select>
    </div>
</div>
<div class="col-sm-6 col-md-3">
    <div class="form-group">
        <label>Project <span class="text-danger">*</span></label>
        <select class="select">
            <option>Select Project</option>
            <option selected>Office Management</option>
            <option>Project Management</option>
        </select>
    </div>
</div>
                  
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Email</label>
                      <input class="form-control" type="email">
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Tax</label>
                      <select class="select">
												<option>Select Tax</option>
												<option>VAT</option>
												<option>GST</option>
												<option>No Tax</option>
											</select>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Client Address</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Billing Address</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Estimate Date <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Expiry Date <span class="text-danger">*</span></label>
                      <div class="cal-icon custompicker">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    </div>
                  </div>
                </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      createestimateclient: ["Please Select", "Barry Cuda", "Tressa Wexler"],
      createestimateproject: ["Select Project", "Office Management", "Management"],
      createestimatetax: ["Select Tax", "VAT", "GST", "No Tax"],
      startdate: currentDate,
      enddate: currentDate1,

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
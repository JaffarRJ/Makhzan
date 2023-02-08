<template>
    <form >
                                        <h3>Resignation Notice</h3>
                                        <div class="form-group row">
                                            <label class="col-sm-12">Email Notification <span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <label class="control-label">Simultaneous Approval </label>
                                                 <select class="select form-control" multiple>
                                                <option>Select</option>
                                                <option>Test Lead</option>
                                                <option>UI/UX Designer</option>
                                                <option>Sox Analyst</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-12">Notice Days <span class="text-danger">*</span></label>
                                            <div class="col-md-6 approval-option">
                                                <input type="number" name="notice_days" class="form-control notice_days" value="15">
                                            </div>
                                        </div>
                                        <div class="m-t-30">
                                            <div class="col-md-12 submit-section">
                                                <button id="resignation_notice_set_btn" type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
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
    },
  }
</Script>
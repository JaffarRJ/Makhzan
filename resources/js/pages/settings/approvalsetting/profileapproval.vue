<template>
<div class="form-group row">
                                        <label class="control-label col-md-12">Default Leave Approval</label>
                                        <div class="col-md-12 approval-option">
                                            <label class="radio-inline">
                                            <input id="radio-single" class="me-2 default_offer_approval" value="seq-approver" name="default_leave_approval" type="radio">Sequence Approval (Chain) <sup> <span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                            </label>
                                            <label class="radio-inline ms-2">
                                            <input id="radio-multiple1" class="me-2 default_offer_approval" value="sim-approver" checked="" name="default_leave_approval" type="radio">Simultaneous Approval <sup><span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-12">leave Approvers</label>
                                        <div class="col-sm-6">
                                            <label class="control-label" style="margin-bottom:10px;padding-left:0">Simultaneous Approval </label>
                                            <select class="select form-control" multiple>
                                                <option>Select</option>
                                                <option>Test Lead</option>
                                                <option>UI/UX Designer</option>
                                                <option>Sox Analyst</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="m-t-30 row ">
                                        <div class="col-md-12 submit-section">
                                            <button id="leave_approval_set_btn" type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                        </div>
                                    </div>
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
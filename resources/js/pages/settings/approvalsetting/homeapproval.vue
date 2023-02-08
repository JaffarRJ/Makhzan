<template>
<h4>Expense Approval Settings</h4>
                                    <div class="form-group row">
                                        <label class="control-label col-md-12">Default Expense Approval</label>
                                        <div class="col-md-12 approval-option">
                                            <label class="radio-inline">
                                            <input id="radio-single1" class="me-2 default_expense_approval" value="seq-approver" checked="" name="default_expense_approval" type="radio">Sequence Approval (Chain) <sup> <span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                            </label>
                                            <label class="radio-inline ms-2">
                                            <input id="radio-multiple3" class="me-2 default_expense_approval" value="sim-approver" name="default_expense_approval" type="radio">Simultaneous Approval <sup><span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group  form-row row approver seq-approver" style="display: block;">
                                        <label class="control-label col-sm-3">Expense Approvers</label>
                                        <div class="col-sm-9 ">
                                            <label class="ex_exp_approvers_1 control-label mb-2 exp_appr" style="padding-left:0">Approver 1</label>
                                            <div class="row ex_exp_approvers_1 form-group">
                                                <div class="col-md-6">
                                                <select class="select form-control expense_approvers" style="width:260px" name="expense_approvers[]" tabindex="-1" aria-hidden="true">
                                                        <option value="">Select Approvers</option>
                                                        <option value="1">CEO</option>
                                                        <option value="9">Direct Manager</option>
                                                        <option value="11">Development Manager 
                                                        </option>
                                                        <option value="6">Finance</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <label class="ex_exp_approvers_2 control-label mb-2 exp_appr" style="padding-left:0">Approver 2</label>
                                            <div class="row ex_exp_approvers_2 form-group">
                                                <div class="col-md-6">
                                                    <select class="select form-control expense_approvers " style="width:260px" name="expense_approvers[]" tabindex="-1" aria-hidden="true">
                                                        <option value="">Select Approvers</option>
                                                        <option value="1">CEO</option>
                                                        <option value="9">Direct Manager</option>
                                                        <option value="11">Development Manager 
                                                        </option>
                                                        <option value="6">Finance</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2"><a class="remove_ex_exp_approver btn rounded border text-danger" data-id="2"><i class="fa fa-times" aria-hidden="true"></i></a></div>
                                            </div>
                                            <label class="ex_exp_approvers_3 control-label m-b-10 exp_appr" style="padding-left:0">Approver 3</label>
                                            <div class="row ex_exp_approvers_3 form-group">
                                                <div class="col-md-6">
                                                    <select class="select form-control expense_approvers" style="width:260px" name="expense_approvers[]" tabindex="-1" aria-hidden="true">
                                                        <option value="">Select Approvers</option>
                                                        <option value="1">CEO</option>
                                                        <option value="9">Direct Manager</option>
                                                        <option value="11">Development Manager 
                                                        </option>
                                                        <option value="6">Finance</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-2"><a class="remove_ex_exp_approver btn rounded border text-danger" data-id="3"><i class="fa fa-times" aria-hidden="true"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-9 col-md-offset-3 m-t-10">
                                                <a id="add_expense_approvers" href="javascript:void(0)" class="add-more">+ Add Approver</a>
                                            </div>
                                        </div>
                                        <div class="m-t-30">
                                            <div class="col-md-12 submit-section">
                                                <button id="expense_approval_set_btn" type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
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
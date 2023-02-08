<template>
    <form>
                                        <h4>Offer Approval Settings</h4>
                                        <div class="form-group">
                                            <label class="control-label col-md-12">Default Offer Approval</label>
                                            <div class="col-md-12 approval-option">
                                                <label class="radio-inline">
                                                <input id="radio-single2" class="me-2 default_offer_approval" value="seq-approver" name="default_offer_approval" type="radio">Sequence Approval (Chain) <sup> <span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                                </label>
                                                <label class="radio-inline ms-2">
                                                <input id="radio-multiple2" class="me-2 default_offer_approval" value="sim-approver" checked="" name="default_offer_approval" type="radio">Simultaneous Approval <sup><span class="badge info-badge"><i class="fa fa-info" aria-hidden="true"></i></span></sup>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="m-t-30">
                                            <div class="col-md-12 submit-section">
                                                <button id="offer_approval_set_btn" type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>
</template>
<template>

 <!-- Add Modal -->
                <div class="modal custom-modal fade" id="add_categories" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Sub Categories</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Categories Name <span class="text-danger">*</span></label>
                                        <select class="form-control select">
                                            <option>Select</option>
                                            <option>Hardware</option>
                                            <option>Material</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Sub Categories Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text">
                                    </div>

                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Add Modal -->
                
               <!-- Edit Modal -->
                <div class="modal custom-modal fade" id="edit_categories" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Categories</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Categories Name <span class="text-danger">*</span></label>
                                        <select class="form-control select">
                                            <option>Select</option>
                                            <option>Hardware</option>
                                            <option>Material</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Sub Categories Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text">
                                    </div>

                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Edit Modal -->
</template>
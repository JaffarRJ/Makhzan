<template>
<div class="row">
            <div class="col-md-12">
              <div class="card card-table">
                <div class="card-header">
                  <h3 class="card-title mb-0">Offered Jobs</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-nowrap custom-table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Job Title</th>
                          <th>Department</th>
                          <th class="text-center">Job Type</th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><router-link to="/job-details">Web Developer</router-link></td>
                          <td>Development</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Full Time
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <a href="javascript:void(0)" class="btn btn-sm btn-info download-offer"><span><i class="fa fa-download me-1"></i> Download Offer</span></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><router-link to="/job-details">Web Designer</router-link></td>
                          <td>Designing</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-success"></i> Part Time
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <a href="javascript:void(0)" class="btn btn-sm btn-info download-offer"><span><i class="fa fa-download me-1"></i> Download Offer</span></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><router-link to="/job-details">Android Developer</router-link></td>
                          <td>Android</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Internship
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <a href="javascript:void(0)" class="btn btn-sm btn-info download-offer"><span><i class="fa fa-download me-1"></i> Download Offer</span></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
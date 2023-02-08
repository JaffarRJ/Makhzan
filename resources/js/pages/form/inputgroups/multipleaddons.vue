<template>
<div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Multiple Addons</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Radio and Text Addons</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <span class="input-group-text">
                            <input type="checkbox">
                          </span>
                          <span class="input-group-text">$</span>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="form-group row mb-0">
                      <label class="col-form-label col-lg-2">Two Addons</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <span class="input-group-text">$</span>
                          <span class="input-group-text">0.00</span>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mb-0">
                <div class="card-header">
                  <h4 class="card-title mb-0">Buttons with dropdowns</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Radio and Text Addons</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <button type="button" class="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">Action</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">Action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                          </div>
                          <input type="text" class="form-control" placeholder="Left dropdown">
                        </div>
                      </div>
                    </div>

                    <div class="form-group row mb-0">
                      <label class="col-form-label col-lg-2">Two Addons</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Right dropdown">
                          <button type="button" class="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">Action</button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)">Action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
</template>
<template>
<div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Basic Examples</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Group Left</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1">@</span>
                          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Group Right</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                          <span class="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">URL Example</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <span class="input-group-text">https://</span>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Group with Price</label>
                      <div class="col-lg-10">
                        <div class="input-group">
                          <span class="input-group-text">$</span>
                          <input type="text" class="form-control">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>

                    <div class="form-group row mb-0">
                      <label class="col-form-label col-lg-2">Group with Price (Left)</label>
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
</template>
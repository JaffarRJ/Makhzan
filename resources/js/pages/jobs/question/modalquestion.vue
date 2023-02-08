<template>
<div class="modal question-modal" id="free_question_modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered  " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="mb-0">Result for Your Questions</h3>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        <div class="form-horzontal">
          <div class="col-md-12">
            <div class="text-start mb-3">
              <h3 class="mb-0">Correct Answers : <span class="text-success"><b>5</b></span></h3>
            </div>
            <div class="text-start">
              <h3 class="mb-0">Wrong Answer : <span class="text-danger"><b>1</b></span></h3>
            </div>
          </div>
        </div>
        <div class="mt-3">
        <p>Please click Next to move main menu.</p>
        <router-link to="/job-aptitude" class="btn btn-primary btn-lg submit-btn d-block">Next</router-link>
      </div>
      </div>
      
    </div>
  </div>
</div>
</template>
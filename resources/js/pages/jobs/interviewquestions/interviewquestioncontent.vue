<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="interviewquestions">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Questions</th>
                      <th>Option A</th>
                      <th>Option B</th>
                      <th>Option C</th>
                      <th>Option D</th>
                      <th class="text-center">Correct Answer</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in interviewquestion" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        {{item.questions}}
                      </td>
                      <td>{{item.optiona}}</td>
                      <td>{{item.optionb}}</td>
                      <td>{{item.optionc}}</td>
                      <td>{{item.optiond}}</td>
                      <td class="text-center">{{item.correctanswer}}</td>
                      <td class="text-center">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import interviewquestion from '../../../../assets/json/interviewquestion.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      interviewquestion: interviewquestion
    }
    },
    components: {
    },
     mounted() {
    util.datatable('#interviewquestions')
    },
  }
</Script>
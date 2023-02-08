<template>
    <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title </th>
                      <th>Holiday Date</th>
                      <th>Day</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="holiday-completed" v-for="item in holiday" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.title}}</td>
                      <td>{{item.holidaydate}}</td>
                      <td>{{item.day}}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="javascript:void(0)" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
import holiday from '../../../../assets/json/holiday.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      holiday: holiday
    }
    },
    components: {
    }
  }
</Script>
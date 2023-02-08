<template>
  <div class="events">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <eventheader />
          
          <div class="row">
            <div class="col-lg-12">
              <div class="card mb-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                    
                      <!-- Calendar -->
                      <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
                      <!-- /Calendar -->
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->
      
        <eventmodal />
        
        </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import FullCalendar from "@fullcalendar/vue3";
  import {
  CalendarOptions
} from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
  export default {
    components: {
    FullCalendar,
    },
    data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
        {
            title  : '10.02p Test Event 1',
            start  : '2020-08-29',
        },
        {
            title  : '7.55p Test Event 3',
            start  : '2020-09-02',
        },
      ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
    }
  },
  props: {
    msg: String,
  },
    mounted() {

    },
    name: 'events'
  }
</Script>
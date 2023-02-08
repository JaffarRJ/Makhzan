<template>
  <div>
    <header>
      <!-- Header -->
      <div class="header">
      
       <header-logo />
        
       
        
        <!-- Header Title -->
                <div class="page-title-box">
          <h3>Dreamguy's Technologies</h3>
                </div>
        <!-- /Header Title -->
        
        <a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
        
        <!-- Header Menu -->
        <ul class="nav user-menu">
        

          <search />
        
          <flag />
        
          <li class="nav-item">
          <router-link class="nav-link" to="/">Login</router-link>
          </li>
          
          <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          
          </ul>
          
          </div>
      <!-- /Header -->
    </header>
  </div>
</template>
<script>
  export default {
    mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');

    
      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
    $('#task_window').removeClass('opened');
    });


      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
      $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
      });
      
    }
  };
</script>
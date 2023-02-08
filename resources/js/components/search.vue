<template>
          <!-- Search -->
          <li class="nav-item">
            <div class="top-nav-search">
              <a href="javascript:void(0);" class="responsive-search">
                <i class="fa fa-search"></i>
               </a>
              <form>
                <input class="form-control" type="text" placeholder="Search here">
                <router-link to="/search">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                </router-link>
              </form>
            </div>
          </li>
          <!-- /Search -->
</template>
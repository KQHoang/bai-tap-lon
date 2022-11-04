
<template>
  <div class="t-container">
      <!-- Menu -->
        <div class="t-menu" id="menu">
            <!-- Logo -->
            <div class="t-menu-header">
              <div class="t-logo">
                <img src="../assets/images/logo_header.png" alt="">
                <div class="t-admin">Administrator</div>
              </div>
                
            </div>
            <!-- Title list menu -->
            <div class="t-menu-listmenu">
                <a class="t-menu-item">
                    <div class="icon t-item-icon item-dashboard"></div>
                    <div class="t-item-title">Tổng quan</div>
                </a>
                <router-link to="/mainuser" class="t-menu-item">
                  <div class="icon t-item-icon item-user"></div>
                    <div class="t-item-title">Danh sách người dùng</div>
                </router-link>
                <router-link to="/mainproduct" class="t-menu-item">
                  <div class="icon t-item-icon item-product"></div>
                    <div class="t-item-title">Danh sách sản phẩm</div>
                </router-link>
                <a class="t-menu-item">
                    <div class="icon t-item-icon item-bill"></div>
                    <div class="t-item-title">Danh sách đơn hàng</div>
                </a>
             
            </div>
        </div>
        <!-- Content -->
        <div class="t-content">
            <!-- Header -->
            <div class="t-content-header">
              <div class="t-navbar-header" id="navbar">
                <div class="t-navbar-custom">
                    <div class="t-icon-mithree"></div>
                    <div class="t-branch">Home</div>
                    <div class="t-branch">Contact</div>
                </div>
                
                <div class="t-navbar-user">
                    <div class="t-user-info">
                        <div class="t-user-notify"></div>
                        <div class="t-avatar"></div>
                        <div class="t-user-name">Admin</div>
                        <div class="t-icon-down"></div>
                    </div>
                    
                </div>
            </div>
            </div>
            <!-- Main content -->
            <!-- Content-header -->
            <router-view></router-view>
            <!-- Footer -->
            
            </div>
  </div>
  
</template>


<style>
@import url(../css/admin.css);
</style> 

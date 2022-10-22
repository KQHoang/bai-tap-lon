<template>
<div class="main-body">
    <div class="main-header">
        <div class="header-top">
            <div class="row">
                <div class="logo col-lg-3 col-md-8">
                    <img src="@/assets/images/logo_header.png" alt="">
                </div>
                <div class="search col-lg-7 hidden-sm" >
                    <div class="search-input">
                        <input type="text" class="" placeholder="Tìm kiếm sản phẩm">
                        <div class="icon-search-input d-flex">
                            <i class="fa fa-search fa-xl" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="header-wap-icon col-lg-2 col-md-4 d-flex">
                    <i class="fa fa-user-circle-o fa-xl" aria-hidden="true"></i>
                    <i class="fa fa-search fa-xl" aria-hidden="true"></i>
                    <i class="fa fa-shopping-bag fa-xl" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="menu-desktop hidden-sm">
            <div class="main-nav d-flex justify-content-center">
                <ul class="d-flex">
                    <li>Giới Thiệu</li>
                    <li>Sản Phẩm
                        <div class="sub-menu">
                            <div>> Áo Polo</div>
                            <div>> Áo Phông</div>
                            <div>> Áo Sơ Mi Dài Tay</div>
                            <div>> Áo Sơ Mi Ngắn Tay</div>
                            <div>> Áo Nỉ</div>
                            <div>> Áo Khoác</div>
                            <div>> Áo Vest</div>
                            <div>> Sơ Mi Hoạ Tiết</div>
                        </div>
                    </li>
                    <li class="menu-item">Khuyến Mại
                        <div class="sub-menu">
                            <div>Sale đồng giá 169k</div>
                        </div>
                    </li>
                    <li>Tin Tức</li>
                    <li>Tuyển Dụng</li>
                    <li>Hệ Thống Cửa Hàng</li>
                </ul>
            </div>
        </div>
        <div class="search-menu-bottom display-sm">
            <div class="search-input-bottom d-flex h-100">
                <input type="text" class="w-100" placeholder="Tìm kiếm sản phẩm" >
                <div class="icon-search-input d-flex">
                    <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "MainLayout"
}
</script>

<style scoped>
.row{
    align-items: center;
}
@media screen and (min-width: 960px){
    .logo img{
        max-height: 80px !important;
        max-width: 160px !important;
        cursor: pointer;
    }
}

@media screen and (max-width: 1000px){
    .main-header{
        padding: 0 !important;
    }
    .header-top{
        padding-right: 30px !important;
        padding-left: 30px !important;
    }
    .search-menu-bottom{
        margin: 0 20px;
    }
    .search-input-bottom{
        margin-top: 10px !important;
    }
    .header-top{
        height: 70px !important;
    }
   .hidden-sm{
        display: none;
   }
   .display-sm{
        display: block !important;
   }
}

.header-top{
    height: 100px;
    padding-bottom: 10px;
    padding-top: 20px;
}
.main-header{
    padding: 0 60px;
}
.logo{
    padding: 0;
    text-align: left;
}
.logo img{
    max-height: 50px;
    max-width: 160px;
}

.search-input{
    position: relative;
}
.search-input input{
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    height: 55px;
    font-size: 15px;
    font-weight: 500;
    padding: 0 55px 0 20px;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}

.search-input input:focus-visible{
    outline: none !important;
}

.search-input .icon-search-input{
    position: absolute;
    width: 55px;
    height: 55px;
    top: 0;
    right: 0;
}
.icon-search-input .fa-search{
    width: 55px;
    margin: auto;
    cursor: pointer;
}
.header-wap-icon{
    justify-content: end;
}
.header-wap-icon .fa{
    margin: 8px 5px 0;
    cursor: pointer;
}
.menu-desktop{
    border-top: 1px solid #eee;
    justify-content: center;
    margin: 0 -60px;
    position: relative;
}
.main-nav ul{
    padding: 0;
    margin: 0;
    list-style: none;
}

.main-nav li{
    height: 46px;
    margin-right:  25px;
    padding-top: 10px;
    padding-bottom: 15px;
}
.main-nav li:hover{
    color: #f94c43;
    border-bottom: 2px solid #f94c43;;
}
.main-nav li:nth-child(3){
    position: relative;
}
.main-nav li:nth-child(2){
    position: relative;
}
li:nth-child(3):hover .sub-menu{
    display: block !important;
}

li:nth-child(2):hover .sub-menu{
    display: block !important;
}


.main-nav .sub-menu{
    position: absolute;
    top: 46px;
    background: yellow;
    padding: 9px 18px;
    white-space: nowrap;
    text-align: left;
    font-size: 14px;
    display: none;
    color: #252a2b;
    /* transition: height 2s;
    -moz-transition: height 2s;
    -webkit-transition: height 2s;
    -o-transition: height 2s; */
}
.sub-menu>*:hover{
    color: #f94c43;
}
.search-menu-bottom{
    border-top: 1px solid #eee;
    display: none;
    height: 30px;
    font-size: 12px;
    position: relative;
}
.search-menu-bottom .icon-search-input{
    position: absolute;
    height: 30px;
    margin: auto;
    right: 0;
}
.search-input-bottom{
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}
.search-input-bottom input{
    padding-left: 20px;
    padding-right: 55px;
    border: none;
    background: #f5f5f5;
    color: #252a2b;
    width: 100%;
    border: none;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all 150ms linear;
}
.search-input-bottom input:focus-visible{
    outline: none !important;
}
</style>

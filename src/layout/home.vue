<template>
  <div class="main-body">
    <div class="main-header">
      <div class="header-top">
        <div class="row">
          <div class="logo col-sm-7 col-lg-3">
            <img src="@/assets/images/logo_header.png" alt="" />
          </div>
          <div class="search col-lg-7 hidden-sm">
            <div class="search-input">
              <input type="text" class="" placeholder="Tìm kiếm sản phẩm" />
              <div class="icon-search-input d-flex">
                <i class="fa fa-search fa-xl" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="header-wap-icon col-sm-5 col-lg-2 d-flex">
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
            <li>
              Sản Phẩm
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
            <li class="menu-item">
              Khuyến Mại
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
          <input type="text" class="w-100" placeholder="Tìm kiếm sản phẩm" />
          <div class="icon-search-input d-flex">
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="slider">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/images/Banner-web.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Banner-web.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/web-1(1).jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Web-1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/Web.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="top-seller">
        <div class="title-top-seller title">
          <div class="container-fluid">
            <h2>SẢN PHẨM BÁN CHẠY</h2>
          </div>
        </div>
        <div class="content-top-seller">
          <div class="container-fluid">
            <div class="row-content">
              <div class="product-list clearfix flex wrap">
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                      <div class="div-variant">
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-19.jpg"
                            alt=""
                          />
                          <span>Xanh rêu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-3.jpg"
                            alt=""
                          />
                          <span>Nâu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-9.jpg"
                            alt=""
                          />
                          <span>Be</span>
                        </span>
                      </div>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK341</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>399.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK328-QACTK302-9-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK328</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>425.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo khoác nam ADLTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>849.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo thun dài tay ATDTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>345.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/POTTK316-QJDTK302-1-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo polo nam POTTK316</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>365.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/QATTK301-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần âu nam QATTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>498.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/QATTK304-8-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần âu nam QATTK304</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>455.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/qjdtk302-1-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Quần jeans nam QJDTK302</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>485.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-product">
        <div class="title-new-product title">
          <div class="container-fluid">
            <h2>Hàng mới về</h2>
          </div>
        </div>
        <div class="content-new-product">
          <div class="container-fluid">
            <div class="row-content">
              <div class="product-list clearfix flex wrap">
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK341-QJDTK310-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                      <div class="div-variant">
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-19.jpg"
                            alt=""
                          />
                          <span>Xanh rêu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-3.jpg"
                            alt=""
                          />
                          <span>Nâu</span>
                        </span>
                        <span class="color-new beeted_color" data-img="">
                          <img
                            src="../assets/images/product-color/STDTK341-QJDTK310-9.jpg"
                            alt=""
                          />
                          <span>Be</span>
                        </span>
                      </div>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK341</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>399.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/STDTK328-QACTK302-9-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo sơ mi nam STDTK328</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>425.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ADLTK301-QJDTK310-2-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo khoác nam ADLTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>849.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 pro-loop">
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          src="../assets/images/product-img/ATDTK301-QJDTK309-3-400x600.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">Áo thun dài tay ATDTK301</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>345.000₫</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="title-news title">
          <div class="container-fluid">
            <h2>Tin tức</h2>
          </div>
        </div>
        <div class="news-content">
          <div class="container-fluid">
            <div class="post-list row-content">
              <div class="product-list clearfix flex wrap">
                <div class="col-md-4 pro-loop">
                  <div class="post_item">
                    <div class="post_featured">
                      <div class="post_thumb">
                        <a href="#">
                          <img
                            src="../assets/images/thumb.jpg"
                            alt="🔥 SINH NHẬT 8 TUỔI, 360 SALE UP TO 50% TOÀN BỘ SẢN PHẨM 🔥"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post_content">
                      <div class="post_info">
                        <span class="post_info_item">8/11/2022</span>
                      </div>
                      <h3 class="post_title font-size18">
                        <a href="#"
                          >🔥 SINH NHẬT 8 TUỔI, 360 SALE UP TO 50% TOÀN BỘ SẢN
                          PHẨM 🔥</a
                        >
                      </h3>
                      <div class="post_descr">
                        <p>
                          Nhân dịp kỉ niệm 8 năm thành lập, 360® dành tặng bạn
                          hàng ngàn ưu đãi lên tới 50% ngay tại cửa...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 pro-loop">
                  <div class="post_item">
                    <div class="post_featured">
                      <div class="post_thumb">
                        <a href="#">
                          <img
                            src="../assets/images/thumb.php.jpg"
                            alt="TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post_content">
                      <div class="post_info">
                        <span class="post_info_item">4/10/2022</span>
                      </div>
                      <h3 class="post_title font-size18">
                        <a href="#"
                          >TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN
                          PHẨM MÙA HÈ</a
                        >
                      </h3>
                      <div class="post_descr">
                        <p>
                          Cơ hội để sở hữu những sản phẩm chất lượng của 360®
                          với mức giá tốt nhất. –> ÁO...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 pro-loop">
                  <div class="post_item">
                    <div class="post_featured">
                      <div class="post_thumb">
                        <a href="#">
                          <img
                            src="../assets/images/thumb.php1.jpg"
                            alt="🔥 SINH NHẬT 8 TUỔI, 360 SALE UP TO 50% TOÀN BỘ SẢN PHẨM 🔥"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post_content">
                      <div class="post_info">
                        <span class="post_info_item">1/11/2022</span>
                      </div>
                      <h3 class="post_title font-size18">
                        <a href="#">TUYỂN DỤNG GẤP NHÂN VIÊN SALE ONLINE</a>
                      </h3>
                      <div class="post_descr">
                        <p>
                          TUYỂN DỤNG GẤP NHÂN VIÊN SALE ONLINE- ĐI LÀM NGAY!!!
                          Team nhà 360 Boutique chúng mình cần tìm đồng đội...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-footer w-100">
      <div class="top-footer">
        <div class="container-fluid row">
          <div class="col-sm-12 col-lg-3">
            <div class="title-email">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              Đăng ký nhận tin
            </div>
          </div>
          <div class="col-sm-12 col-lg-5 input-footer">
            <input type="text" placeholder="Nhập email của bạn" />
            <div class="btn-register-email--footer">ĐĂNG KÝ</div>
          </div>
          <div class="col-sm-12 col-lg-4 hotline-footer">
            <i class="fa fa-phone-square fa-xl" aria-hidden="true"></i>
            Hỗ trợ / Mua hàng: <span>097 328 58 86</span>
          </div>
        </div>
      </div>
      <div class="body-footer">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="footer-col">
              <div class="footer-title">
                <h4>HỆ THỐNG CỬA HÀNG</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li>242 Thái Hà, Q.Đống Đa, HN</li>
                  <li>20 Dương Quảng Hàm, Q.Cầu Giấy, HN</li>
                  <li>11 Dương Quảng Hàm, Q.Cầu Giấy, HN</li>
                  <li>63 Đại Cổ Việt, Q.Hai Bà Trưng, HN</li>
                  <li>27 Chùa Bộc, Q.Đống Đa, HN</li>
                  <li>296 Nguyễn Trãi, Q.Nam Từ Liêm, HN</li>
                  <li>116 Hồ Tùng Mậu,Q.Cầu Giấy, HN</li>
                  <li>24 Trần Phú, Hà Đông, HN</li>
                  <li>346 Cầu Giấy, Q.Cầu Giấy, HN</li>
                  <li>29 Phố Nhổn, Q.Nam Từ Liêm, HN</li>
                  <li>69 Quang Trung, Hà Đông, HN</li>
                  <li>272 Tô Hiệu, Q.Lê Chân, HP</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-col">
              <div class="footer-title">
                <h4>CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li>Hướng Dẫn Mua Hàng</li>
                  <li>Hình Thức Thanh Toán</li>
                  <li>Quy Định Về Bảo Mật Thông Tin</li>
                  <li>Chính Sách Bảo Hành</li>
                  <li>Chính Sách Đổi Hàng</li>
                  <li>Chính Sách Vận Chuyển</li>
                  <li>Điều Khoản Dịch Vụ</li>
                  <li>Giới Thiệu</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-col">
              <div class="footer-title">
                <h4>ĐỊA CHỈ</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li><b>CÔNG TY CỔ PHẦN THỜI TRANG 360</b></li>
                  <li>
                    VPGD: Đội 6, Xã Phương Đình, Huyện Đan Phượng, Thành phố Hà
                    nội, Việt nam
                  </li>
                  <li>Facebook thời trang nam: 360Boutique</li>
                  <li>Hotline: 0986984483</li>
                  <li>Email: 360boutique.vn@gmail.com</li>
                  <li>Website: https://360boutique.vn/</li>
                  <li>GPKD: 0107756568</li>
                  <li><img src="@/assets/images/da-thong-bao.png" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-col">
              <div class="footer-title">
                <h4>Fanpage</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <div
                    class="fb-page fb_iframe_widget"
                    data-href="https://www.facebook.com/360boutique.hn"
                    data-tabs="timeline"
                    data-width=""
                    data-height="300px"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=0&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F360boutique.hn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                  >
                    <span
                      style="
                        vertical-align: bottom;
                        width: 340px;
                        height: 300px;
                      "
                      ><iframe
                        name="f12fe76cd3f8e98"
                        width="1000px"
                        height="300px"
                        data-testid="fb:page Facebook Social Plugin"
                        title="fb:page Facebook Social Plugin"
                        frameborder="0"
                        allowtransparency="true"
                        allowfullscreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2e81f196810f54%26domain%3D360boutique.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252F360boutique.vn%252Ff332f4c0ec1d094%26relation%3Dparent.parent&amp;container_width=0&amp;height=300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F360boutique.hn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                        style="
                          border: none;
                          visibility: visible;
                          width: 340px;
                          height: 300px;
                        "
                        class=""
                      ></iframe
                    ></span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        Copyright © 2022 360boutique. All Rights Reserved
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.row {
  align-items: center;
}
@media screen and (min-width: 992px) {
  .logo img {
    max-height: 80px !important;
    max-width: 160px !important;
    cursor: pointer;
  }
  .hotline-footer {
    padding-left: 30px !important;
  }
}

@media screen and (max-width: 992px) {
  .main-header {
    padding: 0 !important;
  }
  .header-top {
    padding-right: 30px !important;
    padding-left: 30px !important;
  }
  .search-menu-bottom {
    margin: 0 20px;
  }
  .search-input-bottom {
    margin-top: 10px !important;
  }
  .header-top {
    height: 70px !important;
  }
  .hidden-sm {
    display: none;
  }
  .display-sm {
    display: block !important;
  }
  .title-email {
    margin-bottom: 20px !important;
  }
  .input-footer {
    margin-bottom: 10px !important;
  }
  .hotline-footer {
    padding-left: 0;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }
}

.header-top {
  height: 100px;
  padding-bottom: 10px;
  padding-top: 20px;
}
.main-header {
  padding: 0 60px;
}
.logo {
  padding: 0;
  text-align: left;
}
.logo img {
  max-height: 50px;
  max-width: 160px;
}

.search-input {
  position: relative;
}
.search-input input {
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

.search-input input:focus-visible {
  outline: none !important;
}

.search-input .icon-search-input {
  position: absolute;
  width: 55px;
  height: 55px;
  top: 0;
  right: 0;
}
.icon-search-input .fa-search {
  width: 55px;
  margin: auto;
  cursor: pointer;
}
.header-wap-icon {
  justify-content: end;
}
.header-wap-icon .fa {
  margin: 8px 5px 0;
  cursor: pointer;
}
.menu-desktop {
  border-top: 1px solid #eee;
  justify-content: center;
  margin: 0 -60px;
  position: relative;
}
.main-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.main-nav li {
  height: 46px;
  margin-right: 25px;
  padding-top: 10px;
  padding-bottom: 15px;
  cursor: pointer;
}
.main-nav li:hover {
  color: #f94c43;
  border-bottom: 2px solid #f94c43;
}
.main-nav li:nth-child(3) {
  position: relative;
}
.main-nav li:nth-child(2) {
  position: relative;
}
li:nth-child(3):hover .sub-menu {
  display: block !important;
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  -moz-transform: rotate3d(0, 0, 0, 0deg);
  -o-transform: rotate3d(0, 0, 0, 0deg);
  -ms-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
}

li:nth-child(2):hover .sub-menu {
  display: block !important;
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  -moz-transform: rotate3d(0, 0, 0, 0deg);
  -o-transform: rotate3d(0, 0, 0, 0deg);
  -ms-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
}

.main-nav .sub-menu {
  color: #2c3e50;
  text-align: left;
  top: 46px;
  padding: 9px 18px;
  background: #fff;
  position: absolute;
  z-index: 999;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  -webkit-transform: rotate3d(1, 0, 0, -90deg);
  -moz-transform: rotate3d(1, 0, 0, -90deg);
  -o-transform: rotate3d(1, 0, 0, -90deg);
  -ms-transform: rotate3d(1, 0, 0, -90deg);
  -webkit-transform-origin: 0 0 0;
  -moz-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  min-width: 190px;
}
.sub-menu > *:hover {
  color: #f94c43;
}
.search-menu-bottom {
  border-top: 1px solid #eee;
  display: none;
  height: 30px;
  font-size: 12px;
  position: relative;
}
.search-menu-bottom .icon-search-input {
  position: absolute;
  height: 30px;
  margin: auto;
  right: 0;
}
.search-input-bottom {
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
.search-input-bottom input {
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
.search-input-bottom input:focus-visible {
  outline: none !important;
}
.main-footer {
  /* position: fixed;
        bottom: 0;
        left: 0; */
}
.top-footer {
  padding: 15px 0;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1250px;
}
.title-email {
  text-align: left;
}
.title-email .fa {
  margin-right: 10px;
}
.input-footer {
  position: relative;
}
.input-footer input {
  height: 46px;
  border: 1px solid #e7e7e7;
  box-shadow: none;
  height: 45px;
  font-weight: 500;
  padding: 0 20px;
  background: #fbfbfb;
  color: #252a2b;
  width: 100%;
}
.input-footer input:focus-visible {
  outline: none !important;
}
.btn-register-email--footer {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 45px;
  right: 0;
  top: 0;
  padding: 0 12px;
  background-color: black;
  color: #fff;
  font-size: 12px;
}
.hotline-footer {
  display: flex;
  align-items: center;
}
.hotline-footer .fa {
  margin-right: 5px;
}

/* css phần main footer */
.body-footer {
  padding: 40px 0 30px;
  padding-right: 15px;
  padding-left: 15px;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
}

.body-footer .row {
  align-items: flex-start !important;
}
.body-footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.body-footer h4 {
  font-size: 20px;
  letter-spacing: 0.02em;
  margin: 0 0 20px;
  position: relative;
  line-height: 30px;
}

.footer-col {
  padding: 0 15px;
  text-align: left;
  margin-bottom: 20px;
}
.footer-col li {
  margin-bottom: 10px;
}
.footer-content li img {
  width: 185px;
  margin: 5px 20px 20px 0;
}
.footer-content li {
  cursor: pointer;
}
.bottom-footer {
  padding: 20px 0;
}

/*Css phần main content */
.title h2 {
  font-size: 37px;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}
.title-new-product {
  padding: 50px 0;
  text-align: center;
}
.main-content {
  position: relative;
  z-index: 999;
}
.title-top-seller {
  padding: 50px 0;
  text-align: center;
}
.row-content {
  margin-right: -15px;
  margin-left: -15px;
}
.pro-loop {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  background: #fff;
  margin-bottom: 10px;
}
.pro-loop .product-img {
  text-align: center;
  position: relative;
  overflow: hidden;
}
.pro-loop .product-detail {
  padding: 20px 0;
}
.product-detail .box-pro-detail {
  text-align: center;
  width: 100%;
  z-index: 9;
}
.pro-loop .product-detail h3 {
  margin: 0 0 5px;
  font-size: 14px;
  position: relative;
}
p.pro-price.highlight {
  color: #f94c43;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
}
.flex {
  display: flex !important;
}
.wrap {
  flex-flow: wrap;
}
.col-md-3 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
}
a {
  color: #252a2b;
  text-decoration: none;
  outline: none;
}
a:hover,
a:focus {
  color: #6c6c70;
  text-decoration: none;
  outline: none;
}

.pro-loop .product-img picture {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
.div-variant {
  flex-wrap: wrap;
  display: flex;
  display: -moz-flex;
  display: -o-flex;
  width: 100%;
  position: absolute;
  bottom: -100%;
  z-index: 999;
  background: white;
  padding: 10px 0 0;
  transition: all 0.6s ease-in-out 0s;
  -moz-transition: all 0.6s ease-in-out 0s;
  -o-transition: all 0.6s ease-in-out 0s;
  -webkit-transition: all 0.6s ease-in-out 0s;
  -ms-transition: all 0.6s ease-in-out 0s;
  align-items: center;
  justify-content: center;
}
.div-variant > span {
  cursor: pointer;
  display: inline-block;
  width: 20%;
}
.product-img:hover .div-variant {
  display: inline;
}

/*Css phần tin tức */
.posts-list .post_item {
  margin-bottom: 30px;
  text-align: center;
}
.posts-list .post_featured {
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
}
.posts-list .post_item .post_info {
  text-transform: uppercase;
  margin-bottom: 10px;
}
.posts-list .post_item .post_info_item {
  color: #999;
  font-size: 90%;
}
.posts-list .post_item h3 {
  font-size: 18px;
  line-height: 22px;
  position: relative;
  padding-bottom: 12px;
}
.posts-list .post_item h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 2px;
  background: #f59505;
}
.font-size18 {
  font-size: 18px;
}
.title-news {
  padding: 50px 0;
  text-align: center;
}
</style>
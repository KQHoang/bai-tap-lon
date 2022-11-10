<template>
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
                <div
                  class="col-md-3 pro-loop"
                  v-for="(pro, index) in toppro"
                  :key="index"
                >
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                        :src="require(`@/assets/images/product-img/${pro.Image}`)"
                        alt=""
                        />
                      </picture>
                    </div>
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                            <router-link :to="`/detail/${pro.ProductID}`">
                                <a href="">{{ pro.ProductName }}</a>
                            </router-link>
                          
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>{{ this.priceArray[index] }}₫</span>
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
                <div
                  class="col-md-3 pro-loop"
                  v-for="(newp,index) in newpro"
                  :key="index"
                >
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          :src="require(`@/assets/images/product-img/${newp.Image}`)"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <a href="">{{newp.ProductName}}</a>
                        </h3>
                        <div class="box-pro-prices">
                          <p class="pro-price highlight">
                            <span>{{priceNew[index]}}₫</span>
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
</template>
<script>
import axios from "axios";
export default {
  name: "HomeLayout",
  data() {
    return {
      toppro: [],
      newpro: [],
      importPrice: 0,
      link: "",
      priceArray: [
        "657.7424",
        "627.7912",
        "360.7741",
        "192.1946",
        "978.6584",
        "828.9396",
        "476.3993",
        "312.8489",
      ],
      priceNew:["129.000","150.000","169.500","105.200"]
    };
  },
  methods: {
    
  },
  computed: {},
  async created() {
    var me = this;
    await axios
      .get(
        "http://localhost:3000/products/paging?Filter=&PageIndex=5&PageSize=8"
      )
      .then(function (res) {
        me.toppro = res.data.data;
        console.log(res);
        console.log(me.toppro[0].ProductName);
      })
      .catch(function (res) {
        console.log(res);
      });
    await axios
      .get(
        "http://localhost:3000/products/paging?Filter=&PageIndex=1&PageSize=4"
      )
      .then(function (res) {
        console.log(res);
        me.newpro = res.data.data;
      });
  },
};
</script>
<style scoped>
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

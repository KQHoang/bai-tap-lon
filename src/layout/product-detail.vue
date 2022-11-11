<template>
  <div class="product-detail-content">
    <div class="container-fluid">
      <div class="row-head breadcrumb-shop">
        <div class="url-detail">
          <ol class="breadcrumb breadcrumb-arrows">
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <!-- &nbsp;/&nbsp; -->
            <li>
              <a href="#">Sản phẩm quần áo nam thời trang nam mới nhất</a>
            </li>
            <!-- &nbsp;/&nbsp; -->
            <li>
              <a href="#">Sản phẩm</a>
            </li>
            <!-- &nbsp;/&nbsp; -->
            <li>
              <a href="#">Thời Trang Nam</a>
            </li>
            <!-- &nbsp;/&nbsp; -->
            <li>
              <a href="#">Áo</a>
            </li>
            <!-- &nbsp;/&nbsp; -->
            <li>
              <a href="#">{{ this.selectedPro.ProductName }}</a>
            </li>
          </ol>
        </div>
      </div>
      <div class="row-head product-detail-wrapper flex">
        <div class="url-detail w-50">
          <div class="row-head product-detail-main">
            <div class="flex">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <div class="item active">
                    <img
                      :src="
                        require(`@/assets/images/product-detail/${this.selectedPro.ProductID}/1.png`)
                      "
                      alt="Los Angeles"
                    />
                  </div>

                  <div class="item">
                    <img
                      :src="
                        require(`@/assets/images/product-detail/${this.selectedPro.ProductID}/2.png`)
                      "
                      alt="Chicago"
                    />
                  </div>

                  <div class="item">
                    <img
                      :src="
                        require(`@/assets/images/product-detail/${this.selectedPro.ProductID}/3.png`)
                      "
                      alt="New York"
                    />
                  </div>
                </div>

                <!-- Left and right controls -->
                <a
                  class="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="url-detail w-50">
          <div class="product-title">
            <h1>{{ this.selectedPro.ProductName }}</h1>
          </div>
          <div class="product-price">
            <span>{{ this.selectedPrice }}<span>₫</span></span>
          </div>
          <form class="product-colorsize">
            <table cellspacing="0" class="variations">
              <tbody>
                <tr>
                  <td class="label">
                    <label for="">Màu sắc</label>
                  </td>
                  <td class="value">
                    <div class="tawcvs-swatches"
                    v-for="(c,index) in colorPro"
                    :key="index">
                      <span class="swatch swatch-label swatch-m">{{convertColor(colorPro[index].Color)}}</span>
                    </div>
                    
                  </td>
                </tr>
                <tr>
                  <td class="label">
                    <label for="">Kích thước</label>
                  </td>
                  <td class="value">
                    <div class="tawcvs-swatches"
                    v-for="(s,index) in sizePro"
                    :key="index"
                    >
                      <span class="swatch swatch-label swatch-m">{{convertSize(sizePro[index].Size)}}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div class="product-quantity">
            <div class="selector-actions">
              <div class="quantity-area clearfix">
                <input
                  type="button"
                  value="-"
                  class="qty-btn"
                  @click="decPro"
                />
                <div class="quantity">
                  <input
                    class="input-text qty text"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                    v-model="soluong"
                    title="SL"
                    size="4"
                    inputmode="numeric"
                    type="text"
                  />
                </div>
                <input
                  type="button"
                  value="+"
                  class="qty-btn"
                  @click="incPro"
                />
              </div>
            </div>
          </div>
          <div class="addcart">
            <button
              class="button dark btn-addtocart"
              type="submit"
              @click="test"
            >
              <i class="fa fa-shopping-cart"> Thêm vào giỏ Hàng </i>
            </button>
          </div>
          <div class="product-description text-left">
            <div class="title-bl">
              <h2>Mô tả</h2>
            </div>
            <div class="description-content">
              <div class="description-productdetail">
                <div class="comment-container">
                  <p>
                    – Chất liệu: {{ this.selectedPro.Material }}<br />
                    – Kiểu dáng: RELAX<br />
                    – Màu sắc: XANH RÊU, NÂU, BE<br />
                    –
                    <strong
                      >Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ
                      thống</strong
                    >
                  </p>
                  <h2>HƯỚNG DẪN CHỌN SIZE</h2>
                  <p>
                    Size M: 50-57kg / Cao 1m53 – 1m68<br />
                    Size L: 58-64kg / Cao 1m57 – 1m70<br />
                    Size XL: 65-70kg / Cao 1m66 – 1m76<br />
                    Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1
                    size, chỉ số trên là tương đối mặc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-seller">
        <div class="title-top-seller">
          <div class="container-fluid">
            <h2 class="s-37">SẢN PHẨM LIÊN QUAN</h2>
          </div>
        </div>
        <div class="content-top-seller">
          <div class="container-fluid">
            <div class="row-content">
              <div class="product-list clearfix flex wrap">
                <div
                  class="col-md-3 pro-loop"
                  v-for="sl in relatePro"
                  :key="sl.ProductID"
                >
                  <div class="product-block">
                    <div class="product-img">
                      <picture>
                        <img
                          :src="
                            require(`@/assets/images/product-img/${sl.Image}`)
                          "
                          alt=""
                        />
                      </picture>
                    </div>
                    <div class="product-detail clearfix">
                      <div class="box-pro-detail">
                        <h3 class="pro-name">
                          <router-link :to="`/detail/${sl.ProductID}`">
                                <a href="">{{ sl.ProductName }}</a>
                            </router-link>
                          
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
  name: "productDetail",
  components: [],
  data() {
    return {
      soluong: 1,
      proID: 0,
      selectedPro: {},
      relatePro: [],
      selectedPrice: 0,
      colorPro:[],
      sizePro:[],
    };
  },
  methods: {
    convertSize(size){
      if(size==0) return "S";
      if(size==1) return "M";
      if(size==2) return "L";
      if(size==3) return "XL";
    },
    convertColor(color){
      if(color==0) return "Trắng";
      if(color==1) return "Đen";
      if(color==2) return "Xanh Navy";
      if(color==3) return "Xám";
      if(color==4) return "Be";
      if(color==5) return "Xanh nhạt";
      if(color==6) return "Vàng";
    },
    incPro() {
      this.soluong += 1;
    },
    decPro() {
      if (this.soluong == 1) return;
      else this.soluong -= 1;
    },
  },
  async created() {
    this.proID = this.$route.params.id;
    
    console.log(this.proID);
    var me = this;
    await axios
      .get(`http://localhost:3000/products/${me.proID}`)
      .then(function (res) {
        console.log(res);
        me.selectedPro = res.data[0];
      });
    await axios
      .get(`http://localhost:3000/productColors/${me.proID}`)
      .then(function (res) {
        console.log(res);
        me.colorPro=res.data;
        console.log(me.colorPro);
      });
    await axios
      .get(`http://localhost:3000/productSizes/${me.proID}`)
      .then(function (res) {
        console.log(res);
        me.sizePro=res.data;
      });
    await axios
      .get(
        "http://localhost:3000/products/paging?Filter=&PageIndex=12&PageSize=4"
      )
      .then(function (res) {
        console.log(res);
        me.relatePro = res.data.data;
      });
    await axios
      .get(`http://localhost:3000/prices/${me.proID}`)
      .then(function (res) {
        console.log(res);
        me.selectedPrice = res.data[0].ImportPrice;
      });
      console.log(this.convertColor(this.colorPro[0].Color));
  },
};
</script>
<style scoped>
.breadcrumb-shop .breadcrumb-arrows {
  padding: 10px 0;
  background: transparent;
  border-radius: 0;
  margin: 0;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
.url-detail {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.breadcrumb-shop {
  background: #f5f5f5;
}
.row-head {
  margin-right: -15px;
  margin-left: -15px;
}
.carousel-inner > .active {
  display: flex !important;
}
.flex {
  display: flex !important;
}
a {
  font-size: 13px;
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
.product-detail-wrapper {
  padding: 30px 0;
}
.product-detail-main {
  margin-bottom: 40px;
}
.product-gallery__thumbs-container {
  margin-right: 10px;
  max-height: 825px;
  overflow: hidden;
  width: 9%;
}
.product-image-detail {
  width: 91%;
  padding-left: 10px;
  position: relative;
}
.product-detail-main {
  margin-bottom: 40px;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
.w-50 {
  width: 50% !important;
}
.product-title {
  padding: 0 0 10px;
  border-bottom: 1px dotted #dfe0e1;
  text-align: left;
}
.product-title h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 5px;
  line-height: initial;
}
.product-price {
  padding: 10px 0;
  border-bottom: 1px dotted #dfe0e1;
  font-size: 18px;
  color: #f94c43;
  font-weight: bold;
  text-decoration: none;
  text-align: left;
}
table {
  width: 100%;
  border-spacing: 0;
  background-color: transparent;
  border-collapse: collapse;
}
table tr td,
table tr th {
  padding: 10px;
  text-align: left;
}
table tr td {
  border-top: 1px solid #dddddd!important;
}
tr:hover td{
  background: none!important;
}
td,
th {
  padding: 0;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
.label {
  width: 170px;
  color: #252a2b;
}
label {
  font-size: 14px;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.tawcvs-swatches .swatch-label {
  font-size: 14px;
  background-color: #f1f1f1;
}
.tawcvs-swatches .swatch {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  white-space: nowrap;
}
.tawcvs-swatches .swatch-label {
  border-radius: 0 !important;
  width: auto !important;
  min-width: 30px;
}
.swatch {
  width: 100%;
  float: left;
  border-bottom: 1px dotted #dfe0e1;
}
.swatch-control {
  overflow: hidden;
}
.swatch-wrapper {
  padding: 2px;
  background: #fff;
  border: 1px solid #ccc;
  float: left;
  margin: 0 5px 5px 0;
  border: none;
}
.swatch-wrapper a {
  display: block;
}
.swatch-anchor {
  max-height: 50px;
  max-width: 40px;
}
.h-60 {
  height: 60px !important;
}
.carousel {
  width: 100%;
}
.selector-actions {
  width: 100%;
  float: left;
  margin-top: 15px;
}
.quantity-area {
  margin-bottom: 15px;
}
.quantity-area input.qty-btn {
  float: left;
  background: #f5f5f5;
  border: solid 1px #f5f5f5;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 0;
}
.quantity-area input#quantity,
.quantity-area input.qty {
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  height: 32px;
  padding: 0;
  text-align: center;
  width: 70px;
  border: 1px solid #f5f5f5;
  border-left: none;
  border-right: none;
  border-radius: 1px;
  float: left;
  -webkit-appearance: none;
  color: #000;
}
.button.dark {
  color: #fff;
}
button.btn-addtocart {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: none;
  padding: 14px 35px;
  line-height: 22px;
  width: 100%;
}
.button {
  position: relative;
  display: inline-block;
  padding: 10px 28px;
  line-height: normal;
  border: 1px solid #ffffff;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  background-color: transparent;
  -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  color: #252a2b;
  overflow: hidden;
}
/* .button.dark:hover {
    color: #252a2b;
} */
.button.dark:before {
  background-color: #000;
}
.button:before {
  position: absolute;
  content: "";
  display: block;
  left: -2px;
  top: 0;
  right: -2px;
  bottom: 0;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  -webkit-transform-origin: left center;
  transform-origin: left center;
  z-index: -1;
  -webkit-transition: -webkit-transform 0.45s
    cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.product-description {
  margin: 20px 0;
}
p {
  margin: 0 0 10px 0;
  line-height: 21px;
  font-size: 14px;
}
.product-description .title-bl h2,
.product-description h2,
.product-description h3 {
  font-size: 14px;
  font-weight: 700;
}
.text-left {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #252a2b;
  margin: 0 0 13px 0;
  font-weight: 500;
  line-height: 1.2;
}

/*Sản phẩm liên quan*/
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
  /* z-index: 999; */
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
.s-37 {
  font-size: 37px;
}
</style>

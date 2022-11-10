<template>
    
    <div class="container-fluid">
      <div class="content-page">
        <div class="woocommerce">
          <div class="u-columns col2-set" id="customer_login">
            <div class="u-column1 col-1 pd-top" >
              <h2><span>Đăng nhập</span></h2>
              <form class="woocommerce-form woocommerce-form-login login">
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="username"
                    >Tên tài khoản hoặc địa chỉ email&nbsp;<span
                      class="required"
                      ></span
                    ></label
                  >
                  <input
                    type="text"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="password"
                    >Mật khẩu&nbsp;<span class="required"></span></label
                  >
                  <span class="password-input">
                    <input
                      type="password"
                      class="
                        woocommerce-Input woocommerce-Input--text
                        input-text
                      "
                      name="password"
                      id="password"
                      autocomplete="current-password"
                      value
                    />
                    <span class="show-password-input"></span>
                  </span>
                  <!-- <span class="show-password-input display-password"></span> -->
                </p>
                <p class="form-row">
                  <button
                    type="submit"
                    class="
                      woocommerce-button
                      button
                      woocommerce-form-login__submit
                    "
                  >
                    Đăng nhập
                  </button>
                  <label
                    class="
                      woocommerce-form__label
                      woocommerce-form__label-for-checkbox
                      woocommerce-form-login__rememberme
                    "
                  >
                    <input type="checkbox" />
                    <span>&nbsp;Ghi nhớ mật khẩu</span>
                  </label>
                </p>
                <p class="pd-top">
                  <a href="">Quên mật khẩu?</a>
                </p>
              </form>
            </div>
            <div class="u-column2 col-2 pd-top">
              <h2><span>Đăng ký</span></h2>
              <form class="woocommerce-form woocommerce-form-register register sigin" style="height:303px">
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Họ và tên đệm&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="firstname"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="firstname"
                    id="reg_firstname"
                    autocomplete="firstname"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Tên&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="lastname"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="lastname"
                    id="reg_lastname"
                    autocomplete="lastname"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Địa chỉ Email&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="email"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="email"
                    id="reg_email"
                    autocomplete="email"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Mật khẩu&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="password"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="password"
                    id="reg_password"
                    autocomplete="password"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Số điện thoại&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="phonenumber"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="phonenumber"
                    id="phonenumber"
                    autocomplete="phonenumber"
                    value
                  />
                </p>
                <p
                  class="
                    woocommerce-form-row woocommerce-form-row--wide
                    form-row form-row-wide
                  "
                >
                  <label for="reg_email"
                    >Địa chỉ&nbsp;<span class="required"></span></label
                  >
                  <input
                    type="address"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="address"
                    id="reg_address"
                    autocomplete="address"
                    value
                  />
                </p>
                <button
                  type="submit"
                  class="
                    woocommerce-button
                    button
                    size-14
                    woocommerce-form-login__submit
                  "
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
export default {
    name: "MainLayout",
    components: {
    },
    data(){
        return{
            
            productsCart: [{product:{id:1, name:"Áo nỉ nam ANHTK311 lalalalalalalaaaaaa - Đen, S", price:449}, quatity: 1, totalPro: 449}, 
            {product:{id:2, name:"Áo nỉ nam ANHTK310 - Đen, S", price:449}, quatity: 1, totalPro: 449}, 
            {product:{id:3, name:"Áo nỉ nam ANHTK312  - Đen, S", price:559}, quatity: 2, totalPro: 898}, 
            {product:{id:4, name:"Áo nỉ nam ANHTK314 - Đen, S", price:649}, quatity: 1, totalPro: 1796}, 
            {product:{id:5, name:"Áo nỉ nam ANHTK315 - Đen, S", price:449}, quatity: 1, totalPro: 2245}],
            totalMoney: 0,
            totalQuatity: 0,
        }
    },
    methods:{
        //Tính tổng tiền của cả giỏ hàng
        tongTien(){
            this.totalMoney = 0;
            this.productsCart.forEach(pro => {
                this.totalMoney += pro.totalPro;
            });
        },

        //Tính tổng số lượng của cả giỏ hàng
        tongQuatity(){
            this.totalQuatity = 0;
            this.productsCart.forEach(pro => {
                this.totalQuatity += pro.quatity;
            });
        },

        // Ẩn/hiện giỏ hàng
        showCart(isShow){
            this.isShowCart = isShow;
        },
        // Ấn vào button "Xem giỏ hàng" để hiện giỏ hàng
        btnSeeCart(){
            this.showCart(true);
        },
        // Lấy ra danh sách giỏ hàng
        getProductsCart(){
            // axios.get(``)
            // .then(function (res){

            // })
        },
    },
    created(){
        this.tongTien();
        this.tongQuatity();
    }
}
</script>
    
    <style scoped>
/**Css main content */
.sigin{
    height: 294px;
    overflow: auto;
}
.required{
    color: red;
}
.button:hover{
    background-color: #dfdcde;
    text-decoration: none;
    background-image: none;
    color: #515151;
}
.button:before {
    position: absolute;
    content: '';
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
}S
a:hover,
a:focus {
    color: #6c6c70;
    text-decoration: none;
    outline: none;
}
a {
    color: #252a2b;
    text-decoration: none;
    outline: none;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.woocommerce form.checkout_coupon,
.woocommerce form.login,
.woocommerce form.register {
  border: 1px solid #d3ced2;
  padding: 20px;
  margin: 2em 0;
  text-align: left;
  border-radius: 5px;
}
.woocommerce .col2-set .col-2, .woocommerce-page .col2-set .col-2 {
    float: right;
    width: 48%;
}
.breadcrumb {
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
}
.col-xs-12 {
    width: 100%;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    float: left;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px!important;
    padding-left: 15px!important;
}
@media (min-width: 768px){
.col-sm-12 {
    width: 100%;
}
.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
}
}
@media (min-width: 1200px){
.col-lg-12 {
    width: 100%;
}
.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
}
}

</style>

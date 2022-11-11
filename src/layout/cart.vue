<template>
    <div class="site-cart-big">
        <div class="cart-big-container">
            <div class="cart-big-header">
                <ol class="col-sm-12 col-lg-12 cart-big-title">
                    <li>
                        <a href="">Trang chủ</a>
                    </li>
                    /
                    <li>Giỏ hàng</li>
                </ol>
            </div>
            <br/>
            <div class="cart-big-content row">
                <div class="cart-show col-md-8">
                    <h4 class="cart-show-title">Tất cả mặt hàng (3)</h4>
                    <table class="cart-table">
                        <thead>
                            <tr>
                                <th class="product-delete">&nbsp;</th>
                                <th class="product-img">&nbsp;</th>
                                <th class="product-name">Sản phẩm</th>
                                <th class="product-price aligh-center">Giá</th>
                                <th class="product-quatity aligh-center">Số lượng</th>
                                <th class="product-total aligh-center">Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="pro in productsCart" :key="pro.product.id">
                                <td class="product-delete">
                                    <button><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                </td>
                                <td class="product-img">
                                    <img src="https://360boutique.vn/wp-content/uploads/2022/10/ANHTK311-QKLTK308-2-600x600.jpg" alt="Lỗi ảnh">
                                </td>
                                <td class="product-name">
                                    {{pro.product.name}}

                                </td>
                                <td class="product-price aligh-center">{{pro.product.price}}<sup><u>đ</u></sup></td>
                                <td class="product-quatity aligh-center">
                                    <div class="qty-opt">
                                        <button class="icon-qty-minus" @click="btnMinusQuatity(pro)">-</button>
                                        <input :value="pro.quatity" @change="quatityPro(pro)" type="text" class="qty-num">
                                        <button class="icon-qty-plus" @click="btnPlusQuatity(pro)">+</button>
                                    </div>
                                </td>
                                <td class="product-total aligh-center"><b>{{pro.totalPro}}<sup><u>đ</u></sup></b></td>
                            </tr>                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6" class="discount-code">
                                    <input type="text" placeholder="Mã giảm giá">
                                    <button class="btn-discount">Áp dụng</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="cart-money col-md-4">
                    <h4 class="cart-show-title">Tổng giỏ hàng</h4>
                    <div class="money-provisional">
                        <span>Tạm tính</span>
                        <span class="money-num"><b>{{moneyProv}}<sup><u>đ</u></sup></b></span>
                    </div>
                    <div class="money-total">
                        <span>Tổng tiền</span>
                        <span class="money-num"><b>{{moneyTotal}}-{{totalQuatity}}<sup><u>đ</u></sup></b></span>
                    </div>
                    <button class="btn-pay">Thanh toán ngay</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CartLayout",
    components: {
    },
    data(){
        return{
            productsCart: [{product:{id:1, name:"Áo nỉ nam ANHTK311 lalalalalalalaaaaaa - Đen, S", price:449}, quatity: 1, totalPro: 449}, 
            {product:{id:2, name:"Áo nỉ nam ANHTK310 - Đen, S", price:449}, quatity: 1, totalPro: 449}, 
            {product:{id:3, name:"Áo nỉ nam ANHTK312  - Đen, S", price:559}, quatity: 2, totalPro: 898}, 
            {product:{id:4, name:"Áo nỉ nam ANHTK314 - Đen, S", price:649}, quatity: 1, totalPro: 1796}, 
            {product:{id:5, name:"Áo nỉ nam ANHTK315 - Đen, S", price:449}, quatity: 1, totalPro: 2245}],
            totalQuatity: 0,
            moneyProv: 0,
            moneyTotal: 0,
        }
    },
    methods: {
        // Đọc tất cả số lượng sản phẩm
        totalQty(){
            this.totalQuatity = 0;
            this.productsCart.forEach(pro => {
                this.totalQuatity += pro.quatity;
            });
        },
        // Tính số tất cả tổng tiền
        totalMoney(){
            this.moneyProv = 0;
            this.moneyTotal = 0;
            this.productsCart.forEach(pro => {
                this.moneyProv += pro.totalPro;
            });
            this.moneyTotal = this.moneyProv;
        },
        //Click vào nút - để giảm số sp
        btnMinusQuatity(pro){
            try {
                if(pro.quatity == 1){
                    alert("Bạn có muốn xóa sp ko?");
                }
                else {
                    pro.quatity -= 1;
                    pro.totalPro = pro.quatity * pro.product.price;
                    this.totalMoney();
                    this.totalQty();
                }    
            } catch (error) {
                console.log(error);
                alert(error);
            }   
        },
        //Click vào nút + để tăng số sp
        btnPlusQuatity(pro){
            try {
                pro.quatity += 1;
                pro.totalPro = pro.quatity * pro.product.price;
                this.totalMoney();
                this.totalQty();
            } catch (error) {
                console.log(error);
                alert(error);
            } 
        },
        //Thay doi so luong sp
        quatityPro(pro){
            pro.totalPro = pro.quatity * pro.product.price;
        }
    },
    created(){
        this.totalQty();
        this.totalMoney();
    }
}
</script>
<style scoped>
.site-cart-big{  
    text-align: left;
    font-size: 14px;
}
.cart-big-container{    
    padding-right: 15px;
    padding-left: 15px;    
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
}
.cart-big-container .cart-big-header{
    
    margin-right: -15px;
    margin-left: -15px;
}
.cart-big-header ol{
    background: #f5f5f5;
    padding: 10px 15px !important;
    
}
.cart-big-header.cart-big-title{
    background: transparent;
}
.cart-big-title li{
    font-size: 13px !important;
}
.cart-big-title>li{
    display: inline-block;
}
.cart-big-title a{
    color: #252a2b;
    text-decoration: none;
    outline: none;
}
.cart-big-content{
    align-items: normal;
    padding-left: 15px !important;
    padding-right: 15px !important;
    margin-bottom: 30px;
    padding-top: 15px;
}
.cart-big-content .cart-show{
    
}
.cart-big-content .cart-show-title{
    font-size: 24px;
}
.cart-show table.cart-table{
    border: 1px solid rgba(0,0,0,.1);
    text-align: left;
    border-collapse: separate;
    border-radius: 5px;
    table-layout: fixed;
    /* text-align: center; */
}

.cart-table .aligh-center{
    text-align: center;
}

.cart-show .cart-table .product-delete{
    width: 5%;
}

.cart-show .cart-table .product-img{
    width: 15%;
}
.cart-show .cart-table .product-name{
    width: 35%;
}
.cart-show .cart-table .product-price{
    width: 15%;
}
.cart-show .cart-table .product-quatity{
    width: 15%;
}
.cart-show .cart-table .product-total{
    width: 15%;
}
.cart-show table.cart-table thead {
    display: table;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.cart-show table.cart-table tfoot{
    display: table;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 9px 12px;
}
table.cart-table thead tr th {
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
}
.cart-show table.cart-table tbody {
    min-height: 100px;
    max-height: 360px;
    overflow: auto;
    display: block;
    width: 100%;
} 

.cart-show table.cart-table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-top: 1px solid rgba(0,0,0,.1);
}

.cart-show table.cart-table tbody tr td{
    padding: 9px 12px;
    vertical-align: middle;
    line-height: 1.5em;
}

.cart-show table.cart-table tbody tr td{
    border-right: none;
}

.cart-show table.cart-table tbody tr:first-child {
    border-top: none;
}
.cart-table td.product-delete>button{
    color: #252a2b;
    border: none;
    background: none;
}
.cart-table td.product-delete>button:hover{
    color: red;
}
.cart-table td.product-img img{
    width: 70px;
}
.cart-table td.product-quatity .qty-opt{
    display: flex;
    align-content: center;
}
.cart-table td.product-quatity .qty-opt>input{
    width: 34px;
    height: 28px;
    line-height: 28px;
    text-align: center!important;
    border: none;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    font-size: 13px;
}
.cart-table td.product-quatity .qty-opt>input:hover{
    border: 1px solid #222;
    cursor: pointer;
}
.cart-table td.product-quatity .qty-opt>input:focus{
    border: 1px solid #222;
}
.qty-opt .icon-qty-minus{
    border-radius: 100px 0 0 100px;
}
.qty-opt .icon-qty-plus{
    border-radius: 0 100px 100px 0;
}
.qty-opt .icon-qty-minus, .icon-qty-plus{
    width: 25px;
    height: 28px;
    background: #fff;
    border: none;
    border: 1px solid #e6e6e6;
} 
.qty-opt .icon-qty-minus:hover, .icon-qty-plus:hover{
    border: 1px solid #222;
    cursor: pointer;
} 
.cart-table td.discount-code input{
    width: 100px;
    border: 1px solid #222;
    line-height: 30px;
}

.cart-table td.discount-code input:hover{
    cursor: pointer;
}
.cart-table td.discount-code .btn-discount{
    margin-left: 15px;
    padding: 5px 10px;
    border: none;
    background-color: #222222;
    color: #fff;
}
.cart-table td.discount-code .btn-discount:hover{
    background-color: #666;
}

.cart-big-content .cart-money{
    padding: 0 30px !important;
}
.cart-money>span{
    display: inline-block;
}
.cart-money .money-provisional{
    margin: 16px 0 24px 0;
    line-height: 24px;
}
.cart-money .money-total{
    margin-bottom: 24px;
    line-height: 24px;
}
.cart-money .money-num{
    float: right;
    font-size: 22px;
}
.cart-money .btn-pay{
    width: 100%;
    line-height: 54px;
    border: none;
    background-color: #222222;
    color: #fff;
    font-size: 18px;
    font-family: "Arial Black","Arial","Helvetica",sans-serif;
}
.cart-money .btn-pay:hover{
    background-color: #666;
}
</style>
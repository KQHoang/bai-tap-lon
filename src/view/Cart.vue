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
                                <th class="product-price">Giá</th>
                                <th class="product-quatity">Số lượng</th>
                                <th class="product-total">Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="product-delete">
                                    <a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                </td>
                                <td class="product-img">
                                    <img src="https://360boutique.vn/wp-content/uploads/2022/10/ANHTK311-QKLTK308-2-600x600.jpg" alt="Lỗi ảnh">
                                </td>
                                <td class="product-name">Áo nỉ nam ANHTK311 - Đen, S</td>
                                <td class="product-price">449.000<sup><u>đ</u></sup></td>
                                <td class="product-quatity">
                                    <div class="qty-opt">
                                        <button class="icon-qty-min">-</button>
                                        <input type="text" value="1" class="qty-num">
                                        <button class="icon-qty-plus">+</button>
                                    </div>
                                </td>
                                <td class="product-total"><b>449.000<sup><u>đ</u></sup></b></td>
                            </tr>
                            <tr>
                                <td class="product-delete">
                                    <a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                                </td>
                                <td class="product-img">
                                    <img src="https://360boutique.vn/wp-content/uploads/2022/10/ANHTK311-QKLTK308-2-600x600.jpg" alt="Lỗi ảnh">
                                </td>
                                <td class="product-name">Áo nỉ nam ANHTK311 - Đen, S</td>
                                <td class="product-price">555.000<sup><u>đ</u></sup></td>
                                <td class="product-quatity">
                                    <div class="qty-opt">
                                        <button class="icon-qty-min">-</button>
                                        <input type="text" value="2" class="qty-num">
                                        <button class="icon-qty-plus">+</button>
                                    </div>
                                </td>
                                <td class="product-total"><b>1.110.000<sup><u>đ</u></sup></b></td>
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
                    <h4>Tổng giỏ hàng</h4>
                    <div class="money-provisional">
                        <span>Tạm tính</span>
                        <span class="money-num"><b>1.559.000<sup><u>đ</u></sup></b></span>
                    </div>
                    <div class="money-total">
                        <span>Tổng tiền</span>
                        <span class="money-num"><b>1.559.000<sup><u>đ</u></sup></b></span>
                    </div>
                    <button class="btn-pay">Thanh toán ngay</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CartLayout"
}
</script>
<style scoped>
.site-cart-big{  
    text-align: left;
}
.cart-big-container{    
    padding-right: 15px;
    padding-left: 15px;    
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
}
.cart-big-header{
    background: #f5f5f5;
    margin-right: -15px;
    margin-left: -15px;
}
.cart-big-header ol{
    padding: 10px 15px !important;
    
}
.cart-big-header.cart-big-title{
    background: transparent;
}
.cart-big-title li{
    font-size: 13px;
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
    padding-left: 15px !important;
    padding-right: 15px !important;
    margin-bottom: 30px;
}
.cart-big-content .cart-show{
    
}
.cart-show .cart-table{
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    text-align: left;
    border-collapse: separate;
    border-radius: 5px;
}

.cart-show table.cart-table th {
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
}
.cart-show table.cart-table td {
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 9px 12px;
    vertical-align: middle;
    line-height: 1.5em;
}

.cart-table td.product-delete a{
    color: #252a2b;
}
.cart-table td.product-delete a:hover{
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
.qty-opt .icon-qty-min{
    border-radius: 100px 0 0 100px;
}
.qty-opt .icon-qty-plus{
    border-radius: 0 100px 100px 0;
}
.qty-opt .icon-qty-min, .icon-qty-plus{
    width: 25px;
    height: 28px;
    background: #fff;
    border: none;
    border: 1px solid #e6e6e6;
} 
.qty-opt .icon-qty-min:hover, .icon-qty-plus:hover{
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
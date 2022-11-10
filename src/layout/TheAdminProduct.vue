<template>
  <div class="t-dialog">
    <div
      class="popup-employee"
      id="dlgEmployeeDetail"
      element-loading-background="transparent"
    >
      <!-- Header form -->
      <header class="popup-header">
        <div class="popup-title">
          <div class="title-popup">{{formName}}</div>
        </div>
        <div class="popup-button">
          <el-tooltip content="Giúp">
            <div class="button-help has-tooltip"></div>
          </el-tooltip>
          <el-tooltip content="Đóng">
            <div
              class="button-close has-tooltip"
              id="btnClose"
              @click="btnCancelDialog"
            ></div>
          </el-tooltip>
        </div>
      </header>
      <!-- Content form -->
      <div class="popup-content">
        <div class="popup-form">
          <div class="row-input">
            <!-- <div class="input-box id" style="text-align=left;">
              <label for="" class="input-label required">Mã sản phẩm</label>
              <input type="text" v-model="product.ProductID">
            </div> -->
            <div class="input-box name">
              <label for="" class="input-label required">Tên sản phẩm</label>
              <input type="text" v-model="product.ProductName" />
            </div>
          </div>
          <div class="row-input">
            <div class="input-box material">
              <label for="" class="input-label">Chất liệu</label>
              <input type="text" v-model="product.Material" />
            </div>
            <div class="input-box image">
              <label for="" class="input-label">Hình ảnh</label>
              <input type="text" v-model="product.Image" />
            </div>
          </div>
          <div class="row-input">
            <div class="input-box">
              <label for="" class="input-label required"
                >Mã loại sản phẩm</label
              >
              <select class="height" v-model="product.CategoryID">
                <option
                  v-for="item in categorys"
                  :key="item.CategoryID"
                  :label="item.CategoryName"
                  :value="item.CategoryID"
                ></option>
              </select>
            </div>
            <div class="input-box">
              <label for="" class="input-label required">Mã nhà cung cấp</label>
              <select class="height" v-model="product.SupplierID">
                <option
                  v-for="item in suppliers"
                  :key="item.SupplierID"
                  :label="item.SupplierName"
                  :value="item.SupplierID"
                ></option>
              </select>
            </div>
            <div class="input-box">
              <label for="" class="input-label">Số lượng</label>
              <input type="text" v-model="product.Quantity" />
            </div>
          </div>
          <div class="row-input">
            <div class="input-box">
              <label for="" class="input-label">Mô tả</label>
              <textarea
                rows="5"
                cols="70"
                v-model="product.Description"
              ></textarea>
            </div>
          </div>
        </div>
        <!-- Button hủy, cất và thêm -->
        <div class="popup-footer">
          <div class="divide"></div>
          <div class="footer-container">
            <div class="right-button">
              <button
                class="btn-default button-store"
                @click="btnCancelDialog"
                id="btnSave"
              >
                Hủy
              </button>
              <button class="t-button-add" id="btnSaveAndAdd" @click="btnSave">
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(../css/ad_product.css);
</style>
<script>
import axios from "axios";
// import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      product: {}, //đối tượng sản phẩm
      products: [], //mảng đối tượng nhân viên
      categorys: [], //mảng loại sản phẩm
      suppliers: [], //mảng nhà cung cấp
      isEdit: 0, //0-thêm mới, 1-sửa
      formName: "", //tên form khi thay đổi,
      contentMessage: "", //nội dung thông báo
    };
  },
  props: {
    productSelected: {
      type: Object,
    },
    editMode: {
      type: Number,
      default: 0, //0-thêm mới, 1-sửa
      required: true,
    },
  },
  methods: {
    /**
     * Khi nhấn vào nút hủy sẽ thực hiện đóng form
     */
    btnCancelDialog() {
      this.$emit("closeDialog", false);
    },
    /**
     * Thực hiện gửi dữ liệu lên server (thêm mới hoặc sửa)
     */
    async send() {
      var me = this;
      //Thêm mới
      if (!this.isEdit) {
        await axios
          .post(`http://localhost:3000/products`, me.product)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (res) {
            console.log(res);
          });
      }
      //sửa
      if (this.isEdit) {
        
        let productUpdate = {};
        productUpdate.ProductID = this.product.ProductID;
        productUpdate.ProductName = this.product.ProductName;
        productUpdate.Image = this.product.Image;
        productUpdate.Description = this.product.Description;
        productUpdate.CategoryID = this.product.CategoryID;
        productUpdate.Material = this.product.Material;
        productUpdate.Quantity = this.product.Quantity;
        productUpdate.SupplierID = this.product.SupplierID;
        console.log(productUpdate);
        await axios
          .put(`http://localhost:3000/products`, productUpdate)
          .then(function (res) {
            
            console.log(res);
          })
          .catch(function (res) {
            console.log(res);
          });
      }
    },
    /**
     * Khi nhấn button Lưu sẽ thực hiện lưu dữ liệu
     */
    btnSave() {
      try {
        this.send();
        if (!this.isEdit) this.contentMessage = "Thêm mới thành công!";
          else {
            this.contentMessage = "Cập nhật thành công!";
            this.formName = "Thêm mới sản phẩm";
            this.isEdit = 0;
          }
        this.product = {};
        this.$emit("showReLoad", true);
        this.$emit("closeDialog", false);
        this.$emit("reFresh", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.isEdit = this.editMode;
    this.product = JSON.parse(JSON.stringify(this.productSelected));
    var me = this;
    //lấy tất cả loại sản phẩm
    axios
      .get(`http://localhost:3000/categorys`)
      .then(function (res) {
        me.categorys = res.data;
      })
      .catch(function (res) {
        console.log(res);
      });
    //lấy tất cả nhà cung cấp
    axios
      .get(`http://localhost:3000/suppliers`)
      .then(function (res) {
        me.suppliers = res.data;
      })
      .catch(function (res) {
        console.log(res);
      });
      //Thêm mới
      if(this.editMode == 0){
        this.formName = "Thêm mới sản phẩm";
      }
      if(this.editMode == 1){
        this.formName = "Cập nhật sản phẩm";
      }
  },
};
</script>

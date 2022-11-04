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
          <div class="title-popup">Thêm mới sản phẩm</div>
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
            <div class="input-box id" style="text-align=left;">
              <label for="" class="input-label required">Mã sản phẩm</label>
              <input type="text" name="" value="">
            </div>
            <div class="input-box name">
              <label for="" class="input-label">Tên sản phẩm</label>
              <input type="text" name="" value="">
            </div>

          </div>
          <div class="row-input ">
            <div class="input-box material">
              <label for="" class="input-label">Chất liệu</label>
              <input type="text" name="" value="">
            </div>
            <div class="input-box image">
              <label for="" class="input-label">Hình ảnh</label>
              <input type="text" name="" value="">
            </div>
          </div>
          <div class="row-input">
            <div class="input-box">
                  <label for="" class="input-label required">Mã loại sản phẩm</label>
                  <select class="height">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div class="input-box">
                  <label for="" class="input-label required">Mã nhà cung cấp</label>
                  <select class="height">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div class="input-box ">
              <label for="" class="input-label">Số lượng</label>
              <input type="text" name="" value="">
            </div>

          </div>
          <div class="row-input">
            <div class="input-box">
              <label for="" class="input-label">Mô tả</label>
              <textarea rows="5" cols="70"></textarea>
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
              <button
                class="t-button-add"
                id="btnSaveAndAdd"
              >
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
export default{
  methods:{
    btnCancelDialog(){
      this.$emit("closeDialog", false);
    }
  }
}
</script>

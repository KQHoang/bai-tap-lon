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
          <div class="title-popup">Thêm mới người dùng</div>
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
            <div class="input-box firstname" style="text-align=left;">
              <label for="" class="input-label">Họ</label>
              <input type="text" v-model="account.LastName">
            </div>
            <div class="input-box lastname">
              <label for="" class="input-label">Tên</label>
              <input type="text" v-model="account.FirstName">
            </div>

          </div>
          <div class="row-input ">
            <div class="input-box material">
              <label for="" class="input-label">Mật khẩu</label>
              <input type="text" v-model="account.Password">
            </div>
            <div class="input-box image">
              <label for="" class="input-label">Email</label>
              <input type="text" v-model="account.Email">
            </div>
          </div>
          <div class="row-input ">
            <div class="input-box material">
              <label for="" class="input-label">Số điện thoại</label>
              <input type="text" v-model="account.PhoneNumber">
            </div>
            <div class="input-box image">
              <label for="" class="input-label">Địa chỉ</label>
              <input type="text" v-model="account.Address">
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
                @click="btnSave"
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
import axios from 'axios'
export default{
  data(){
    return{
      account: {}, //đối tượng sản phẩm
      acounts: [], //mảng đối tượng nhân viên
      isEdit: 0, //0-thêm mới, 1-sửa
    }
  },
  props:{
    accountSelected:{
      type: Object,
    },
    editMode:{
      type: Number,
      default: 0, //0-thêm mới, 1-sửa
      required: true

    },
  },
  methods:{
    /**
     * Khi nhấn vào nút hủy sẽ thực hiện đóng form
     */
    btnCancelDialog(){
      this.$emit("closeDialog", false);
    },
    /**
     * Thực hiện gửi dữ liệu lên server (thêm mới hoặc sửa)
     */
    
    async send(){
      
      var me = this;
      //Thêm mới
      if(!this.isEdit){
       await axios 
          .post(`http://localhost:3000/accounts`, me.account)
          .then(function(res){
            
            console.log(res);
          })
          .catch(function(res){
            console.log(res);
          })
      }
      //sửa
      if(this.isEdit){
        let accountUpdate = {};
        accountUpdate.AccountID = this.account.AccountID;
        accountUpdate.FirstName = this.account.FirstName;
        accountUpdate.LastName = this.account.LastName;
        accountUpdate.PhoneNumber = this.account.PhoneNumber;
        accountUpdate.Email = this.account.Email;
        accountUpdate.Password = this.account.Password;
        accountUpdate.Address = this.account.Address;
        console.log(accountUpdate);
       await axios 
          .put(`http://localhost:3000/accounts`, accountUpdate)
          .then(function(res){
            // console.log(me.a);
            console.log(res);
          })
          .catch(function(res){
            console.log(res);
          })
      }
    },
    /**
     * Khi nhấn button Lưu sẽ thực hiện lưu dữ liệu
     */
    btnSave(){
      try {
        this.send();
        this.account = {};
        this.$emit("closeDialog", false);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created(){
    this.isEdit = this.editMode;
    this.account = JSON.parse(JSON.stringify(this.accountSelected));

  },

}
</script>

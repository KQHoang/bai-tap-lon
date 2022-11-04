<template>
    <div class="t-content-main the-content" id="content">
              <div class="t-main-header">
              <div class="t-header-title">Danh sách sản phẩm</div>
              <button class="t-button-add" id="btnAdd" @click="btnAddProduct">
                Thêm mới 
              </button>
            </div>
            <div class="t-main-body">
      <!-- Search -->
      <div class="t-main-search">
        <div class="t-search-right">
          <div class="t-search-gr">

            <input
              class="t-input"
              type="text"
              placeholder="Tìm theo mã, tên sản phẩm"
            />
            <button class="t-button-add"> Tìm kiếm</button>
          </div>

          <!-- <el-tooltip content="Lấy lại dữ liệu">
            <div
              class="icon t-icon-refresh mi-refresh"
              id="load-data"
            ></div>
          </el-tooltip> -->
        </div>
      </div>
      <!-- Table -->
      <div class="t-main-table">
        <div class="t-table">
          <table class="t-table-viewer">
            <thead>
              <tr>
                <th class="t-checkbox-td">
                  <input
                    class="t-checkbox"
                    type="checkbox"
                  />
                </th>
                <th class="width-id">PRODUCTID</th>
                <th class="width-name">PRODUCTNAME</th>
                <th class="width-image">IMAGE</th>
                <th class="width-des">DESCRIPTION</th>
                <th class="width-catid">CATEGORYID</th>
                <th class="width-material">MATERIAL</th>
                <th class="width-quantity">SỐ LƯỢNG</th>
                <th class="width-quantity">SUPPLIERID</th>
                <th class="width-status"></th>
              </tr>
            </thead>
            <tbody>
              <tr
              >
                <td class="t-checkbox-td checkbox">
                  <input

                    class="t-checkbox"
                    type="checkbox"
                  />
                </td>
                <td>NV-0001</td>
                <td>Vũ Thị Phương Thảo</td>
                <td>1.jpg</td>
                <td>Áo phông màu đen size M</td>
                <td class="text-align">1</td>
                <td>Chất liệu cotton</td>
                <td class="text-align">3</td>
                <td class="text-align">1</td>
                <td class="td-btn td-btn-add">
                    <div style="display:flex; padding-left: 10px;" >
                      <div class="tbl-btn tbl-btn-add" >
                      <div class="tbl-btn-edit">
                        <i class="block-delete"></i>
                      </div>
                    </div>
                    <div class="tbl-btn tbl-btn-add">
                      <div class="tbl-btn-delete">
                        <i class="block-delete"></i>
                      </div>
                    </div>
                    </div>
                  </td>
                 
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    <TheAdminProduct v-if="isShowDialog"
    @closeDialog= "showDialog"/>
                </div>
</template>
<script>
import TheAdminProduct from '../layout/TheAdminProduct.vue'
export default{
    name: 'MainProduct',
    components:{
      TheAdminProduct
    },
    data(){
      return{
        isShowDialog: false,
      }
    },
  
  methods:{
    showDialog(isShow){
      this.isShowDialog = isShow;
    },
    btnAddProduct(){
      this.showDialog(true);
    }
  }
}
</script>

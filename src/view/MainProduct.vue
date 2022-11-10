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
              v-model="search"
              @keyup="searchData"
            />
            <button class="t-button-add">Tìm kiếm</button>
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
                  <input class="t-checkbox" type="checkbox" />
                </th>
                <th class="width-id">PRODUCTID</th>
                <th class="width-name">PRODUCTNAME</th>
                <th class="width-image">IMAGE</th>
                <!-- <th class="width-des">DESCRIPTION</th> -->
                <th class="width-catid">CATEGORYID</th>
                <th class="width-material">MATERIAL</th>
                <th class="width-quantity">SỐ LƯỢNG</th>
                <th class="width-quantity">SUPPLIERID</th>
                <th class="width-status"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="emp in products"
                :key="emp.ProductID"
                @dblclick="dblShowDialog(emp)"
              >
                <td class="t-checkbox-td checkbox">
                  <input class="t-checkbox" type="checkbox" />
                </td>
                <td>{{ emp.ProductID }}</td>
                <td>{{ emp.ProductName }}</td>
                <td>{{ emp.Image }}</td>
                <!-- <td>{{ emp.Description }}</td> -->
                <td class="text-align">{{ emp.CategoryID }}</td>
                <td>{{ emp.Material }}</td>
                <td class="text-align">{{ emp.Quantity }}</td>
                <td class="text-align">{{ emp.SupplierID }}</td>
                <td class="td-btn td-btn-add">
                  <div style="display: flex; padding-left: 10px">
                    <div class="tbl-btn tbl-btn-add">
                      <div class="tbl-btn-edit">
                        <i class="block-delete" @click="dblShowDialog(emp)"></i>
                      </div>
                    </div>
                    <div class="tbl-btn tbl-btn-add">
                      <div class="tbl-btn-delete">
                        <i
                          class="block-delete"
                          @click="btnDeleteProduct(emp)"
                        ></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Footer - page -->
        <div class="t-footer">
          <div class="t-main-footer">
            <div class="t-footer-left">
              Tổng số: <b>{{ count }}</b> bản ghi
            </div>
            <div class="t-footer-right">
              <el-select
                placeholder="Chọn bản ghi trên 1 trang"
                class="sel-footer-right"
                v-model="pageSizing.id"
                size="large"
                :autocomplete="on"
                v-on:change="pageTest"
                :filterable="true"
              >
                <el-option
                  class="ops-footer-right"
                  v-for="item in pageSizing"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                />
              </el-select>
              <!-- Phân trang -->
              <div class="t-footer-page">
                <el-pagination
                  v-model:currentPage="currentPage"
                  v-model:page-size="pageSize"
                  @current-change="pageChangeClick"
                  @size-change="handleSizeChange"
                  :pager-count="4"
                  small
                  background
                  layout="prev, pager, next"
                  prev-text="Trước"
                  next-text="Sau"
                  :total="count"
                  class="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheAdminProduct
      v-if="isShowDialog"
      @closeDialog="showDialog"
      @showReLoad="showReLoad"
      @reFresh="reFresh"
      :productSelected="productSelected"
      :editMode="editMode"
    />
   

    <!-- Loading -->
    <TLoading v-if="isLoading" />
  </div>
  <!-- Form thông báo khi xóa -->
  <div v-if="isDelete" class="t-dialog-error">
    <div class="t-content-dialog">
      <div class="t-header-error">
        <div class="t-icon-ms icon-warning"></div>
        <div class="t-ms-content">
          {{ isContentDelete }}
        </div>
      </div>
      <div class="t-ms-line"></div>
      <div class="t-footer-error">
        <div class="t-footer-close">
          <button class="btn-default button-error" @click="btnNoDelete">
            Không
          </button>
          <button class="t-button-add" @click="btnYesDelete">Có</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheAdminProduct from "../layout/TheAdminProduct.vue";
import TLoading from "../layout/TLoading.vue";
import axios from "axios";
import { ElMessage } from "element-plus";
export default {
  name: "MainProduct",
  components: {
    TheAdminProduct,
    TLoading,
  },
  data() {
    return {
      isShowDialog: false, //biến hiển thị form thêm mới
      products: [], //danh sách sản phẩm
      productSelected: {}, //sản phẩm chọn
      isDelete: false, //biến hiển thị cảnh báo xóa
      productDelete: {}, //sản phẩm xóa
      isContentDelete: "", //nội dung messgae xóa
      isLoading: false, //biến hiển thị loading
      editMode: 0, //thực hiện thêm mới
      pageSizing: [
        { id: 10, title: "10 bản ghi trên 1 trang" },
        { id: 20, title: "20 bản ghi trên 1 trang" },
        { id: 30, title: "30 bản ghi trên 1 trang" },
        { id: 50, title: "50 bản ghi trên 1 trang" },
        { id: 100, title: "100 bản ghi trên 1 trang" },
      ],
      count: 0, //số lượng sản phẩm
      currentPage: 1, //trang hiện tại
      pageSize: 10, //số lượng bản ghi trên 1 trang
      search: "", //nội dung tìm kiếm
    };
  },

  methods: {
    showDialog(isShow) {
      this.isShowDialog = isShow;
    },
    reFresh(isReFresh) {
      if (isReFresh) setTimeout(() => this.getPaging(), 500);
    },
    showReLoad(isShow) {
      if (!isShow) {
        return;
      }
      // hiển thị thông báo thực hiện thành công
      ElMessage({
        message: "Thao tác thành công!",
        grouping: true,
        type: "success",
        duration: 2000,
      });

      //this.reLoad();
      setTimeout(() => this.reLoad(), 500);
    },
    /**
     * Khi nhấn vào button thêm mới sẽ hiển thị form thêm mới sản phẩm
     */
    btnAddProduct() {
      try {
        this.showDialog(true);
        this.editMode = 0;
        this.productSelected = {};
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Gán dữ liệu cho danh sách, gán số lượng bản ghi
     */
    errorAndData(res) {
      if (!res) {
        console.log("Có lỗi xảy ra!");
        return;
      } 
        console.log(res);
        this.products = res.data.data;
        this.count = res.data.totalRecord;
      
    },
    /**
     * Trang thay đổi
     */
    pageChangeClick() {
      try {
        this.kpSearch();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Số lượng bản ghi trên trang thay đổi
     */
    handleSizeChange() {
      try {
        this.kpSearch();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Thay đổi sựa chọn số bản ghi trên 1 trang
     */
     pageTest() {
      
      this.pageSize = this.pageSizing.id;
      // console.log(this.pageSize);
      this.getPaging();
      this.handleSizeChange();
    },
    /**
     * Thực hiện chức năng tìm kiếm
     */
    kpSearch() {
      try {
        var me = this;
        var key = this.search;
        setTimeout(function () {
          me.products = {};
          me.isLoading = true;
          // Thực hiện tìm kiếm dữ liệu
          axios
            .get(
              `http://localhost:3000/products/paging?Filter=${key}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`
            )
            .then(function (res) {
              if (res == null) return console.log(res);
              console.log(me.pageSize);
              me.isLoading = false;
              me.errorAndData(res);
            })
            .catch(function (err) {
              console.log(err);
            });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Chức năng phân trang
     */
    getPaging() {
      var me = this;
      // Thực hiện tìm kiếm dữ liệu
      axios
        .get(
          `http://localhost:3000/products/paging?Filter=${this.search}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`
        )
        .then(function (res) {
          console.log(res);
          if (res == null) return console.log(res);
          me.errorAndData(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    /**
     * Tìm kiếm
     */
    searchData() {
      setTimeout(() => this.getPaging(), 1000);
    },
    /**
     * Khi doubleclick vào 1 phần tử trên table hoặc icon pencil sẽ hiện lên thông tin chi tiết tương ứng
     */
    dblShowDialog(emp) {
      console.log(emp);
      try {
        if (emp) {
          this.productSelected = emp;
          this.isShowDialog = true;
          this.editMode = 1;
          this.productDelete = emp;
        } else {
          console.log(emp);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 
     */
    //  btnUpdate(emp){
    //       this.productSelected = emp;
    //       this.isShowDialog = true;
    //       this.editMode = 1;
    //       this.productDelete = emp;
    //  }
    /**
     * Khi nhấn vào icon xóa sẽ hiển thị thông báo xóa với thông tin nhân viên tương ứng
     */
    btnDeleteProduct(emp) {
      this.isDelete = true;
      this.productDelete = emp;
      this.isContentDelete =
        "Bạn có thực sự muốn xóa sản phẩm <" + emp.ProductID + "> không?";
    },
    /**
     * Không đồng ý xóa
     */
    btnNoDelete() {
      this.isDelete = false;
      this.productDelete = {};
    },
    /**
     * Đồng ý xóa
     */
    btnYesDelete() {
      var me = this;
      try {
        axios
          .delete(
            `http://localhost:3000/products/${me.productDelete.ProductID}`
          )
          .then(function (res) {
            console.log(res);
            ElMessage({
              message: "Xóa thành công!",
              grouping: true,
              type: "success",
              duration: 2000,
            });
            me.isDelete = false;
            me.productDelete = {};
            me.reLoad();
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Lấy lại dữ liệu từ server
     */
    reLoad() {
      try {
        var me = this;
        this.isLoading = true;
        axios
          .get(`http://localhost:3000/products/paging?Filter=${me.search}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`)
          .then(function (res) {
            console.log(res);
            me.errorAndData(res);
            setTimeout(() => (me.isLoading = false), 1000);
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    try {
      this.reLoad();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

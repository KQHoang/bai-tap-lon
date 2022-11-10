<template>
  <div class="t-content-main the-content" id="content">
    <div class="t-main-header">
      <div class="t-header-title">Danh sách người dùng</div>
      <button class="t-button-add" id="btnAdd" @click="btnAddUser">
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
                <th class="width-accountid">MÃ NGƯỜI DÙNG</th>
                <th class="width-fname">HỌ</th>
                <th class="width-lname">TÊN</th>
                
                <th class="width-phone">SỐ ĐIỆN THOẠI</th>
                <th class="width-email">EMAIL</th>
                <!-- <th class="width-pass">PASSWORD</th> -->
                <th class="width-address">ĐỊA CHỈ</th>
                <th class="width-status"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="emp in accounts"
                :key="emp.AccountID"
                @dblclick="dblShowDialog(emp)"
              >
                <td class="t-checkbox-td checkbox">
                  <input class="t-checkbox" type="checkbox" />
                </td>
                <td>{{ emp.AccountID }}</td>
                <td>{{ emp.LastName }}</td>
                <td>{{ emp.FirstName }}</td>   
                
                      
                <td class="text-align">{{ emp.PhoneNumber }}</td>
                <td>{{ emp.Email }}</td>
                <!-- <td>{{emp.Password}}</td> -->
                <td>{{ emp.Address }}</td>
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
                          @click="btnDeleteAccount(emp)"
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
                  :pager-count="3"
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
    <TheAdminAccount
      v-if="isDialogAccount"
      @closeDialog="showDialog"
      :accountSelected="accountSelected"
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
import TheAdminAccount from "../layout/TheAdminAccount.vue";
import TLoading from "../layout/TLoading.vue";
import axios from "axios";
import { ElMessage } from "element-plus";
export default {
  name: "MainUser",
  components: {
    TheAdminAccount,TLoading
  },
  data() {
    return {
      isDialogAccount: false, //biến hiển thị form thêm mới
      accounts: [], //danh sách người dùng
      accountSelected: {}, //người dùng chọn
      isLoading: false, //biến hiển thị loading
      isDelete: false, //biến hiển thị cảnh báo xóa
      accountDelete: {}, //sản phẩm xóa
      isContentDelete: "", //nội dung messgae xóa
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
      this.isDialogAccount = isShow;
    },
    btnAddUser() {
      this.showDialog(true);
      this.editMode = 0;
      this.accountSelected = {};
    },
    reLoad() {
      try {
        var me = this;
        this.isLoading = true;
        axios
          .get(`http://localhost:3000/accounts/paging?Filter=${me.search}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`)
          .then(function (res) {
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
     * Gán dữ liệu cho danh sách, gán số lượng bản ghi
     */
    errorAndData(res) {
      if (!res) {
        console.log("Có lỗi xảy ra!");
        return;
      }
      console.log(res);
      this.accounts = res.data.data;
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
          me.accounts = {};
          me.isLoading = true;
          // Thực hiện tìm kiếm dữ liệu
          axios
            .get(
              `http://localhost:3000/accounts/paging?Filter=${key}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`
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
          `http://localhost:3000/accounts/paging?Filter=${this.search}&PageIndex=${me.currentPage}&PageSize=${me.pageSize}`
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
          this.accountSelected = emp;
          this.isDialogAccount = true;
          this.editMode = 1;
          this.accountDelete = emp;
        } else {
          console.log(emp);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Khi nhấn vào icon xóa sẽ hiển thị thông báo xóa với thông tin nhân viên tương ứng
     */
    btnDeleteAccount(emp) {
      this.isDelete = true;
      this.accountDelete = emp;
      this.isContentDelete =
        "Bạn có thực sự muốn xóa người dùng <" + emp.AccountID + "> không?";
    },
    /**
     * Không đồng ý xóa
     */
    btnNoDelete() {
      this.isDelete = false;
      this.accountDelete = {};
    },
    /**
     * Đồng ý xóa
     */
    btnYesDelete() {
      var me = this;
      try {
        axios
          .delete(
            `http://localhost:3000/accounts/${me.accountDelete.AccountID}`
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
            me.accountDelete = {};
            me.reLoad();
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

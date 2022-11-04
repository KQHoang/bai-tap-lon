<template>
    <div class="t-content-main the-content" id="content">
              <div class="t-main-header">
              <div class="t-header-title">Danh sách người dùng</div>
              <button class="t-button-add" id="btnAdd">
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
                <th class="width-id">ACCOUNTID</th>
                <th class="width-name">FIRSTNAME</th>
                <th class="width-image">LASTNAME</th>
                <th class="width-des">PHONENUMBER</th>
                <th class="width-catid">EMAIL</th>
                <th class="width-material">PASSWORD</th>
                <th class="width-quantity">ADDRESS</th>
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
                <td>Vũ </td>
                <td>Thảo</td>
                <td class="text-align">0365186564</td>
                <td >thaovu13092001@gmail.com</td>
                <td>123456</td>
                <td>Thái Bình</td>
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
                </div>
</template>
<script>
export default{
    name: 'MainUser'
}
</script>
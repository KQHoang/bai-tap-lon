<template>
  <div class="content-page">
    <div class="woocommerce">
      <div class="u-columns col2-set" id="customer_login">
        <div class="u-column1 col-1">
          <h2><span>Đăng nhập</span></h2>
          <form class="woocommerce-form woocommerce-form-login login">
            <p
              class="
                woocommerce-form-row woocommerce-form-row--wide
                form-row form-row-wide
              "
            >
              <label for="username"
                >Tên tài khoản hoặc địa chỉ email&nbsp;<span class="required"
                  >*</span
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
                >Mật khẩu&nbsp;<span class="required">*</span></label
              >
              <span class="password-input">
                <input
                  type="password"
                  class="woocommerce-Input woocommerce-Input--text input-text"
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
                class="woocommerce-button button woocommerce-form-login__submit"
              >
                Đăng nhập
              </button>
              <label
                class="
                  woocommerce-form__label woocommerce-form__label-for-checkbox
                  woocommerce-form-login__rememberme
                "
              >
                <input type="checkbox" />
                <span>&nbsp;Ghi nhớ mật khẩu</span>
              </label>
            </p>
            <p class="">
              <a href="">Quên mật khẩu?</a>
            </p>
          </form>
        </div>
        <div class="u-column2 col-2">
          <h2><span>Đăng ký</span></h2>
          <form class="woocommerce-form woocommerce-form-register register">
            <p
              class="
                woocommerce-form-row woocommerce-form-row--wide
                form-row form-row-wide
              "
            >
              <label for="reg_email"
                >Địa chỉ Email&nbsp;<span class="required">*</span></label
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
            <p>Một mật khẩu sẽ được gửi đến địa chỉ email của bạn.</p>
            <div>
              <p>
                Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải nghiệm sử
                dụng website, quản lý truy cập vào tài khoản của bạn, và cho các
                mục đích cụ thể khác được mô tả trong chính sách riêng tư.
              </p>
            </div>
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
</template>
<style>
@import url(../css/signin.css);
</style>
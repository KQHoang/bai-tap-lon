<template>
  <div>
    <!-- <main-layout/> -->
    <TheAdmin/>
  </div>

</template>

<script>
// import LayoutMain from '@/layout/main.vue'
import TheAdmin from '@/layout/TheAdmin.vue'
export default {
  name: 'App',
  components: {
    // 'main-layout': LayoutMain,
    TheAdmin
  }
}
</script>
<style>
/* @import url(@/css/fontAwesome.css);
@import url(@/css/flexBox.css); */
@import url(@/css/admin.css);
@import url(@/css/ad_product.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding: 0 !important;
    margin: 0 !important;
}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;
    margin: 0;
    color: #000000;
    box-sizing: border-box;
}
</style>

<template>
<!-- <main-layout/> -->
<home-layout/>
</template>

<script>
import LayoutMain from '@/layout/main.vue'
import LayoutHome from '@/layout/home.vue'
export default {
  name: 'App',
  components: {
    'main-layout': LayoutMain,
    'home-layout':LayoutHome
  }
}
</script>
<style>
@import url(@/css/fontAwesome.css);
@import url(@/css/flexBox.css);
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
</style>

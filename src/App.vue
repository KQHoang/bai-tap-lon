<template>
<main-layout/>
</template>

<script>
import LayoutMain from '@/layout/main.vue'

export default {
  name: 'App',
  components: {
    'main-layout': LayoutMain 
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

/* CSS cho scrollbar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;   
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

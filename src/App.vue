<template>
  <div class="app">
    <div>
      <Navbar></Navbar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}

</script>
<style>
@import '@/assets/css/style.css';
@import '@/assets/css/font-awesome.min.css';

/* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}*/
</style>

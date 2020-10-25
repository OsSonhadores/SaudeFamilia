<template>

    <b-container>
        main
    <navbar/>
    <b-row class="justify-content-md-center mt-4 form">
        <span>Main</span>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "../utils/navbar.vue";
export default {
  data() {
    return {
      msg: "Olá Mundo!",
    };
  },
  components: {
    Navbar
  }
};
</script>

<style>

</style>
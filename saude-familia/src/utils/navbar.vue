<template>
<b-row class="justify-content-md-center mt-4">
  <b-col col md="8">
  <b-navbar style="background: #002970;">
      <b-navbar-nav class="ml-auto">
          <b-nav-item  href="#" v-if="login">Cadastro</b-nav-item>
          <b-nav-item  href="#" v-if="!login">Login</b-nav-item>
      </b-navbar-nav>
  </b-navbar>
 </b-col>
 </b-row>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        login: Boolean
    }
}
</script>

<style>

.nav-link{
    color: #ffffff!important;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif    
}



</style>
<template>
  <div id="body">
    <div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> -->
      <!-- <router-view/> -->
      <Login/>
    </div>

  </div>
</template>
<script>
import Login from './components/HelloWorld.vue'
export default {
  data() {
    return {
      msg: "Olá Mundo!",
    };
  },
  components: {
    Login
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background: rgb(2,0,36)!important;
  background: linear-gradient(213deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(48,166,209,1) 100%)!important;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

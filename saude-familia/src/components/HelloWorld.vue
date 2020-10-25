<template>
  <b-container>
    <navbar  
    v-if="!clicado"
    :login="true"
    />
    <b-row class="justify-content-md-center mt-4 form" v-if="!clicado">
      <b-col col md="8">
        <b-card
          style="font-weight: bold"
          class="text-center"
          header="Login - Saude Familia"
        >
          <b-card-text>
            <b-form>
              <b-form-group>
                <b-form-input
                  class="text-center"
                  v-model="username"
                  placeholder="Digite o seu CPF"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  v-model="password"
                  placeholder="Digite sua senha"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group class="text-center">
                <b-button type="submit" class="mt-2" variant="outline-primary"
                @click="clicou"
                 :to="'/cadastro'"
                  >Logar</b-button>                  
              </b-form-group>
              <a href=""
                ><small class="float-right mt-4"
                  >Ainda não possui cadastro?</small
                ></a
              >
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <router-view/>
  </b-container>
  
</template>

<script>
import Navbar from "../utils/navbar.vue";
export default {
  data() {
    return {
      username: "40311284174",
      password: "",
      clicado: false
    };
  },
  components: {
    Navbar,
  },
  methods:{
    clicou(){
      this.clicado = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  margin-top: 0px !important;
}

.card {
  border-radius: 0px !important;
}
</style>

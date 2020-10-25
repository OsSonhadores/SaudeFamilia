<template>
    <b-container>
    <navbar  
    v-if="!clicado"
    :login="false"
    />
    <b-row class="justify-content-md-center mt-4 form" v-if="!clicado">
      <b-col col md="8">
        <b-card
          style="font-weight: bold"
          class="text-center"
          header="Cadastro - Dados do Responsável familiar"
        >
          <b-card-text>
            <b-form>
              <b-form-group>
                <b-form-input
                  class="text-center"
                  placeholder="Digite o Nome"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  placeholder="Digite o CPF"
                >
                </b-form-input>
              </b-form-group>

               <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  placeholder="Digite o Endereço"
                >
                </b-form-input>
              </b-form-group>

               <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  placeholder="Digite o Telefone"
                >
                </b-form-input>
              </b-form-group>

               <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  placeholder="Digite o Peso"
                >
                </b-form-input>
              </b-form-group>

               <b-form-group>
                <b-form-input
                  class="text-center mt-2"
                  placeholder="Digite a Altura"
                >
                </b-form-input>
              </b-form-group>

            <b-form-file
            class="mb-2 text-left"
                placeholder="Escolha um arquivo"
            ></b-form-file>


               <b-form-group>
                <b-form-input
                  type="password"
                  class="text-center mt-2"
                  placeholder="Digite a Senha"
                >
                </b-form-input>
              </b-form-group>

               <b-form-group>
                <b-form-input
                  type="password"
                  class="text-center mt-2"
                  placeholder="Confirme a senha"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group class="text-center">
                <b-button type="submit" class="mt-2" variant="outline-primary"
                @click="clicou"
                 :to="'/cadastro'"
                  >Cadastrar-se</b-button>                  
              </b-form-group>
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
    data(){
        return{
            clicado: false
        }
    },
  components: {
    Navbar,
  }
}
</script>

<style scoped>

.form {
  margin-top: 0px !important;
}

.card {
  border-radius: 0px !important;
}

</style>
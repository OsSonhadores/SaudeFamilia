<template>
  <div class="container mt-5 mb-5 bg-light rounded">
    <div class="row">
      <div class="col-12 mb-5">
        <b-list-group>
          <b-list-group-item class="li">
            <div class="col-12">
              <div class="col-4">
                <div
                  class="lil-ball"
                  :style="{ background: person.grade.ballCollor }"
                >
                  <p class="letter">{{ person.grade.id }}</p>
                </div>
              </div>
              <div class="float-left col-10">
                <p class="description">
                  {{ person.grade.description }}
                </p>                
                <b-button href="/#/infos" variant="outline-primary w-100" @click="GoGradeList">Ver mais</b-button>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>

        <div class="col-12">
            <h2 class="display-4 w-100 text-right m-3 mt-5 mr-5">
              {{ person.name }}
            </h2>
            <hr>
        </div>
      </div>
    </div>
  
    <div class="row">
      <div class="col-12 col-lg-8">
          <img :src="person.img" class="w-100 rounded border-success" />

        <b-form-checkbox
          id="priorityCase"
          v-model="person.priorityCase"
          name="priorityCase"
          value="true"
          unchecked-value="false"
          class="text-left pt-1 pb-2"
        >
          Solicitar atendimento preferêncial
        </b-form-checkbox>
      </div>

      <div class="col-12 col-lg-4">
            <h3 class="w-100 text-center">Informações</h3>
            <hr>
        <p>
          <label for="wheight" class="float-left m-2">Peso Atual</label>
          <b-form-input
            id="wheight"
            v-model="person.wheight"
            type="number"
            required
            class="float-left"
            style="width: 90px"
            min="12"
            max="220"
          >
          </b-form-input>
          <label for="wheight" class="float-left m-2">Kg</label>
        </p>
        <br />
        <br />
        <p>
          <label for="height" class="float-left m-2">Altura Atual</label>
          <b-form-input
            id="height"
            v-model="person.height"
            type="number"
            required
            class="float-left"
            style="width: 90px"
            min="1.30"
            max="2.50"
          >
          </b-form-input>
          <label for="height" class="float-left m-2">Metros</label>
        </p>
        <br />
        <br />
        <p>
          <b-button class="w-100" variant="outline-success">Salvar</b-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        img: "/img/p4.9ec78594.jpg",
        name: "Felícia",
        wheight: "102",
        height: "1.70",
        priorityCase: "true",
        grade: {
          id: "G",
          description: "A obesidade mórbida é uma forma de acúmulo excessivo de gordura no corpo, caracterizada pelo IMC maior ou igual a 40 kg/m². Esta forma de obesidade é classificada como grau 3, que é mais grave, pois, a este nível, o excesso de peso coloca em risco a saúde e tende a diminuir o tempo de vida da pessoa.",
          ballCollor: "#eb1f00",
        },
      },
    };
  },
  methods:{
    GoGradeList(){
      window.assign.location("/#/Infos")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.letter {
  text-align: center;
  font-size: 50px;
  margin-top: 10px;
  color: #ffffff;
}

.lil-ball {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 30px 40px 0px 0px;
  float: left;
}

.description {
  text-align: justify;
  font-size: 24px;
}

.li {
  box-shadow: 1px 1px 6px #505050;
  margin-top: 10px;
}


</style>

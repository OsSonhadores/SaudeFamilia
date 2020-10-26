<template>

    <b-container>
    <navbar/>
    <b-row class="justify-content-md-center form">

      <div v-for="p in pessoas" :key="p.id">
        <div class="card" style="width: 18rem;">
          <img :src="p.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{p.name}}</h5>
            <b-button href="#" variant="primary" @click="GoToMember">Acompanhar</b-button>
          </div>
        </div>        
      </div>


    </b-row>
  </b-container>
</template>

<script>
import Navbar from "../utils/navbar.vue";
export default {
  data() {
    return {
      msg: "Olá Mundo!",

    pessoas:[      
      {
        name : "Algusto",
        img: "~/assets/p1.jpg",
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Amanda",
        img: "~/assets/p2.jpg",
        grade: "S",
        color: "#d49708"
      },
      {
        name : "Roberta",
        img: "~/assets/p3.jpg",
        grade: "M",
        color:"#dbb60e"
      },
      {
        name : "Felícia",
        img: "~/assets/p4.jpg",
        grade: "G",
        color: "#eb1f00"
      },
      {
        name : "Rafaela",
        img: "./assets/p5.jpg",
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Thomas",
        img: "./assets/p6.jpg",
        grade: "O",
        color: "#ff6f00"
      },

    ]

    };
  },
  methods:{
    GoToMember(){
      window.assign.location("/#/member")
    }
  },
  components: {
    Navbar
  }
};
</script>

<style>

</style>
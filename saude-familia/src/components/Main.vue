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
        img: '/img/p1.308e221e.jpg',
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Amanda",
        img: '/img/p2.8a860288.jpg',
        grade: "S",
        color: "#d49708"
      },
      {
        name : "Roberta",
        img: "/img/p3.4cd15a9f.jpg",
        grade: "M",
        color:"#dbb60e"
      },
      {
        name : "Felícia",
        img: "/img/p4.9ec78594.jpg",
        grade: "G",
        color: "#eb1f00"
      },
      {
        name : "Rafaela",
        img: "/img/p5.9a63849f.jpg",
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Thomas",
        img: "/img/p6.a39395e9.jpg",
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
<template>

    <b-container>
    <navbar/>
    <b-row class="justify-content-md-center form">

      <div v-for="p in pessoas" :key="p.id">
        <div class="card" style="width: 18rem;">
          <img 
          :src="p.img" 
          class="card-img-top" 
          alt="..."
          style="width:287px; height:300px;"          
          >
          <div class="card-body">
            <h5 class="card-title">{{p.name}}</h5>
            <b-button href="#" 
            variant="primary"
            :to="'/member'"  
            @click="GoToMember"
            >Detalhes</b-button>
          </div>
        </div>      
        <router-view/>  
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
        name : "Augusto",
        img: 'https://images.pexels.com/photos/4580470/pexels-photo-4580470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Amanda",
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        grade: "S",
        color: "#d49708"
      },
      {
        name : "Roberta",
        img: "https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        grade: "M",
        color:"#dbb60e"
      },
      {
        name : "Felícia",
        img: "https://s2.glbimg.com/UZsYljvv_XiTaowVvxKcgQ8-OzQ=/s.glbimg.com/jo/g1/f/original/2015/02/27/gorditos-corazon.jpg",
        grade: "G",
        color: "#eb1f00"
      },
      {
        name : "Rafaela",
        img: "https://images.pexels.com/photos/4226462/pexels-photo-4226462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        grade: "N",
        color: "#48c732"
      },
      {
        name : "Thomas",
        img: "https://img.freepik.com/fotos-gratis/menino-gordo-obeso-feliz-na-piscina_34435-2177.jpg?size=626&ext=jpg",
        grade: "O",
        color: "#ff6f00"
      },

    ]

    }
  },
  components: {
    Navbar
  },  
  methods:{
    GoToMember(){
      window.assign.location("/#/member");
    }
  },
};
</script>

<style>

</style>
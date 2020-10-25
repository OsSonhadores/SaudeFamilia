<template>
  <div class="container mt-5 mb-5 bg-light rounded">
    <div class="row">
      <div class="col-12">
        <b-list-group>
          <b-list-group-item class="li">
              <div class="col-12">
                <div class="col-4">
                  <div class="lil-ball" :style="{ background: person.grade.ballCollor }">
                    <p class="letter">{{ person.grade.id }}</p>
                  </div>
                </div>
                <div class="float-left col-10">
                  <p class="description">
                    {{ person.grade.description }}
                  </p>
                </div>
              </div>
          </b-list-group-item>
        </b-list-group>

        <h2 class="display-4 w-100 text-center m-3">{{ person.name }}</h2>

        <div class="w-100">
            <figure class="w-100">
                <img :src="'https://s2.glbimg.com/EU1CyKMTp2ELNzpC73Yd_-2soVo=/e.glbimg.com/og/ed/f/original/2019/10/18/faustao01.jpg'" :alt="'{{person.name}}'" class="w-100">
            </figure>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        img: "khhhhj",
        name: "Feitosa",
        wheight: "82",
        height: "1.65",
        grade: {
          id: "M",
          description: "Lorem ipsum",
          ballCollor: "#dbb60e",
        },
      },

    };
  },
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

.li{
    box-shadow: 1px 1px 6px #505050;
    margin-top: 10px;
}


body {
  background: #13660c !important;
}
</style>

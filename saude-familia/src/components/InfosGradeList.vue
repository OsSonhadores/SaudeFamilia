<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-12">
        <b-list-group>
          <b-list-group-item v-for="li in ul" :key="li.id" class="li">
            <div class="col-12">
              <div class="col-4">
                <div class="lil-ball" :style="{background: li.ballCollor}">
                  <p class="letter">{{ li.id }}</p>
                </div>
              </div>
              <div class="float-left col-10">
                <p class="description">
                  {{ li.description }}
                </p>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ul: [
        {
          id: "M",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt non sequi nostrum quod, a repellat assumenda fuga exercitationem. Labore consequuntur exercitationem ratione omnis voluptatem excepturi aliquam optio rem eveniet?",
            ballCollor: '#dbb60e'
        },
        {
          id: "N",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt non sequi nostrum quod, a repellat assumenda fuga exercitationem. Labore consequuntur exercitationem ratione omnis voluptatem excepturi aliquam optio rem eveniet?",
            ballCollor: '#48c732'
        },
        {
          id: "S",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt non sequi nostrum quod, a repellat assumenda fuga exercitationem. Labore consequuntur exercitationem ratione omnis voluptatem excepturi aliquam optio rem eveniet?",
            ballCollor: '#d49708'
        },
        {
            id: "O",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt non sequi nostrum quod, a repellat assumenda fuga exercitationem. Labore consequuntur exercitationem ratione omnis voluptatem excepturi aliquam optio rem eveniet?",
            ballCollor: '#ff6f00'
        },
        {
          id: "G",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt non sequi nostrum quod, a repellat assumenda fuga exercitationem. Labore consequuntur exercitationem ratione omnis voluptatem excepturi aliquam optio rem eveniet?",
            ballCollor: '#eb1f00'
        },
      ],
    };
  },
  props: {
    msg: String,
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

body{
    background: #13660c!important;
}

</style>

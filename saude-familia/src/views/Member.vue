<template>
  <div class="home">
    <InfosMember/>
  </div>
</template>

<script>
// @ is an alias to /src
import InfosMember from '@/components/InfosMember.vue'

export default {
  name: 'Member',
  components: {
    InfosMember
  },
    props: {
       person: Object,
    },

}
</script>

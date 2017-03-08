<template>
  <div class="wrapper">
    <comnav></comnav>
    <concenter></concenter>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import conCenter from '../content/con_centerall'
export default{
  data () {
    return {

    }
  },
  components: {
    'comnav': comNav,
    'concenter': conCenter
  }
}
</script>
<style>
</style>

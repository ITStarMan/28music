<template>
  <div class="wrapper">
    <op-comnav></op-comnav>
    <op-conadd></op-conadd>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import conAdd from '../content/con_add'
export default{
  data () {
    return {
    }
  },
  components: {
    'op-comnav': comNav,
    'op-conadd': conAdd
  },
  ready: function () {
  }
}
</script>
<style>
</style>

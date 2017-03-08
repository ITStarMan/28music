<template>
  <div class="wrapper">
    <op-comnav></op-comnav>
    <op-conindex></op-conindex>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import conIndex from '../content/con_login'
import eventBus from '../../EventBus.js'
export default{
  data () {
    return {

    }
  },
  components: {
    'op-comnav': comNav,
    'op-conindex': conIndex
  },
  ready: function () {
    eventBus.$emit('notifyHello', {
      msg: 1
    })
  }
}
</script>
<style>
</style>

<template>
  <div class="wrapper">
    <com-header></com-header>
    <con-main></con-main>
  </div>
</template>
<script>
import header from '../common/com_nav'
import main from '../content/con_developer'
export default{
  data () {
    return {
    }
  },
  components: {
    'com-header': header,
    'con-main': main
  }
}
</script>
<style>

</style>
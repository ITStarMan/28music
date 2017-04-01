<template>
<com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
    <com-navva></com-navva>
  <con-listb></con-listb>
  </div>
  
   
</template>
<script>
import header from '../common/com_header'
import banner from '../common/com_banner'
import navva from '../common/com_navva'
import listb from '../content/con_listb'
export default{
  data () {
    return {
    }
  },
  ready: function () {
  },
  methods: {

  },
  components: {
    'com-header': header,
    'com-banner': banner,
    'com-navva': navva,
    'con-listb': listb
  }
}
</script>
<style scoped>
     
</style>
<template>
 <con-listb></con-listb>
   
</template>
<script>
import index from '../content/con_index'
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
    'con-index': index,
    'com-header': header,
    'com-banner': banner,
    'com-navva': navva,
    'con-listb': listb
  }
}
</script>
<style scoped>
     
</style>
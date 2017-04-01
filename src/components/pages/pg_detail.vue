<template>
  <com-header></com-header>
  <com-lbody></com-lbody>
  <com-look></com-look>
  <com-deta><com-deta>
</template>
<script>
import lbody from '../common/com_lbody'
import header from '../common/com_header'
import look from '../common/com_look'
import deta from '../common/com_deta'
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
    'com-lbody': lbody,
    'com-look': look,
    'com-deta': deta
  }
}
</script>
<style>
</style>
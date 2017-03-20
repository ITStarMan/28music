<template>
  <com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
  	<con-index></con-index>
  </div>

</template>
<script>
import index from '../content/con_index'
import header from '../common/com_header'
import banner from '../common/com_banner'


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
    'com-banner': banner
  }
}
</script>
<style>
</style>

<template>
  <com-header></com-header>
  <div class="wrapper">
  	<con-index></con-index>
  </div>
</template>
<script>
import index from '../content/con_index'
import header from '../common/com_header'

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
    'com-header': header
  }
}
</script>
<style>
</style>

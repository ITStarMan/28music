<template>
  <com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
  	<con-index></con-index>
  </div>
  <com-show></com-show>
  <com-footer></com-footer>
</template>
<script>
import index from '../content/con_index'
import header from '../common/com_header'
import banner from '../common/com_banner'
import show from '../common/com_showceg'
import footer from '../common/com_footer'
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
    'com-show': show,
    'com-footer': footer
  }
}
</script>
<style>
</style>

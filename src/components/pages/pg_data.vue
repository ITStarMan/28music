<template>
<div class="wrapper">
	<com-header></com-header>
	<con-top></con-top>
	<con-main></con-main>
  <con-footer></con-footer>
</div>
</template>
<script>
import header from '../common/com_nav'
import footer from '../common/com_footer'
import main from '../content/con_data'
import top from '../content/con_apiInfoTop'
export default {
  data () {
    return {
    }
  },
  components: {
    'com-header': header,
    'con-top': top,
    'con-main': main,
    'con-footer': footer
  }
}
</script>
<style>
</style>

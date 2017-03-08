<template>
  <div class="wrapper">
    <div class="listBox">
      <com-header></com-header>
      <div class="mainBox">
        <div class="mainIn clx">
          <con-main></con-main>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import header from '../common/com_nav'
import main from '../content/con_doc'
export default{
  data () {
    return {
    }
  },
  components: {
    'com-header': header,
    'con-main': main
  },
  ready: function () {
  }
}
</script>
<style>
</style>

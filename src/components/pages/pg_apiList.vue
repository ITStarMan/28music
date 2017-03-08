<template>
  <div class="wrapper">
    <div class="listBox">
      <com-header></com-header>
      <div class="mainBox">
        <div class="mainIn clx">
          <com-nav></com-nav>
          <con-list></con-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import header from '../common/com_nav'
import leftNav from '../common/com_leftnav'
import apiList from '../content/con_apiList'
import eventBus from '../../EventBus.js'
export default{
  data () {
    return {
    }
  },
  components: {
    'com-header': header,
    'com-nav': leftNav,
    'con-list': apiList
  },
  ready: function () {
    eventBus.$emit('notifyHello', {
      msg: 2
    })
  }
}
</script>
<style>
</style>

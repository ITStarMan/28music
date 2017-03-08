<template>
  <div class="wrapper">
    <comnav></comnav>
    <combannerbox></combannerbox>
    <conadd></conadd>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import comBannerbox from '../common/com_bannerbox'
import conADD1 from '../content/con_add1'
export default{
  data () {
    return {
    }
  },
  components: {
    'comnav': comNav,
    'combannerbox': comBannerbox,
    'conadd': conADD1
  }
}
</script>
<style>
</style>

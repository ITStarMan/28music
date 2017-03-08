<template>
  <div class="wrapper">
    <comnav></comnav>
    <conappdetail></conappdetail>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import appDetail from '../content/con_appDetail'
export default{
  data () {
    return {
    }
  },
  components: {
    'comnav': comNav,
    'conappdetail': appDetail
  }
}
</script>
<style>
</style>

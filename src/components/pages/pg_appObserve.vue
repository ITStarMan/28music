<template>
  <div class="wrapper">
    <comnav></comnav>
    <conappobserve></conappobserve>
  </div>
</template>
<script>
import comNav from '../common/com_nav'
import observe from '../content/con_observe'
export default{
  data () {
    return {
    }
  },
  components: {
    'comnav': comNav,
    'conappobserve': observe
  }
}
</script>
<style>
</style>

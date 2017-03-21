<template>
  <com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
    <con-index></con-index>
  </div>
<com-navva></com-navva>
 <div class="xifen">
        <div class="xiaobiaoti">
            <h1>被枕</h1>
            <p>守护你的睡眠时光</p>
        </div>
    </div>
</template>
<script>
import index from '../content/con_index'
import header from '../common/com_header'
import banner from '../common/com_banner'
import navva from '../common/com_navva'
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
    'com-navva': navva
  }
}
</script>
<style scoped>
.xifen{width: 1090px;height: 50px;margin: 0 auto;border: 1px solid red;}
        .xiaobiaoti{width: 200px;height: 50px;margin: 0 auto;background:url("../../images/zht.png")no-repeat;}
        .xiaobiaoti h1{line-height: 50px;font-size: 36px;text-align: center;background:#ffffff;}
        .xiaobiaoti p{text-align:center;}
</style>
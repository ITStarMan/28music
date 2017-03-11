<template>
  <div class="banner_box">
    <ul class="banner_ul">
      <li><a><img src="../../images/banner_1.jpg"></a></li>
      <li><a><img src="../../images/banner_2.jpg"></a></li>
      <li><a><img src="../../images/banner_3.jpg"></a></li>
      <li><a><img src="../../images/banner_4.jpg"></a></li>
      <li><a><img src="../../images/banner_5.jpg"></a></li>
    </ul>
    <ul class="banner_btn">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="inner">
      <button type="button" class="banner_left"><img src="../../images/banner_left.png"></button>
      <button type="button" class="banner_right"><img src="../../images/banner_right.png"></button>
    </div>   
  </div>
</template>
<script>
import play from '../../controllers/bannerScroll'

export default{
  data () {
    return {
    }
  },
  ready: function () {
    play.autoRun(5000)
  },
  methods: {
  }
}
</script>
<style>
</style>

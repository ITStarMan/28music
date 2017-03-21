<template>
  <com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
    <con-index></con-index>
  </div>
<com-navva></com-navva>
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
  },
}
</script>
<style>
#app{background:#eeeeee;}
.banner_box{    position: relative;
                overflow: hidden;
                width: 1090px;
                height: 312px;
                margin-top: 20px;
                margin: 0 auto;
                background:#ffffff;
                }
.banner_left, .banner_right {
                    position: absolute;
                    width:1090px;
                    top: 126px;
                    width: 50px;
                    height: 80px;
                    line-height: 80px;
                    border-radius: 50px;
                    background: #D0C4AF;
                    border: none;
                    color: #fff;
                    opacity: 0.6;
                    cursor: pointer;}
</style>
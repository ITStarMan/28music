<template>
  <com-header></com-header>
  <com-banner></com-banner>
  <div class="wrapper">
    <con-index></con-index>
  </div>
<com-navva></com-navva>
<div class="liebiao">
    <div class="xifen">
        <div class="xiaobiaoti">
            <img src="../../images/zht.png" alt="">
            <h1>被枕</h1>
            <p>守护你的睡眠时光</p>
            </div>
         <div class="silie"> 
           <div class="contn">
              <div class="contn-nei"><img src="../../images/bei_1.png" alt=""></div>
           </div>
          <div class="contn">
              <div class="contn-nei"><img src="../../images/bei_2.png" alt=""></div>
           </div>
           <div class="contn">
              <div class="contn-nei"><img src="../../images/bei_3.png" alt=""></div>
           </div>
           <div class="contn">
              <div class="contn-nei"><img src="../../images/bei_4.png" alt=""></div>
           </div>

         </div>
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
</script>s
<style scoped>
        .liebiao{height:620px;background:#eeeeee;}
        .xifen{width: 1090px;height: 120px;margin: 0 auto;background:#ffffff;}
        .xiaobiaoti{width: 200px;height: 50px;margin: 0 auto;background:#ffffff;}
        .xiaobiaoti h1{line-height: 50px;font-size: 36px;text-align: center;display:inline-block;}
        .xiaobiaoti img{display:inline-block;width:70px;height:50px;margin-top: -18px;margin-left:20px;}
        .xiaobiaoti p{text-align:center;padding-top:30px;colco:#eeeeee;padding-top:30px;}
        .silie{width:1090px;height:500px;background:#ffffff;margin-top: 50px;}
        .contn{width:250px;height:380px;float:left;border:1px solid black;margin-left:18px;margin-top: 40px;}
        .contn-nei{width:250px;height:250px;border:1px solid red;background:#eeeeee;}
        .contn-nei img:hover{transfrom:scale(1.2);transition-duration: 5s;}
</style>
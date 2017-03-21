<template>
 <div class="fenzong"> 
    <div class="fenlei"> 
      <span class="select">分类：</span>
      <a href=""><span  class="select">全部</span></a>
      <a href="">被枕</a>
      <a href="">床品套件</a>
      <a href="">床垫</a>
      <a href="">地垫</a>
      <a href="">家具</a>
      <a href="">舒坐</a>
      <a href="">灯具</a>
      <a href="">家饰</a>
      <div class="fenlei-rg">
         <span class="select">默认</span>
         <a href="">价格</a>
         <div class="sanjiao"></div>
         <a href="">上架时间</a>
         <div class="jiantou"></div>
      </div>
    </div>
</div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  ready: function () {
  },
   methods: {
  }
}
</script>
<style scoped>
.fenzong{height:8-px;background:#eeeeee;}
.fenlei{width:1090px;height:80px; margin:0 auto;border-bottom:1px solid #eeeeee;background:#ffffff;}
.fenlei span{line-height:80px;}
.fenlei a{padding-left:30px;}
.fenlei a:hover{color:#b4a078;}
.select{ color:#b4a078; padding-left:30px;}
.fenlei-rg{width:290px;height:50px;float:right; margin-right:30px;line-height:80px;}
 .sanjiao {display: inline-block;width:20px;height:20px;margin-left: 10px;background: url(../../images/sanjiao.png)no-repeat;}
.jiantou{ display: inline-block; width:20px;height:30px;margin-left: 10px;background: url(../../images/jiantou.png)no-repeat;background-image:cover;}
</style>
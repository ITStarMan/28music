<template>  

<div class="xbd">
<div class="xiang-left">
       <div class="xianga">
         <ul class="xiangul">
           <li class="xiangli1">
             <a href="">详情</a>
           </li>
           <li class="xiangli2">
             <a href="">评论（887）</a>
           </li>
         </ul>
       </div>
      <div class="tujpg">
          <p v-for="item in goods.goodsInfoPic"><img v-bind:src="item.goodsPic" alt=""></p>
      </div>
    </div>


    <div class="xiang-right">
        <header class="hd">专题推荐</header>


         <div class="zhuanul">
            <ul>
              <li class="zhuanli">
                <a href=""><img src="../../images/zhuan1.jpg" alt="">
                <div class="text">被顾客回顾那些好物</div>
                </a>
              </li>
              <li class="zhuanli">
                <a href=""><img src="../../images/zhuan2.jpg" alt="">
                <div class="text">给孩子的礼物</div>
                </a>
              </li>
              <li class="zhuanli">
                <a href=""><img src="../../images/zhuan3.jpg" alt="">
                <div class="text">网易北极出行指南</div>
                </a>  
              </li>
              <li class="zhuanli">
                <a href=""><img src="../../images/zhuan4.jpg" alt="">
                <div class="text">不再为给男士挑礼物头疼</div>
                </a>
              </li>
              <li class="zhuanli">
                <a href=""><img src="../../images/zhuan5.jpg" alt="">
                <div class="text">严选十大必吃美食</div>
                </a>
              </li>
            </ul>
        </div>

    </div>

</div>
</template>
<script>
export default{
  data () {
    return {
      goods: {
      }
    }
  },
  ready: function () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      let _this = this
      $('body').animate( {scrollTop: 0}, 100)
      $.ajax({
        url:'http://www.28dagang.com/api/goodsInfoPic.php?goodsID=1',
        data:{},
        url:'http://www.28dagang.com/api/getGoodsInfo.php',
        data:{
          'goodsID': this.$route.params.goodsID
        },
        dataType:'JSON',
        type:'GET',
        success:function(data){
          
          _this.goods = data[0]
          console.log(_this.goods)
        }
      })
    }
  }
}
</script>
<style>

         .xbd{
           width:1090px;
           margin: 0 auto;
         }
        .xbd:after{
            display: block;
            content: '.';
            clear: both;
            line-height: 0;
            visibility: hidden;
           }
          li {
            display: list-item;
            text-align: -webkit-match-parent;
            }
          .xiang-left{
            width: 750px;
            float: left;
          }
          .xianga{
            width: 750px;
            height: 42px;
            position: relative;
            border: 1px solid #e8e8e8;
            background-color:#f5f5f5;
          }
          .xianga .xiangul{
           
          }
          .xianga .xiangul .xiangli1{
            float: left;
            width: 170px;
            height: 42px;
            border-top: 3px solid #b4a078;
            border-left: 1px solid #e8e8e8;
            background-color: #fff;
            border-bottom: 1px solid #fff;  
          }
          .xianga .xiangul .xiangli2{
            float: left;
            width: 170px;
            height: 42px;
            background-color:#f5f5f5;
            border: 1px solid #e8e8e8;  
          }
          .xiangli1 a{
           display: block;
           line-height: 40px;
           font-size: 14px;
           text-align: center;      
          }
           .xiangli2 a{
           display: block;
           line-height: 40px;
           font-size: 14px;
           text-align: center;      
          }

          .jieshao{
           width: 750px;
           padding-top: 20px;
          }
          .jiename{
             float: left;
            font-size: 15px;
            padding-left: 10px;
          }
          .jievl{
            float: left;
            font-size: 15px;
            color: #999;
            padding-left: 20px;
          }
          .jieli1{
            float: left;
            padding-top: 20px;
            padding-left: 30px;
          }
          .jieli2{
            float: left;
            padding-top: 20px;
            padding-left: 150px;
          }
          .jieli3{
            float: left;
            padding-top: 20px;
            padding-left: 30px;
          }
          .jieli4{
            float: left;
            padding-top: 20px;
            padding-left: 30px;
          }
          .tujpg{
            width: 750px;
            padding-top: 80px;
          }
          .xiang-right{
            float: left;
            width: 300px;
            height: 884px;
            padding-left: 40px;
          }
          .hd{
            width: 300px;
            height: 40px;
            border: 1px solid #e8e8e8;
            background-color:#f5f5f5;
            line-height: 41px;
            font-size: 18px;
            text-align: center;
            font-weight: 700;
          }
          .zhuanul{
            width: 298px;
            height: 840px;
            padding: 30px 19px;
            box-sizing: border-box;
          }

          .zhuanli{
            margin-bottom: 20px;
          }
          .zhuanli a{
          position:relative;
          }
          .zhuanli .text{
            width: 260px;
            position: absolute;
            bottom:0;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            background-color: transparent;
            background-color:rgba(0,0,0,.7);
            zoom: 1;
          }
</style>

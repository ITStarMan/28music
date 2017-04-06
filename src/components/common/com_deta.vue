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

       <div class="jieshao">
          <ul class="jieul">
            <li class="jieli1">
              <span class="jiename">刀身材质</span>
              <span class="jievl">氧化锆陶瓷</span>
            </li>
            <li class="jieli2">
              <span class="jiename">刀柄材质</span>
              <span class="jievl">丙烯腈-丁二烯-苯乙烯共聚物ABS</span>
            </li>
            <li class="jieli3">
              <span class="jiename">颜色</span>
              <span class="jievl">黑色</span>
            </li>
            <li class="jieli4">
              <span class="jiename">注意事项</span>
              <span class="jievl">1. 4寸水果刀请勿切西瓜、哈密瓜、木瓜、香瓜等外皮坚硬、瓜果直径长于刀身长度的瓜果。<br>
                                  2. 因刀具管制条例，不发货到新疆地区，敬请谅解。</span>
            </li>
          </ul>
      </div>    

      <div class="tujpg">
          <p><img src="../../images/xiang1.jpg" alt=""></p>
          <p><img src="../../images/xiang2.jpg" alt=""></p>
          <p><img src="../../images/xiang3.jpg" alt=""></p>
          <p><img src="../../images/xiang4.jpg" alt=""></p>
          <p><img src="../../images/xing4(1).jpg" alt=""></p>
          <p><img src="../../images/xiang5.jpg" alt=""></p>
          <p><img src="../../images/xiang6.jpg" alt=""></p>
          <p><img src="../../images/xiang6(1).jpg" alt=""></p>
          <p><img src="../../images/xiang7.jpg" alt=""></p>
          <p><img src="../../images/xiang8.jpg" alt=""></p>
          <p><img src="../../images/xiang9.jpg" alt=""></p>
          <p><img src="../../images/xiang10.jpg" alt=""></p>
          <p><img src="../../images/xiang11.jpg" alt=""></p>
          <p><img src="../../images/xiang12.jpg" alt=""></p>
          <p><img src="../../images/xiang13.jpg" alt=""></p>
          <p><img src="../../images/xiang14(1).jpg" alt=""></p>
          <p><img src="../../images/xiang14(2).jpg" alt=""></p>
          <p><img src="../../images/xiang14(3).jpg" alt=""></p>
          <p><img src="../../images/xiang14(4).jpg" alt=""></p>
          <p><img src="../../images/xiang14(5).jpg" alt=""></p>
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
      $.ajax({
        url:'http://www.28dagang.com/api/goodsInfoPic.php?goodsID=1',
        data:{},
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
           margin-left:270px;
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
          .jpg{
            width: 750px;
            padding-top: 100px;
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

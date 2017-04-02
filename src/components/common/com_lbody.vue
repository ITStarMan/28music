<template>
  <div class="lbody_box">
    <div class="biao">
       <a href="#" class="bl">首页</a>
       <span>></span>
       <a href="#" class="bl">餐厨</a>
       <span>></span>
       <a href="#" class="bl">刀铲</a>
       <span>></span>
       <span class="bl1">{{goods.goodsName}}</span>
     </div>


     <div class="biaob">
        <div class="biaotu">
           <div class="biaotu-left">
             <img v-bind:src="goods.onebPic">
           </div>
           <div class="biaotu-right">
             <ul class="biaoul">
               <a href="#"><li ><img v-bind:src="goods.onesPic"></li></a>
               <a href="#"><li ><img v-bind:src="goods.twosPic"></li></a>
               <a href="#"><li ><img v-bind:src="goods.threesPic"></li></a>
               <a href="#"><li ><img v-bind:src="goods.foursPic"></li></a>
               <a href="#"><li ><img v-bind:src="goods.fivesPic"></li></a>
             </ul>
           </div>
        </div>
        <div class="biaowen">
          <div class="biaowenn">
           <div class="name">{{goods.goodsName}}</div>
           <a href="#"><div class="chang">Stoneline制造商</div></a>
          </div>
          <div class="jian">{{goods.goodsDesc}}</div>


          <div class="price">
             <div class="prices">
              <span class="label">售价</span>
              <span class="rm">¥</span>
              <span class="rmb">{{goods.goodsPrice}}.00</span>
             </div>
             <div class="cu">
              <span class="label">促销</span>
                <a href="#">
                  <div class="chu">出行季</div>
                  <span class="chu1">满赠199元好礼，领全场券更优惠</span>
                </a>
             </div>
             <div class="fuwu">
              <span class="label">月销量</span>
                <div class="fuul">{{goods.goodsSelas}}</div>
             </div>
        </div>
         
        <div class="like"></div> 

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
        url:'http://www.28dagang.com/api/getGoodsInfo.php?goodsID=1',
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
 .biao{
     margin-left:270px;
     margin-top:40px;
 }
 .biao .bl{
     color:#333;
     font-size:8px;
 }
 .biao .bl1{
     color:#999;
     font-size:8px;
 }
 .biao .bl:hover{
     text-decoration:underline;
 }
 .biaob{
    width:1450px;
 }
 .biaotu .biaotu-left{
    position: relative;
    float: left;
    width: 430px;
    border: 1px solid #e8e8e8;
    margin-left: 270px;
    margin-top:20px;
 }
 .biaotu-right .biaoul{
     float:left;
     padding-top:20px;
     padding-left:10px;
 }
 .biaotu-right .biaoul li{
      height:78px;
      width:78px;
      margin-bottom: 10px;
      border: 1px solid #e8e8e8;
 }
 .biaotu-right .biaoul li:hover{
     border: 3px solid #b4a078;
 }
 .biaowen{
     float: left;
     width: 566px;
    padding-left: 62px;
    padding-top:15px;
 }
 .biaowen .biaowenn .name{
     float: left;
     font-size: 20px;
     font-weight: 700;
     line-height: 20px;
     margin-bottom: 7px;
 }
 .biaowen .biaowenn .chang{
    float: left;
    padding: 0 10px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    border: 1px solid #b4a078;
    border: 1px solid rgba(180,160,120,.3);
    background-color: #f5f3ef;
    color: #b4a078;
    margin-left:20px;
 }
 .biaowen .jian{
     width: 300px;
     font-size: 12px;
     padding-bottom: 20px;
     padding-top: 35px;
     line-height: 18px;
     color: #999;
     
 }
 .biaowen .price{
     background-color: #f5f3ef;
     border-top: 1px dotted #dedede;
     border-bottom: 1px dotted #dedede;
     padding: 0 0 16px;
     line-height: 24px;
 }
 .price .label{
     float:left;
     padding-left:10px;
     font-size: 12px;
     color: #999;
     overflow:hidden ;
 }
 .price .rm{
     padding-left:30px;
     margin-left: 0;
     line-height: 15px;
     color: #d7282d;
     font-size: 18px;
 }
 .prices{
     height:45px;
     padding-top:10px;
 }
 .price .rmb{
     font-size: 28px;
     line-height: 30px;
     margin-left: 2px;
     color: #d7282d;
 }
 .price .cu{
    height:28px;
 }
 .price .cu .chu{
     background-color: #d7282d;
     color: #fff;
     display: inline-block;
     width: 55px;
     height: 18px;
     line-height: 18px;
     font-size: 12px;
     text-align: center;
     position: relative;
     margin-left: 20px;
 }
 .price .cu .chu1{
     font-size: 12px;
     color:#d7282d;
     text-decoration:underline;
 }
 .fuwu{
     width:100%;
     height:25px;
     padding-top:5px;
 }
 .fuwu .fuul{
     position: relative;
     left:30px;
    width: 380px;
    height: 12px;
    margin: 6px 0;
    line-height: 12px;
    color:#d7282d;
 }
 .like{
     height:300px;
 }
 .shu{
     width:504px;
     height:42px;
     margin-top:30px;
 }
 .gui{
     width:54px;
     height:43px;
     float:left;
     padding-top:8px;
 }
 .guiul{
     float:left;
     width:438px; 
 }
 .guiul .guili{
    float:left;
    padding-left:15px;
    position: relative;
    font-size:12px;
 }
 .guiul .guili{
     width:131px;
     height:30px;
     border:2px solid #b4a078;
     color: #333;
     padding: 0 25px;
     line-height: 28px;
     font-size: 12px;
     overflow: hidden;
     margin-left:20px; 
 }
 .nameg{
     float:left;
     width:45px;
     padding-left:10px;
     font-size: 12px;
     color: #999;
     overflow:hidden ;
 }
 .shu1{
     width:504px;
     height:42px;
     margin-top:30px;
 }
 .namel{
     float:left;
     width:45px;
     padding-left:10px;
     font-size: 12px;
     color: #999;
     overflow:hidden ;
     padding-top:9px;
 }
 .shu1 .box{
     float:left;
     width:134px;
     height:37px;
     border:1px solid #ddd;
     margin-left:30px;
 }
 .but{
     padding-top:20px;
     overflow:hidden;
     width:442px;
     
 }
.butl{
     float: left;
     width:168px;
     height:49px;
     border: 1px solid #c0ae8a;
     line-height: 47px;
     font-size: 18px;
     font-weight: 500;
     color: #b4a078;
     text-align: center;
     cursor:pointer;
     background-color: #f5f3ef;
 }
 .butl:hover{
   background-color: white;
 }
 .buttj{
     float: left;
     width:168px;
     height:49px;
     border: 1px solid #c0ae8a;
     margin-left: 20px;
     line-height: 47px;
     font-size: 18px;
     font-weight: 500;
     background-color: #b4a078;
     color: white;
     text-align: center;
     cursor:pointer;
     
 }
</style>

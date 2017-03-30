<template>
  <div class="footerTop">
    <div class="inner">
      <div class="item">
        <p>客服电话</p>
        <h4>400-0368-163</h4>
        <p class="time">9:00-22:00</p>
        <div>
          <button>用户反馈</button>
          <button>在线客服</button>
        </div>
      </div>
      <div class="item">
        <p>何为严选</p>
        <p class="desc">网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品</p>
        <p>关注我们：</p>
      </div>
      <div class="item">
        <p>扫描下载APP</p>
        <div class="erwei"><img src="../../images/erwei.png"></div>
      </div>
    </div>
  </div>
  <div class="footerBottom">
    <div class="inner">
      <div class="footerLabel">
        <ul class="clx">
          <li><span>30天无忧退货</span></li>
          <li><span>满88元免邮费</span></li>
          <li><span>网易优质保障</span></li>
        </ul>
      </div>
      <div class="footerInfo">
        <p>网站正在建设中...</p>
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
.footerTop{
  background: #f4f0ea;
  height: 250px;
}
.item{
  height: 250px;
  width: 350px;
  text-align: center;
  overflow: hidden;
  border-right: 1px solid #fff;
  float: left;
  padding: 0 40px;
}
.item:last-child{
  border-right: none;
}
.item p{
  font-size: 16px;
  margin: 30px 0;
}
.item h4{
  font-size: 26px;
}
.item p.time{
  font-size: 14px;
}
.item button{
  background: #f4f0ea;
  border: 1px solid #333;
  padding: 10px 30px;
  border-radius: 3px;
  cursor: pointer;
}
.item .desc{
  font-size: 13px;
  line-height: 23px;
  text-align: center;
}
.erwei{
  width: 150px;
  margin: 0 auto;
}
.footerBottom{
  background: #414141;
  color: #fff;
}
.footerLabel li{
  width: 33.33333%;
  float: left;
  text-align: center;
  padding: 80px 0 50px 0;
  font-size: 20px;
}
.footerLabel{
  border-bottom: 1px solid #4f4f4f;
}
.footerInfo p{
  text-align: center;
  color: #999;
  padding: 20px 0;
}
</style>
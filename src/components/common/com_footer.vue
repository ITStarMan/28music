<template>
  <div class="footerTop">
    <div class="inner">
      <div class="item">
        <p>客服电话</p>
        <h4>400-0368-163</h4>
        <p class="time">9:00-22:00</p>
      </div>
      <div class="item"></div>
      <div class="item"></div>
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
</style>
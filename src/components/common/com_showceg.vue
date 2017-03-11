<template>
  <div class="banner_list inner">
    <div class="list_top clx">
      <h3>居家</h3>
      <small>回家，放松身心</small>
      <a href="">查看更多 ></a>
    </div>
    <div class="big_img">
      <img src="../../images/show_1.jpg">
    </div>
    <div class="small_img clx">
      <ul>
        <li>
          <div class="item_top">
            <a href=""><img src="../../images/show_1_1.png"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">日式记忆绵坐垫</p>
            <p class="item_price">￥59</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="../../images/show_1_2.png"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">可水洗舒柔丝羽绒枕</p>
            <p class="item_price">￥59</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="../../images/show_1_3.png"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">安睡慢回弹记忆绵床垫</p>
            <p class="item_price">￥599</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="../../images/show_1_4.png"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">全棉贡缎纯色床单</p>
            <p class="item_price">￥99</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import commonsvc from '../../services/CommonSvc'

export default{
  data () {
    return {
    }
  },
  ready: function () {
    this.getList()
  },
  methods: {
    getList () {
      let perUrl = 'http://www.28dagang.com/api/getIndexList.php'
      let perData = {}
      commonsvc.get(perData, perUrl).done(function(result){
        alert(1)
          console.log(result)
      })
    }
  }
}
</script>
<style>
</style>

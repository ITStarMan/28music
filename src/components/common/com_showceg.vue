<template>
  <div class="banner_list inner" v-for="item in list">
    <div class="list_top clx">
      <h3>{{item.cegName}}</h3>
      <small>{{item.cegDesc}}</small>
      <a href="">查看更多 ></a>
    </div>
    <div class="big_img">
      <img v-bind:src="item.bigPic" >
    </div>
    <div class="small_img clx">
      <ul>
        <li>
          <div class="item_top">
            <a href=""><img src="{{item.smallOne}}"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">{{item.smallOneName}}</p>
            <p class="item_price">￥{{item.smallOnePrice}}</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="{{item.smallTwo}}"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">{{item.smallTwoName}}</p>
            <p class="item_price">￥{{item.smallTwoPrice}}</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="{{item.smallThree}}"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">{{item.smallThreeName}}</p>
            <p class="item_price">￥{{item.smallThreePrice}}</p>
          </div>
        </li>
        <li>
          <div class="item_top">
            <a href=""><img src="{{item.smallFour}}"></a>
          </div>
          <div class="item_bottom">
            <p class="item_name">{{item.smallFourName}}</p>
            <p class="item_price">￥{{item.smallFourPrice}}</p>
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
      list: []
    }
  },
  ready: function () {
    this.getList()
  },
  methods: {
    getList () {
      let perUrl = 'http://www.28dagang.com/api/getIndexList.php'
      let perData = {}
      let _this = this
      commonsvc.get(perData, perUrl).done(function(result){
        console.log(result)
        _this.list = result
      })
    }
  }
}
</script>
<style>
</style>

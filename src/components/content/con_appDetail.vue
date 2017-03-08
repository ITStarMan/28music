<template>
  <div class="bannerBox">
      <div class="bannerIn apiBanner">
          <div class="fl bannerLeft">
              <dl class="clx">
                  <dt><img src="../../images/apiImg.png"/> </dt>
                  <dd class="apiName"><b>{{ detaiData.AppName }}</b></dd>
                  <dd class="userApiName"><i class="iconfont icon-yuechi"></i> Test Key: {{ detaiData.AppKeyTest }}</dd>
                  <dd class="userApiName"> <i class="iconfont icon-yuechi"></i> Product Key: {{ detaiData.AppKeyProd }}</dd>
              </dl>
          </div>
      </div>
  </div>


  <div class="mainBox">
      <div class="mainIn clx">
          <!--左侧菜单 开始-->
          <div class="mLeftBox">
              <ul class="menuBox apiMenu">
                <div class=""><b>分析</b></div>
                <li><span><i class="iconfont icon-biaoqian"></i><b>概述</b></span></li>
                <li  ><span><i class="iconfont icon-biaoqian"></i><b>请求</b></span></li>
                <li><span><i class="iconfont icon-biaoqian"></i><b>延迟</b></span></li>
                <li><span><i class="iconfont icon-biaoqian"></i><b>错误</b></span></li>
                <li><span><i class="iconfont icon-biaoqian"></i><b>宽带 in/out</b></span></li>
                <li><span><i class="iconfont icon-biaoqian"></i><b>配额</b></span></li>

              </ul>
              <ul class="menuBox apiMenu">
                <div class=""><b>管理</b></div>
                <li><span><i class="iconfont icon-shezhi"></i> <b>设置</b></span></li>
              </ul>

          </div>
          <!--左侧菜单 结束-->

          <!--右侧功能区域 开始-->
          <div class="mRightBox">
              <div class="apiListBox myAppList">
                  <div class="apiList myappList click" v-for="apiLi in detaiData.APIList" v-on:click="toApiDetai($index)">
                      <div class="apiListInfo">
                          <h4>{{ apiLi.ApiName }}</h4>
                          <div class="userFAN">{{ apiLi.UserName }}</div>
                          <div class="businessImg"><img v-bind:src="apiLi.Logo"/></div>
                      </div>
                  </div>
                  <div class="apiList myappList click">
                      <div class="addapiTex" v-on:click="addAPI()"><i class="iconfont icon-jia"></i> 订阅API</div>
                  </div>
              </div>


          </div>
          <!--右侧功能区域 结束-->

      </div>
  </div>
</template>
<script>
import CommonSvc from '../../services/CommonSvc.js'
import getDomain from '../../controllers/getDomain.js'
export default{
  data () {
    return {
      getDomain,
      detaiData: {}
    }
  },
  methods: {
    addAPI () {
      // 点击跳转到列表页给APP添加api
      window.location.href = getDomain.getUrl('')
    },
    toApiDetai (code) {
      let _this = this
      // 存储apiID跳转详情页
      window.location.href = getDomain.getUrl('detail/' + _this.detaiData.APIList[code].ApiID)
    },
    toRequset () {
      let _this = this
      // 存储apiID跳转详情页
      window.location.href = getDomain.getUrl('appobserve/' + _this.$route.params.appID)
    }
  },
  ready: function () {
    let _this = this
    let url = 'v1/user_app/' + _this.$route.params.appID
    CommonSvc.get({}, url, 1).done(function(result){
      if (result.status == 200) {
        _this.detaiData = result.data.App
        // 接口暂时无API作者字段，需在用户信息库里查询
        for (let i = 0; i < _this.detaiData.APIList.length; i++) {
          _this.detaiData.APIList[i].UserName = result.data.UsersInfo[_this.detaiData.APIList[i].UserID].nick
          if (_this.detaiData.APIList[i].Logo == '') {
            _this.detaiData.APIList[i].Logo = require('../../images/apiLogo.jpg')
          }
        }
      }
    })
  }
}
</script>
<style>
</style>

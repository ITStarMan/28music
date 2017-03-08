<template>
<div class="bannerBox bannerBox1">
  <div class="bannerIn userBanner">
      <div class="fl bannerLeft">
          <dl class="clx developer">
              <dt><img v-bind:src="developer.result.Face" /> </dt>
              <dd class="apiName"><b>{{developer.result.Nick}}</b></dd>
              <dd class="userinfo">
                <span><i class="iconfont icon-user"></i> 公司：<b>{{profileData.company}}</b></span>
                <span><i class="iconfont icon-weizhi"></i> 地址：<b>{{profileData.location}}</b></span>
                <span><i class="iconfont icon-wangzhi"></i> 网址：<b>{{profileData.website}}</b></span>
              </dd>
          </dl>
          <dl class="developerDesc">
            <dd>{{profileData.bio}}</dd>
          </dl>
      </div>

  </div>
</div>

<div class="apiTap">
    <ul class="">
        <li class="active">他发布的API <i class="apiNum">{{developer.num}}</i></li>
    </ul>
</div>

<!--文档-->
<div class="mainBox developerBox">
  <div class="mainIn clx">
    <div class="mRightBox noMenu">
      <div class="apiListBox developerMain">
        <div class="apiList" v-for="item in developer.result.Uapis" v-on:click.stop="link($index)">
          <div class="collectBox" v-on:click.stop="like($index)" v-bind:class="{'collected': follow[item.ApiID] !== undefined}"><i class="iconfont" v-bind:class="{'icon-wujiaoxing': follow[item.ApiID] !== undefined,'icon-uncollected': follow[item.ApiID] == undefined}"></i></div>
          <div class="apiListInfo">
              <h4>{{item.ApiName}}</h4>
              <div class="userDeveloper"><img v-bind:src="developer.result.Face" /> {{developer.result.Nick}}</div>
              <div class="businessImg"><img v-bind:src="logo[$index]" /></div>
              <div class="businessInfo">
                  {{item.ApiDesc}}
              </div>
          </div>
          <div class="listBottom">
              <div class="freeBtn">免费</div>
              <div class="apiInfo">
                  <ul class="clx">
                      <li><i class="iconfont icon-user"></i>{{item.DeveloperAmount}}</li>
                      <li><i class="iconfont icon-wujiaoxing"></i>{{item.FollowerAmount}}</li>
                      <li><i class="iconfont icon-arrowup"></i>100%</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import CommonSvc from '../../services/CommonSvc'
import islogin from '../../controllers/getUserInfo'
import developer from '../../models/md_developer'
import getdeveloper from '../../controllers/getDeveloper'
import tolocation from '../../controllers/changeLoc'
import getDomain from '../../controllers/getDomain.js'
import dscroll from '../../models/md_deveScroll'
export default{
  data () {
    return {
      developer,
      login: false,
      follow: {},
      logo:[],
      dscroll,
      profileData: {
        company: '',
        location: '',
        website: '',
        bio: ''
      }
    }
  },
  methods: {
    getMyFollow (apis) {
      this.login = islogin.getUserInfo()
      if(this.login){
        let perData = {
          'apiIds': apis
        }
        let _this =this
        let perUrl = 'v1/follow/ifMyFollowApis'
        CommonSvc.get(perData, perUrl,1).done(function (result) {
          if (result && result.status === 200) {
            _this.follow = result.data
          }
        })
      }
    },
    link (index) {
      this.dscroll.top = $(document).scrollTop()
      window.location.href = getDomain.getUrl('detail/' + this.developer.result.Uapis[index].ApiID)
    },
    like (index) {
      if(this.login){
        if(this.follow[this.developer.result.Uapis[index].ApiID] == undefined){
          let perData = {}
          let perUrl = 'v1/follow/' + this.developer.result.Uapis[index].ApiID
          let _this = this
          CommonSvc.put(perData, perUrl,1).done(function (result) {
            if (result && result.status === 200) {
              _this.developer.apis = ''
              getdeveloper.ready(_this.$route.params.userId)
              _this.getMyFollow(_this.developer.apis)

            }
          })
        }else{
          let perData = {}
          let perUrl = 'v1/follow/' + this.developer.result.Uapis[index].ApiID
          let _this = this
          CommonSvc.det(perData, perUrl,1).done(function (result) {
            if (result && result.status === 200) {
              _this.developer.apis = ''
              getdeveloper.ready(_this.$route.params.userId)
              _this.getMyFollow(_this.developer.apis)
            }
          })
        }
      }else{
        if(confirm("您还未登录,是否跳转到登录页面？")){
          window.location.href = getDomain.getUrl('login?callbackurl=' +  getDomain.getUrl('developer/' + this.$route.params.userId))
        }
      }
    },

    getLogo () {
      this.logo = []
      for(let i = 0;i<this.developer.result.Uapis.length;i++){
        if(this.developer.result.Uapis[i].Logo == ''){
            this.logo[i] = require('../../images/apiLogo.jpg')
        }else{
            this.logo[i] = developer.result.Uapis[i].Logo
        }
      }
    },

    getInfo () {
      let _this = this
      CommonSvc.get({},'passport/profile/' + this.$route.params.userId + '.json', 2).done(function(result){
        if (result.status == 200) {
          _this.profileData = result.attachment
          _this.profileData.company = _this.profileData.company.substr(0,14)
          _this.profileData.location = _this.profileData.location.substr(0,28)
          _this.profileData.website = _this.profileData.website.substr(0,28)
        }
      })
    }
  },
  ready: function () {
    if(dscroll.top == 0){
        $('body').animate( {scrollTop: 0}, 500)
    }else{
        $(document).scrollTop(dscroll.top)
    }
    dscroll.top = 0
    getdeveloper.ready(this.$route.params.userId)
    this.getInfo()
    this.getMyFollow(developer.apis)
    this.getLogo()
  }
}
</script>
<style>
.apiNum{
  float: right;
  margin-top: 16px;
  margin-left: 6px;
}
.bannerIn .bannerLeft dl.developer{
  height: 100px;
  line-height: 30px;
  color: #fff;
}
.bannerIn .bannerLeft dl.developerDesc dd{
  margin-left: 0;
  color: #fff;
  font-size: 16px;
}
.mRightBox{
  padding-bottom: 6em;
}
.apiList{
  cursor: pointer;
}
.bannerBox1{
  height: 220px;
}
.bannerBox1 .bannerLeft{
  width: 100%;
}
.bannerBox1 .bannerLeft dd{
  white-space: normal;
}
.bannerBox1 .bannerLeft .apiName{
  margin-bottom: 10px;
  font-size: 18px;
}
.bannerBox1 .bannerLeft .userinfo{
  font-size: 16px;
  line-height: 20px;
}
.userDeveloper img{
  width: 36px;
  height: 36px;
  border-radius: 36px;
}
.userDeveloper{
  text-align: center;
}
</style>

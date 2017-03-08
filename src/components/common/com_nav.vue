<template>
  <div class="header">
    <div class="headerIn">
      <div class="fl logoBox">
        <span class="fl"><a href="javascript:;" v-on:click="toOtherSt('')"><img src="../../images/logo.png"></a></span>
        <span class="fl logoTex">开发者平台</span>
      </div>
      <div class="headerR fr">
        <div class="navBox fl">
          <ul class="clx">
            <li v-bind:class="{'active': sourceFg == 1}"><a href="javascript:;" v-on:click="toOtherSt('/apps')">应用市场 <i class="triangle"></i></a></li>
            <li v-bind:class="{'active': sourceFg == 2}"><a href="javascript:;" v-on:click="toOtherSt('/widgets')">组件市场 <i class="triangle"></i></a></li>
            <li v-bind:class="{'active': sourceFg == 3}" v-on:click="linkTo(1)"><a href="javascript:;">API市场<i class="triangle"></i></a></li>
            <li v-bind:class="{'active': sourceFg == 4}"><a href="javascript:;" v-on:click="toOtherSt('/hardware')">硬件市场 <i class="triangle"></i></a></li>
          </ul>
        </div>

        <div class="searchBox fl" v-show="isSearchow"><i class="iconfont icon-search"></i><input type="text" placeholder="搜索API" class="inputS"/></div>

        <div class="userHeader fl">
          <!--未登录-->
          <div class="btn btn28" v-bind:class="{'btnBlue': toLogin , 'btnMain': !toLogin}" v-show="!isLogin && resetPassportFlage != 1" v-on:click="linkTo(2)">注册</div>
          <div class="btn btn28"v-bind:class="{'btnBlue': !toLogin , 'btnMain': toLogin}"  v-show="!isLogin && resetPassportFlage != 1" v-on:click="linkTo(3)">登录</div>
          <!--找回密码页面专用-->
          <div class="btn btn28 btnBlue" v-show="resetPassportFlage == 1" v-on:click="linkTo(2)">注册</div>
          <div class="btn btn28 btnBlue" v-show="resetPassportFlage == 1" v-on:click="linkTo(3)">登录</div>

          <!--已登录-->
          <div class="userMsg" v-show="isLogin">
            <span class="faceBox click" v-on:click="toCenter()"><img v-bind:src="userInfo.BaseUserInfo.face"> </span>
            <!--<span class="userName">{{ userInfo.BaseUserInfo.nick }}</span>-->
          </div>
          <div class="logout" v-show="isLogin" v-on:click="logout()">退出</div>
        </div>

      </div>




    </div>
  </div>
</template>
<script>
import changeLoc from '../../controllers/changeLoc.js'
import CommonSvc from '../../services/CommonSvc.js'
import getUserInfo from '../../controllers/getUserInfo.js'
import userInfo from '../../models/md_userInfo.js'
import getDomain from '../../controllers/getDomain.js'
import EventBus from '../../EventBus.js'
export default{
  data () {
    return {
      resetPassportFlage: 0,
      sourceFg: 3,
      isSearchow: true,
      toLogin: true,
      changeLoc,
      userInfo,
      getUserInfo,
      CommonSvc,
      getDomain,
      isLogin: false,
      sourceFlag: null      // 检测哪个页面在用头部
    }
  },
  methods: {
    toOtherSt (url) {
      window.location.href = getDomain.getOtherStore(url)
    },
    toCenter () {
      window.location.href = getDomain.getUrl('center/1')
    },
    logout () {
      let _this = this
      CommonSvc.post({}, 'passport/session-remove.json', 2).done(function (result) {
        if (result.status == 200) {
          window.sessionStorage.userInfoNick = ''
          window.sessionStorage.userInfoFace = ''
          window.sessionStorage.userInfoPuid = ''
          window.sessionStorage.userInfoUid = ''
          window.alert('退出成功')
          // 退出后到市场主页
          if (_this.sourceFlag == 2) {
            // 若是主页不跳转，直接刷新
            window.location.reload()
          } else {
            window.location.href = getDomain.getUrl('')
            _this.isLogin = false
          }
        }
      })
    },
    linkTo (code) {
      // 增加回调参数传递
      let _this = this
      switch (code) {
        case 1:
          changeLoc.toIndex()
          break
        case 2:
          let callB1 = _this.$route.query.source == undefined ? '' : 'source=' + _this.$route.query.source
          let callB2 = _this.$route.query.callbackurl == undefined ? '' : 'callbackurl=' + _this.$route.query.callbackurl
          if (callB1 == '' && callB2 == '') {
            window.location.href = getDomain.getUrl('register')
          } else {
            if (callB1 != '' && callB2 != '') {
              window.location.href = getDomain.getUrl('register?' + callB1 + '&' + callB2)
            }else {
              window.location.href = getDomain.getUrl('register?' + callB1 + callB2)
            }
          }
          _this.toLogin = false
          break
        case 3:
          let callB11 = _this.$route.query.source == undefined ? '' : 'source=' + _this.$route.query.source
          let callB12 = _this.$route.query.callbackurl == undefined ? '' : 'callbackurl=' + _this.$route.query.callbackurl
          if (callB11 == '' && callB12 == '') {
            window.location.href = getDomain.getUrl('login')
          } else {
            if (callB11 != '' && callB12 != '') {
              window.location.href = getDomain.getUrl('login?' + callB11 + '&' + callB12)
            }else {
              window.location.href = getDomain.getUrl('login?' + callB11 + callB12)
            }
          }
          _this.toLogin = true
          break
        default:

      }
    }
  },
  ready: function () {
    let _this = this
    _this.isLogin = getUserInfo.getUserInfo()
    // 判断页面来源，导航选中对应市场
    if (_this.$route.query.source == undefined) {
      _this.sourceFg = 3
    } else {
      _this.sourceFg = _this.$route.query.source
    }
    // 用来判断当前页面是登录页还是注册也
    EventBus.$on('notifyHello', (params) => {
      // 用来判断登录或注册,注册页面会发送1过来
      if (params.msg == 1) {
        _this.toLogin = false
        _this.isSearchow = false
      }
      if (params.msg == 2) {
        // 标识页面现在在主页
        _this.sourceFlag = 2
      }
      if (params.msg == 'login') {
        _this.isSearchow = false
      }
    })
    EventBus.$on('resetPassport', (params) => {
      if (params.msg == 'resetPassport') {
        _this.resetPassportFlage = 1
        _this.isSearchow = false
      }
    })
  }
}
</script>
<style>
</style>

<template>
  <div class="mainBox loginBox">
    <div class="mainIn clx">
      <!--右侧功能区域开始-->
      <div class="mRightBox noMenu">
        <!--新建api 开始-->
        <div class="myCenterRight">
          <h3>{{ pageFlag == 0 ? '登录' : '注册' }}</h3>
          <div class="formBox">
            <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
            <div class="formIn">
              <div class="formBar">
                <label> 邮箱</label>
                <input v-model="mdlogin.email" v-bind:class="{ red: emailFlag}" v-on:change="checkEmail()" type="text" placeholder="请输入邮箱" maxlength="60" class="inputS"/>
                <div class="errorBox"></div>
                <div class="sucBox"></div>
              </div>
              <div class="formBar" v-show="pageFlag == 1">
                <label> 用户名</label>
                <input v-model="mdlogin.nick" v-bind:class="{ red: nickFlag}" v-on:change="checkNick()" type="text" placeholder="请输入用户名" maxlength="20" class="inputS"/>
              </div>
              <div class="formBar">
                <label>密码</label>
                <input v-model="mdlogin.password" v-bind:class="{ red: passwordFlag}" v-on:change="passwd1()" v-on:keyup.enter="Submit(2)" maxlength="16" type="password" placeholder="请输入密码" class="inputS"/>
              </div>
              <div class="formBar"  v-show="pageFlag == 1">
                <label>确认密码</label>
                <input v-model="passwordCK" v-bind:class="{ red: passwordCKlFlag}" v-on:change="passwd2()" maxlength="16" type="password" placeholder="请再次输入密码" class="inputS"/>
              </div>
              <div class="formBar codeBar"  v-show="pageFlag == 1">
                <label style="line-height:49px;">验证码</label>
                <input v-model="mdlogin.captcha" v-bind:class="{ red: captchaFlag}" v-on:change="checkCaptcha()" v-on:keyup.enter="Submit()" type="text" maxlength="8" placeholder="请输入验证码" class="inputS"/>
                <img style="width:130px;" v-bind:src="captchaSrc"/>
                <a href="javascript:;" v-on:click="changeCaptcha()">看不清 换一张</a>
              </div>
              <div class="formBar">
                <label></label>
                <button class="btn btn42 btnMain" v-bind:disabled="false" v-on:click="Submit()">{{ pageFlag == 0 ? '登录' : '注册' }}</button>
                <a id="resetLink" href="javascript:;" v-on:click="toReset()" v-show="pageFlag == 0">忘记密码？</a>
              </div>
            </div>
          </div>
        </div>
        <!--新建api 结束-->

      </div>
      <!--右侧功能区域结束-->

    </div>
  </div>
</template>
<script>
import EventBus from '../../EventBus.js'
import mdlogin from '../../models/md_login'
import CommonSvc from '../../services/CommonSvc.js'
import getDomain from '../../controllers/getDomain.js'
export default {
  data () {
    return {
      erroMsgCon: [
        {
          'msg': ''
        },
        {
          'msg': ''
        },
        {
          'msg': ''
        },
        {
          'msg': ''
        },
        {
          'msg': ''
        }
      ],
      getDomain,
      callbackurl: '',
      captchaSrc: '',
      CommonSvc,
      erroMsg: '',
      pageFlag: 0,                   // 用来监控当前页面状态   0 代表注册页面，1代表登录页面
      mdlogin,
      passwordCK: null,           // 校验两次验证码，不用发送
      emailFlag: false,           // 错误信息
      nickFlag: false,
      passwordFlag: false,
      passwordCKlFlag: false,
      captchaFlag: false,
      submitFlage: 0             // 提交标识，当三个异步校验都做完之后并且没有错误，则提交按钮
    }
  },
  methods: {
    toReset () {
      // 跳转到找回密码页面
      window.location.href = getDomain.getUrl('resetPassport')
    },
    passwd1 () {
      // 校验两次密码是否一致
      let _this = this
      if (_this.pageFlag == 1) {
        if (mdlogin.password == '') {
          _this.passwordFlag = true
          _this.erroMsgCon[2].msg = '密码不能为空'
          _this.orderErro()
          return
        } else {
          _this.passwordFlag = false
          _this.erroMsgCon[2].msg = ''
          _this.orderErro()
        }
        if (_this.passwordCK != '' && mdlogin.password == _this.passwordCK) {
          _this.passwordFlag = false
          _this.passwordCKlFlag = false
          _this.erroMsgCon[2].msg = ''
          _this.erroMsgCon[3].msg = ''
          _this.orderErro()
        }
      }
    },
    passwd2 () {
      // 校验两次密码是否一致
      let _this = this
      if (mdlogin.password == _this.passwordCK) {
        // 不输入暂不校验
        _this.passwordFlag = false
        _this.passwordCKlFlag = false
        _this.erroMsgCon[3].msg = ''
        _this.orderErro()
      } else {
        _this.passwordFlag = false
        _this.passwordCKlFlag = true
        _this.erroMsgCon[3].msg = '两次密码不一致'
        _this.orderErro()
      }
    },
    orderErro () {
      // 排列错误信息，展示最前面的
      let _this = this
      _this.erroMsg = ''
      for (let i = 0; i < _this.erroMsgCon.length; i++) {
        if (_this.erroMsgCon[i].msg != '') {
          _this.erroMsg = _this.erroMsgCon[i].msg
          return
        }
      }
    },
    checkCaptcha () {
      let _this = this
      CommonSvc.post({'captcha': mdlogin.captcha}, 'passport/check-captcha.json', 2).done(function(result){
        if (result.status == 200) {
          _this.captchaFlag = false
          _this.erroMsgCon[4].msg = ''
          _this.orderErro()
        }else {
          _this.captchaFlag = true
          _this.erroMsgCon[4].msg = result.message
          _this.orderErro()
        }
      })
    },
    checkNick () {
      let _this = this
      let rulnick = /^[-a-zA-Z0-9_\u4e00-\u9fa5]{4,32}$/
      if (rulnick.test(mdlogin.nick)) {
        CommonSvc.post({'nick': mdlogin.nick}, 'passport/check-nick.json', 2).done(function(result){
          if (result.status == 200) {
              _this.nickFlag = false
              _this.erroMsgCon[1].msg = ''
              _this.orderErro()
          }else {
            _this.nickFlag = true
            _this.erroMsgCon[1].msg = result.message
            _this.orderErro()
          }
        })
      } else {
        _this.nickFlag = true
        _this.erroMsgCon[1].msg = '用户名只能4-20个字符,且不能有空格!'
        _this.orderErro()
      }

    },
    checkEmail () {
      // 如果是登录页面就不校验
      let _this = this
      if (_this.pageFlag == 1) {
        // 校验email是否有错
        CommonSvc.post({'email': mdlogin.email}, 'passport/check-email.json', 2).done(function(result){
          if (result.status == 200) {
            _this.emailFlag = false
            _this.erroMsgCon[0].msg = ''
            _this.orderErro()
          }else {
            _this.emailFlag = true
            _this.erroMsgCon[0].msg = result.message
            _this.orderErro()
          }
        })
      } else {
        _this.checkIpt(/^[0-9a-zA-Z]([-_.~]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/, mdlogin.email, 0, '请输入正确邮箱')
      }
    },
    checkIpt (rules, data, flag, erroMsg) {
      let _this = this
      let reg = rules
      if (reg.test(data)) {
      //通过
        switch (flag) {
          case 0:
            _this.emailFlag = false
            _this.erroMsgCon[0].msg = ''
            _this.orderErro()
            break
          case 1:
            _this.nickFlag = false
            break
          case 2:
              _this.passwordFlag = false
              _this.erroMsgCon[2].msg = ''
              _this.orderErro()
            break
          case 3:
              _this.passwordCKlFlag = false
              _this.erroMsgCon[3].msg = ''
              _this.orderErro()
            break
          default:

          }
      } else {
        switch (flag) {
          case 0:
            _this.emailFlag = true
            _this.erroMsgCon[0].msg = erroMsg
            _this.orderErro()
            break
          case 1:
            _this.nickFlag = true
            _this.erroMsgCon[1].msg = erroMsg
            _this.orderErro()
            break
          case 2:
            _this.passwordFlag = true
            _this.erroMsgCon[2].msg = erroMsg
            _this.orderErro()
            break
          case 3:
            _this.passwordCKlFlag = true
            _this.erroMsgCon[3].msg = erroMsg
            _this.orderErro()
            break
          default:

        }
      }
    },
    changeCaptcha () {
      // 换一张验证码
      this.captchaSrc = getDomain.getPassport('captcha?id=')+ Math.random()
    },
    Submit (code) {
      let _this = this
      if (code == 2 && _this.pageFlag == 1) {
        // 若在注册页密码输入框按下回车不提交，因为表单还未填完
        return
      }
      _this.submitFlage = 0    // 最开始把校验标识恢复为0
      // 登录注册用一个页面，所以县校验下用户状态
      if (_this.pageFlag == 0) {
        // 这是代表页面为登录页面  第一步前端校验格式
        _this.checkIpt(/^[0-9a-zA-Z]([-_.~]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/, mdlogin.email, 0, '请输入正确邮箱')
        _this.checkIpt(/^[^\u4e00-\u9fa5 ]{4,16}$/, mdlogin.password, 2, '密码只能8-16个字符,不允许输入中文及空格！')
        if (_this.erroMsg == '') {
          CommonSvc.post({'loginid': mdlogin.email, 'pwd': mdlogin.password}, 'passport/session-create.json', 2).done(function(result){
            if (result.status == 200) {
              if (_this.callbackurl != '') {
                window.location.href = _this.callbackurl
              }else {
                window.location.href = getDomain.getUrl('')
              }
            }else {
              if (_this.erroMsg.length == 0) {
                _this.erroMsg = result.message
              }
            }
          })
        }
      } else{
        if (_this.erroMsg == '') {
          // 这是代表页面为注册页面  第一步前端校验格式
          _this.checkIpt(/^[0-9a-zA-Z]([-_.~]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/, mdlogin.email, 0, '请输入正确邮箱')
          _this.checkIpt(/^[-a-zA-Z0-9_\u4e00-\u9fa5]{4,32}$/, mdlogin.nick, 1, '用户名只能4-20个字符,且不能有空格!')
          if (mdlogin.password != null) {
            _this.checkIpt(/^[^\u4e00-\u9fa5 ]{8,16}$/, mdlogin.password, 2, '密码要求8-16位，不允许输入中文及空格！')
          }else {
            _this.passwordFlag = true
            _this.erroMsgCon[2].msg = '密码不能为空'
            _this.orderErro()
          }
          if (_this.passwordCK != null) {
            _this.checkIpt(/^[^\u4e00-\u9fa5 ]{8,16}$/, _this.passwordCK, 3, '确认密码要求8-16位，不允许输入中文及空格！')
          } else {
            _this.passwordCKlFlag = true
            _this.erroMsgCon[3].msg = '确认密码不能为空'
            _this.orderErro()
          }
          // 校验是否输入了验证码
          if (mdlogin.captcha == null ||  mdlogin.captcha == '') {
            _this.captchaFlag = true
            _this.erroMsgCon[4].msg = '请输入验证码'
            _this.orderErro()
          } else {
            _this.captchaFlag = false
            _this.erroMsgCon[4].msg = ''
            _this.orderErro()
          }
          // 若前面校验都通过则进行下面校验
          if (_this.passwordCK != mdlogin.password) {
            _this.passwordFlag = true
            _this.passwordCKlFlag = true
            _this.erroMsgCon[3].msg = '两次密码不一致'
            _this.orderErro()
          }else {
            if (_this.passwordCK != null) {
              _this.passwordFlag = false
              _this.passwordCKlFlag = false
              _this.erroMsgCon[3].msg = ''
              _this.orderErro()
            }
          }
        }
        if (_this.erroMsg == '') {
          CommonSvc.post({'loginid':mdlogin.email,'pwd':mdlogin.password,'nick':mdlogin.nick,'captcha':mdlogin.captcha},'passport/account-create.json', 2).done(function(result){
            if(result.status == 200){
              // 注册成功后自动给登录
              CommonSvc.post({'loginid': mdlogin.email, 'pwd': mdlogin.password}, 'passport/session-create.json', 2).done(function(reslt){
                if (reslt.status == 200) {
                  // 注册成功后先添加一个默认app，调接口生成
                  CommonSvc.post({'uid': result.attachment.uid, 'AppName': '默认应用'}, 'v1/user_app', 1).done(function(res){
                    // 添加默认APP后跳转
                    if (res.status == 200) {
                      if (_this.callbackurl != '') {
                        // 有回调地址就回调地址，没有就回主页
                         window.location.href = _this.callbackurl
                      }else {
                        window.location.href = getDomain.getUrl('')
                      }
                    } else {
                      window.alert(res.message)
                    }
                  })
                } else {
                  window.alert(reslt.message)
                }
              })
            } else {
              // 系统返回错误暂时放到最后一个错误存储
              _this.erroMsgCon[4].msg = result.message
              _this.orderErro()
            }
          })
        }
      }
    }
  },
  ready: function () {
    let _this = this
    if (_this.$route.query.callbackurl != undefined) {
      _this.callbackurl = _this.$route.query.callbackurl
    }else {
      // 判断页面登录页面来源
      let paramUrl = window.localStorage.loginCBurl
      if (paramUrl != undefined && paramUrl != '') {
        _this.callbackurl = paramUrl
        // 存储后清空
        window.localStorage.loginCBurl = ''
      }
    }
    // 初始化验证码图片地址
    _this.captchaSrc = getDomain.getPassport('captcha')

    EventBus.$on('notifyHello', (params) => {
      // 用来判断登录或注册,注册页面会发送1过来
      if (params.msg == 'login') {
        _this.pageFlag = 0
      } else {
        _this.pageFlag = params.msg
      }
    })
    // 检查cookie里是否有这个字段
    let cookie = document.cookie.indexOf('WG-PPC-CASTOKEN')
    if (cookie != -1) {
      // 掉接口判断是否登录
      CommonSvc.post({}, 'passport/session-check.json', 2, false).done(function(result){
        // 如果是未登录状态则进行登录或者
        if (result.status == 466) {
        }
        if (result.status == 200) {
          if (_this.callbackurl != '') {
            window.location.href = _this.callbackurl
          }else {
            window.location.href = getDomain.getUrl('')
          }
        }
      })
    } else {

    }
  },
  destroyed: function () {
    // 页面要离开时清空数据模型
    mdlogin.email = ''
    mdlogin.password = ''
    mdlogin.nick = ''
    mdlogin.captcha = ''

  }
}
</script>
<style scoped>
#resetLink{
  color: #2692fb;
  position: absolute;
  right: 240px;
  top: 26px;
}
</style>

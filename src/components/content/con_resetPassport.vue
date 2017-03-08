<template>
  <div class="mainBox loginBox hide">
    <div class="mainIn clx">
      <!--右侧功能区域开始-->
      <div class="mRightBox noMenu">
        <!--新建api 开始-->
        <div class="myCenterRight">
          <h3>找回密码</h3>
          <div class="formBox">
            <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
            <div class="formIn">
              <div class="formBar">
                <label> 邮箱</label>
                <input v-model="email" v-bind:class="{ red: emailFlag}" type="text" placeholder="请输入邮箱" maxlength="60" class="inputS"/>
                <div class="errorBox"></div>
                <div class="sucBox"></div>
              </div>
              <div class="formBar codeBar">
                <label style="line-height:49px;">验证码</label>
                <input v-model="captcha" v-bind:class="{ red: captchaFlag}" v-on:keyup.enter="Submit()" type="text" maxlength="8" placeholder="请输入验证码" class="inputS"/>
                <img style="width:130px;" v-bind:src="captchaSrc"/>
                <a href="javascript:;" v-on:click="changeCaptcha()">看不清 换一张</a>
              </div>
              <div class="formBar">
                <label></label>
                <button class="btn btn42 btnMain" v-bind:disabled="false" v-on:click="Submit()">确定</button>
              </div>
            </div>
          </div>
        </div>
        <!--新建api 结束-->

      </div>
      <!--右侧功能区域结束-->

    </div>
  </div>
  <div class="mainBox loginBox">
    <div class="mainIn clx">
      <!--右侧功能区域开始-->
      <div class="mRightBox noMenu">
        <div class="myCenterRight">
          <h3>忘记密码</h3>
          <!--进度条-->
          <div class="progressBar">
            <div class="lineBar"></div>
            <dl class="active">
              <dt><i class="iconfont icon-success"></i> </dt>
              <dd>身份验证</dd>
            </dl>
            <dl>
              <dt>2</dt>
              <dd>找回密码</dd>
            </dl>
            <dl>
              <dt>3</dt>
              <dd>完成</dd>
            </dl>
          </div>
          <!--1.身份验证-->
          <div class="formBox hide">
            <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
            <div class="formIn">
              <div class="formBar">
                <label> 邮箱</label>
                <input v-model="email" v-bind:class="{ red: emailFlag}" type="text" placeholder="请输入邮箱" maxlength="60" class="inputS"/>
                <div class="errorBox"></div>
                <div class="sucBox"></div>
              </div>
              <div class="formBar codeBar">
                <label>验证码</label>
                <input v-model="captcha" v-bind:class="{ red: captchaFlag}" v-on:keyup.enter="Submit()" type="text" maxlength="8" placeholder="请输入验证码" class="inputS"/>
                <img v-bind:src="captchaSrc"/>
                <a href="javascript:;" v-on:click="changeCaptcha()">看不清 换一张</a>
              </div>
              <div class="formBar">
                <label></label>
                <button class="btn btn42 btnMain" v-bind:disabled="false" v-on:click="Submit()">确定</button>
              </div>
            </div>
          </div>
          <!--2.找回密码-->
          <div class="formBox ">
            <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
            <div class="formIn">
              <div class="formBar">
                <label> 新密码</label>
                <input type="text" placeholder="请输入密码" maxlength="" class="inputS"/>
                <div class="errorBox"></div>
                <div class="sucBox"></div>
              </div>
              <div class="formBar">
                <label> 确认新密码</label>
                <input type="text" placeholder="请输入密码" maxlength="" class="inputS"/>
                <div class="errorBox"></div>
                <div class="sucBox"></div>
              </div>
              <div class="formBar">
                <label></label>
                <button class="btn btn42 btnMain" v-bind:disabled="false" v-on:click="Submit()">确定</button>
              </div>
            </div>
          </div>
          <!--3.完成-->
          <div class="formBox hide">
            <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
            <div class="formIn">
              <div class="findSuc">
                <p class="succeedTex"><i class="iconfont icon-finish"></i> 恭喜您,找回密码成功</p>
                <button class="btn btn42 btnOrange">进入登录页面</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右侧功能区域结束-->

    </div>
  </div>

  <!--提示弹层-->
  <div class="tipBox hide" id="">
    <div class="mask"></div>
    <div class="tipBoxIn hintTip">
      <div class="tipMain">
        <p><i class="iconfont icon-finish"></i> 邮箱发送成功,请注意查收</p>
      </div>
      <div class="tipFooter">
        <button class="btn btn36 btnMain">确定</button>
      </div>
    </div>
  </div>

</template>
<script>
import getDomain from '../../controllers/getDomain.js'
import CommonSvc from '../../services/CommonSvc.js'
export default{
  data () {
    return {
      erroMsg: '',                // 错误信息
      captchaFlag: false,         // 验证码错误提示信息
      emailFlag: false,           // 邮箱错误提示
      email: '',                  // 邮箱
      captcha: '',                // 验证码
      captchaSrc: ''              // 验证码图片src
    }
  },
  methods: {
    changeCaptcha () {
      // 换一张验证码
      this.captchaSrc = getDomain.getPassport('captcha?id=')+ Math.random()
    },
    Submit () {
      let _this = this
      // 清空错误信息
      _this.erroMsg = ''
      _this.emailFlag = false
      _this.captchaFlag = false
      // 提交表单，先校验内容是否正确
      if (_this.email == '') {
        _this.erroMsg = '邮箱不能为空!'
        _this.emailFlag = true
        return
      }
      if (/^[0-9a-zA-Z]([-_.~]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/.test(_this.email)) {

      } else {
        _this.erroMsg = '请输入正确邮箱!'
        _this.emailFlag = true
        return
      }
      if (_this.captcha == '') {
        _this.erroMsg = '验证码不能为空!'
        _this.captchaFlag = true
        return
      }


      // 都不为空则开始向服务端发送数据
      CommonSvc.post({'email': _this.email,'captcha': _this.captcha }, 'passport/password-email-apply.json', 2).done((result)=>{
        if (result.status == 200) {
          window.alert('邮件发送成功，请注意查收！')
          // 发完邮件到登录页面
          window.location.href = getDomain.getUrl('login')
        } else {
          window.alert(result.message)
        }
      })
    }
  },
  ready: function () {
    let _this = this
    // 初始化验证码图片地址
    _this.captchaSrc = getDomain.getPassport('captcha')
  }
}
</script>
<style>
</style>

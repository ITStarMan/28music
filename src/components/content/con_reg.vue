<template>
<div class="container clx">
  <div class="topBox">
    <h1 class="fl">三加账号</h1>
    <p class="fr">已有账号？去<a>登录</a></p>
  </div>
  <div class="formBox">
    <h2>注册账号</h2>
    <div class="formIn">
      <div class="clx">
        <label>手机号：</label>
        <input type="text" v-model="phone" v-on:keyup="key()" />
      </div>
      <div class="clx yzm">
        <label>验证码：</label>
        <input type="text" v-model="inyzm" />
        <span v-on:click="check()" v-bind:class="{'disable': status == 0}" id="yBtn">获取验证码</span>
        <span class="disable" id="sBtn"><span>{{times}}</span>秒重新发送</span>
      </div>
      <div class="clx">
        <label>密码：</label>
        <input type="password" v-model="password"/>
      </div>
      <div class="clx">
        <label>确认密码：</label>
        <input type="password" v-model="ypassword"/>
      </div>
      <div class="clx">
        <label>昵称：</label>
        <input type="text" v-model="name" maxlength="14" />
      </div>
      <div class="clx">
        <label></label>
        <div id="submit" v-on:click="reg()">注册</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import commonsvc from '../../services/CommonSvc'
import getDomain from '../../controllers/getDomain'

export default{
  data () {
    return {
      phone: '',
      password: '',
      ypassword: '',
      name: '',
      inyzm: '',
      status: 0,
      yzm: '',
      times: 60
    }
  },
  ready: function () {
  },
  methods: {
    check () {
      if(this.status == 1){
        let perUrl = 'http://www.28dagang.com/api/sendSMS.php'
        let perData = {
          'mobile': this.phone
        }
        let _this = this
        $.ajax({
          url: perUrl,
          data: perData,
          DataType: 'text',
          type: 'POST',
          success:function(data){
            if(data){
              _this.yzm = data
            }
          }
        })
        this.status = 0
        this.time()
      }
    },
    reg () {
      if(this.inyzm == this.yzm){
        if(this.phone == '' || this.password == '' || this.ypassword == '' || this.name == '' || this.inyzm == ''){
          alert('请填写完整信息')
        }else{
          let p = /^1[3|4|5|7|8][0-9]{9}$/
          if(p.test(this.phone)){
            if(this.password == this.ypassword){
              let _this = this
              commonsvc.get({'mobile': this.phone}, 'http://www.28dagang.com/api/yzUserName.php').done(function(result){
                if(result == 0){
                  let perData = {
                    'mobile': _this.phone,
                    'username': _this.name,
                    'password': _this.password
                  }
                  let perUrl = 'http://www.28dagang.com/api/regUser.php'
                  commonsvc.post(perData, perUrl).done(function(result){
                    if(result.status == 200){
                      alert('恭喜您注册成功！')
                      window.location.href = getDomain.getUrl('')
                    }else{
                      alert('注册失败，请稍后再试！')
                    }
                  })
                }else{
                  alert('此手机号已注册')
                }
              })
            }else{
              alert('两次密码不一样')
            }
          }else{
            alert('请输入正确手机号')
          }
        }
      }else{
        alert('验证码不正确')
      }
    },
    key () {
      let i = /^1[3|4|5|7|8][0-9]{9}$/
      if(i.test(this.phone)){
        this.status = 1
      }else{
        this.status = 0
      }
    },
    time () {
      $('#yBtn').hide()
      $('#sBtn').show()
      let _this = this
      let timer = setInterval(function() { 
        _this.times = _this.times - 1
        if(_this.times <= 0){
          _this.status = 1
          _this.times = 60
          $('#yBtn').show()
          $('#sBtn').hide()
          clearInterval(timer)
        }
      },1000); 
    }
  }
}
</script>
<style scoped>
.container{
  background: #efefef;
  height: 100%;
}
.topBox{
  width: 1090px;
  margin: 40px auto;
  overflow: hidden;
}
.topBox>h1{
  font-size: 30px;
}
.topBox>p{
  font-size: 20px;
  line-height: 40px;
  color: rgb(102, 102, 102);
}
.topBox>p>a{
  color: #ca5252;
  cursor: pointer;
}
.formBox{
  position: relative;
  width: 1090px;
  padding-bottom: 55px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 3px #cbc9c9;
  margin-bottom: 100px;
}
.formBox>h2{
  padding: 44px 0 0 70px;
  font: normal 24px "Microsoft YaHei","微软雅黑","宋体",helvetica,"Hiragino Sans GB";
  color: #ca5252;
}
.formIn{
  height: 400px;
  margin-top: 40px;
}
.formIn>div>label{
  float: left;
  width: 340px;
  text-align: right;
  margin-top: 12px;
  font-size: 16px;
  line-height: 45px;
  color: #333;
}
.formIn>div>input{
  float: left;
  height: 44px;
  width: 320px;
  margin-top: 12px;
  border: solid 1px #ddd;
  font-size: 16px;
  text-indent: 0.5em;
}
.formIn>div.yzm>input{
  width: 190px;
}
.formIn>div.yzm>span{
  float: left;
  height: 46px;
  width: 120px;
  font-size: 16px;
  line-height: 46px;
  margin: 12px 0 0 10px;
  color: #fff;
  background: #1199e3;
  text-align: center;
  cursor: pointer;
}
.formIn>div.yzm>span.disable{
  background: #9ec5e3;
}
.formIn>div.yzm #sBtn{
  display: none;
}
#submit{
  float: left;
  border: 0;
  width: 322px;
  height: 46px;
  margin-top: 12px;
  background-color: #ca5252;
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 46px;
  cursor: pointer;
}
</style>

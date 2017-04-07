<template>
<div class="container clx">
  <div class="topBox">
    <h1 class="fl">账号</h1>
    <p class="fr">已有账号？去<a>登录</a></p>
  </div>
  <div class="formBox">
    <h2>注册账号</h2>
    <div class="formIn">
      <div class="clx">
        <label>手机号：</label>
        <input type="text" v-model="phone" />
      </div>
      <div class="clx yzm">
        <label>验证码：</label>
        <input type="text" />
        <span v-on:click="check()">获取验证码</span>
      </div>
      <div class="clx">
        <label>密码：</label>
        <input type="text" />
      </div>
      <div class="clx">
        <label>确认密码：</label>
        <input type="text" />
      </div>
      <div class="clx">
        <label>昵称：</label>
        <input type="text" />
      </div>
      <div class="clx">
        <label></label>
        <div id="submit">注册</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import commonsvc from '../../services/CommonSvc'

export default{
  data () {
    return {
      phone: ''
    }
  },
  ready: function () {
  },
  methods: {
    check () {
      alert(this.phone)
      let perUrl = 'https://api.netease.im/sms/sendcode.action'
      let perData = {
        'mobile': this.phone
      }
      $.ajax({
        url: perUrl,
        data: perData,
        DataType: 'JSON',
        type: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "AppKey": "9f641251a75044ec9dced1c81d26f097"
        },
        success:function(data){
          console.log(data)
        }
      })
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
  background: #9ec5e3;
  text-align: center;
  cursor: pointer;
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

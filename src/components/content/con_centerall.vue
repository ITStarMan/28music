<template>
  <div class="mainBox">
      <div class="mainIn clx">
          <!--左侧菜单开始-->
          <div class="mLeftBox centerLeft">
              <div class="myCenterLeft">
                  <dl>
                      <dt v-on:click="addLogo(1)">
                        <img v-bind:src="userInfo.BaseUserInfo.face"/>
                        <div class="changeLogo">点击更换logo</div>
                      </dt>
                      <dd>{{ userInfo.BaseUserInfo.nick }}</dd>
                  </dl>
              </div>
              <ul class="menuBox myCenterMenu click">
                  <li v-bind:class="{'active': $route.params.pageFlae == 1 }" v-on:click="letNav(1)">
                    <span class=""><i class="iconfont icon-touxiang"></i> <b>资料设置</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 2 }" v-on:click="letNav(2)">
                    <span class=""><i class="iconfont icon-shezhi"></i> <b>账户设置</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 3 }" v-on:click="letNav(3)">
                    <span class=""><i class="iconfont icon-youjian"></i> <b>邮箱设置</b></span>
                  </li>
              </ul>




          </div>
          <!--左侧菜单结束-->

          <!--右侧功能区域开始-->
          <div class="mRightBox myCenterInfoBox">
              <!--个人中心右侧 开始-->
              <!--邮箱设置-->
              <div class="myCenterRight" v-show="$route.params.pageFlae == 3">
                  <h3>邮箱设置</h3>
                  <div class="formBox">
                      <div class="warnBox">您的邮箱没有验证</div>

                      <div class="userCenterTex">
                          <span class="mailTex">{{ userEmail }}</span>
                          <span class="accountTex">当前账号</span>
                          <span class="testHint">未验证</span>
                          <span class="sentLink click" v-on:click="activeEmail()">重新发送激活链接</span>
                      </div>

                          <div class="formBar">
                              <label>添加新的邮箱</label>
                              <input type="text" placeholder="邮箱号码" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <button class="btn btn42 btnMain">确认</button>
                          </div>
                  </div>
              </div>
              <!--资料设置-->
              <div class="myCenterRight" v-show="$route.params.pageFlae == 1" id="myCenterRight">
                  <h3>资料设置</h3>
                  <div class="formBox">
                      <div class="warnBox" v-show="profileErro.length != 0" v-for="profileErroList in profileErro">{{ profileErroList }}</div>

                      <div class="col-2">
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i>姓名</label>
                              <input type="text" v-model="profileData.fullName" placeholder="姓名" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-user"></i> 所在公司</label>
                              <input type="text" v-model="profileData.company" placeholder="公司名称" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-weizhi"></i> 所在地址</label>
                              <input type="text" v-model="profileData.location" placeholder="地理位置" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-wangzhi"></i> 网址</label>
                              <input type="text" v-model="profileData.website" placeholder="URl" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-jianli"></i> 简介</label>
                              <textarea v-model="profileData.bio" class="inputS big">关于你的一些介绍</textarea>
                          </div>
                          <div class="formBar w100">
                              <button class="btn btn42 btnMain" v-on:click="submit(3)">保存</button>
                          </div>
                      </div>
                  </div>
              </div>
              <!--账户设置-->
              <div class="myCenterRight" v-show="$route.params.pageFlae == 2" id="myCenterRight">
                  <h3>账户设置</h3>
                  <div class="formBox">
                      <div class="warnBox" v-show="nickErro.length != 0" v-for="acErroL in nickErro">{{ acErroL }}</div>

                      <div class="col-2">
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 用户名</label>
                              <input v-model="nick.nick" type="text" placeholder="用户名" class="inputS"/>
                          </div>
                          <div class="formBar w100">
                              <button class="btn btn42 btnMain" v-on:click="submit(2)">保存</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="myCenterRight centerPassWord" v-show="$route.params.pageFlae == 2">
                  <h3>密码设置</h3>
                  <div class="formBox">
                      <div class="warnBox" v-show="changePassportErro.length != 0" v-for="passErro in changePassportErro">{{ passErro }}</div>

                      <div class="col-2">
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 原密码</label>
                              <input type="password" v-model="changePassport.pwd" placeholder="原密码" class="inputS"/>
                          </div>
                          <div class="formBar">
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 新密码</label>
                              <input type="password" v-model="changePassport.newpwd" placeholder="新密码" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 确认新密码</label>
                              <input type="password" v-model="newpwdCK" placeholder="确认新密码" class="inputS"/>
                          </div>
                          <div class="formBar w100">
                              <button class="btn btn42 btnMain" v-on:click="submit(1)">保存</button>
                          </div>
                      </div>
                  </div>
              </div>
              <!--个人中心右侧 结束-->
              <!--用户没有使用的api 结束-->
          </div>
          <!--右侧功能区域结束-->

      </div>
  </div>

  <!--弹层-->
<div class="tipBox" id="tipBox" v-show="isAddLogo">
  <div class="mask"></div>
<!--上传LOGO-->
<div class="tipBoxIn editPathTip logoBox">
  <div class="tipHeader">
      <h2>上传LOGO</h2>
      <div class="closeTip click" id="close" v-on:click="addLogo(2)">×</div>
  </div>
  <div class="tipMain">
    <div class="logoPic"><img v-bind:src="preShowSrc" /></div>
    <div class="logoStic">
      <p>要求：请上传头像高清图片</p>
      <p>建议400*400像素，PNG、JPG格式，大小不超过300KB</p>
      <a class="file">选择文件
      　　<input type="file" id="imgFile" v-on:change="checkImg()" value="选择文件" class="selectDoc" v-model="upFile" />
      </a>
    </div>
  </div>
  <div class="tipFooter upLogo">
      <button class="btn btn36 btnMain" v-on:click="addLogo(3)">确定</button>
  </div>
</div>

</div>
</template>
<script>
import CommonSvc from '../../services/CommonSvc.js'
import uploadImg from '../../services/uploadImg.js'
import getDomain from '../../controllers/getDomain.js'
import getUserInfo from '../../controllers/getUserInfo.js'
import userInfo from '../../models/md_userInfo.js'
export default{
  data () {
    return {
      userEmail: '',
      upFile: null,
      preShowSrc: '',
      userInfo,
      getUserInfo,
      getDomain,
      CommonSvc,
      isAddLogo: false,
      nick: {
        'nick': ''
      },
      nickErro: [],
      changePassport: {
        'pwd': '',
        'newpwd': ''
      },
      newpwdCK: '',
      changePassportErro: [],
      profileData: {
        'fullName': '',
        'company': '',
        'location': '',
        'website': '',
        'bio': ''
      },
      profileErro: [],
      myAPI:[

      ],
      myAPP:[

      ],
      SDKlist: [
        {
          'type': 'java',
          'name': 'JAVA'
        },
        {
          'type': 'php',
          'name': 'PHP'
        }
      ]
    }
  },
  methods: {
    checkImg () {
      let _this = this
      let files = document.getElementById('imgFile').files
      if (files.length !== 0) {
        if (!/image\/\w+/.test(files[0].type)) {
          window.alert('请确保文件类型为图像类型')
          return
        } else {
          let files = document.getElementById('imgFile').files[0]
          CommonSvc.upload(files).done(function(result){
            if (result.status == 200) {
              _this.preShowSrc = 'http://img1.ffan.com/' + result.data
            } else {
              window.alert('上传失败，请重试')
            }
          })
        }
      } else {
        window.alert('您还未选择任何文件')
      }
    },
    activeEmail () {
      // 激活邮箱
      window.alert('邮件已发出请注意查收')
    },
    letNav (code) {
      let _this = this
      // 检测下是否在账户设置页面
      if (code == 1) {
        // 页面加载时先请求下接口
        CommonSvc.get({},'passport/profile.json', 2).done(function(result){
          if (result.status == 200) {
            _this.profileData = result.attachment
            window.location.href = getDomain.getUrl('centerall/' + code)
          } else {
            window.location.href = getDomain.getUrl('centerall/' + code)
            window.alert('数据加载失败')
          }
        })
      } else {
        // 改变url控制部分显示
        window.location.href = getDomain.getUrl('centerall/' + code)
      }
    },
    submit (code) {
      let _this = this
      switch (code) {
        case 1:
          _this.changePassportErro = []
          if (_this.changePassport.pwd == '') {
            _this.changePassportErro.push('原密码不能为空')
          }
          if (_this.changePassport.newpwd == '') {
            if (_this.changePassportErro.length == 0) {
              _this.changePassportErro.push('新密码不能为空')
            }
          }
          if (_this.newpwdCK == '') {
            if (_this.changePassportErro.length == 0) {
              _this.changePassportErro.push('确认新密码不能为空')
            }
          }
          // 修改密码 校验两次密码是否一致
          if (_this.changePassport.newpwd == _this.newpwdCK && _this.newpwdCK != '' ) {
            if (_this.changePassportErro.length == 0) {
              CommonSvc.post(_this.changePassport, 'passport/password-update.json', 2).done(function(result){
                if (result.status == 200) {
                  // 清空输入信息
                  _this.changePassport.pwd = ''
                  _this.changePassport.newpwd = ''
                  _this.newpwdCK = ''
                  window.alert('密码修改成功')
                }else {
                  _this.changePassportErro.push(result.message)
                }
              })
            }
          } else{
            if (_this.changePassportErro.length == 0) {
              _this.changePassportErro.push('新密码与确认新密码不一致')
            }
          }

          break
        case 2:
          // 账户设置提交
          CommonSvc.post(_this.nick,'passport/account-upnick.json', 2).done(function(result){
            if (result.status == 200) {
              _this.nickErro = []
              _this.nick = ''
              // 重新请求下用户信息
              getUserInfo.getUserInfo()
              window.alert('保存成功')
            } else {
              _this.nickErro = []
              _this.nickErro.push(result.message)
            }
          })
          break
        case 3:
          CommonSvc.post(_this.profileData, 'passport/profile-update.json', 2).done(function (result) {
            if (result.status == 200) {
              window.alert('保存成功')
            }else {
              _this.profileErro.push(result.message)
            }
          })
          break
        default:

      }
    },

    addLogo (code) {
      let _this = this
      switch (code) {
        case 1:
          _this.preShowSrc = userInfo.BaseUserInfo.face
          _this.isAddLogo = true
          break
        case 2:
          _this.upFile = null
          _this.isAddLogo = false
          break
        case 3:
          let postSrc = _this.preShowSrc + ';' + _this.preShowSrc + ';' + _this.preShowSrc
          CommonSvc.post({face : postSrc},'passport/account-upface.json', 2).done(function(result){
          if(result.status == 200){
            getUserInfo.getUserInfo()
            window.console.log()
            window.alert('添加成功')
            _this.isAddLogo = false
            }
          })
          break
        default:

      }
    }
  },
  ready: function () {
    let _this = this
    // 页面加载判断用户登录状态
    if (getUserInfo.getUserInfo()) {
    } else {
      // 若未登录，先引导用户登录
      window.alert('您还未登录，请先登录')
      window.localStorage.loginCBurl = getDomain.getUrl('centerall/' + _this.$route.params.pageFlae)
      window.location.href = getDomain.getUrl('login')
    }
    // 页面加载时先请求下接口
    CommonSvc.get({},'passport/profile.json', 2).done(function(result){
      if (result.status == 200) {
        _this.profileData = result.attachment
      }
    })
    if (_this.$route.params.pageFlae == 3) {
      CommonSvc.get({'uids': userInfo.BaseUserInfo.uid}, 'passport/account-lookup.json', 2).done(function(result){
        if (result.status == 200) {
          _this.userEmail = result.attachment[0].email
        } else {
          window.alert(result.message)
        }
      })
    }
    // 监测变化，加载我的app和我的api列表
    _this.$watch('$route.params.pageFlae', function(newValue, oldValue){
      // 把错误信息清空
      if(newValue != 2 && oldValue == 2) {
        _this.nickErro = []
        _this.changePassportErro = []
      }
      if(newValue == 3){
        CommonSvc.get({'uids': userInfo.BaseUserInfo.uid}, 'passport/account-lookup.json', 2).done(function(result){
          if (result.status == 200) {
            _this.userEmail = result.attachment[0].email
          } else {
            window.alert(result.message)
          }
        })
      }
    })
  }
}
</script>
<style scoped>
#myCenterRight{
  min-height: 0px;
}
</style>

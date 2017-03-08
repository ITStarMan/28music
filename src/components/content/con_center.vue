<template>
  <div class="mainBox">
      <div class="mainIn clx">
          <!--左侧菜单开始-->
          <div class="mLeftBox centerLeft">
              <div class="myCenterLeft">
                  <dl>
                      <dt v-on:click="addLogo(1)">
                        <img v-bind:src="userInfo.BaseUserInfo.face"/>
                        <div class="changeLogo">点击更换</div>
                      </dt>
                      <dd>{{ userInfo.BaseUserInfo.nick }}</dd>
                  </dl>
              </div>
              <ul class="menuBox myCenterMenu click">
                  <li v-bind:class="{'active': $route.params.pageFlae == 1 }" v-on:click="letNav(1)">
                    <span class=""><div class="centerIcon"><i class="iconfont icon-touxiang"></i></div><b>资料设置</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 2 }" v-on:click="letNav(2)">
                  <span class=""><div class="centerIcon"><i class="iconfont icon-shezhi"></i></div><b>账户设置</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 3 }" v-on:click="letNav(3)">
                  <span class=""><div class="centerIcon"><i class="iconfont icon-app"></i></div><b>我的应用</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 4 }" v-on:click="letNav(4)">
                  <span class=""><div class="centerIcon"><i class="iconfont icon-apidefault"></i></div><b>我的API</b></span>
                  </li>
                  <li v-bind:class="{'active': $route.params.pageFlae == 5 }" v-on:click="letNav(5)">
                  <span class=""><div class="centerIcon"><i class="iconfont icon-xiazai"></i></div><b>下载SDK</b></span>
                  </li>
              </ul>




          </div>
          <!--左侧菜单结束-->

          <!--右侧功能区域开始-->
          <div class="mRightBox myCenterInfoBox">
              <!--个人中心右侧 开始-->
              <!--资料设置-->
              <div class="myCenterRight" v-show="$route.params.pageFlae == 1" id="myCenterRight">
                  <h3>资料设置</h3>
                  <div class="formBox">
                      <div class="warnBox" v-show="profileErro.length != 0" v-for="profileErroList in profileErro">{{ profileErroList }}</div>

                      <div class="col-2">
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i>姓名</label>
                              <input type="text" v-model="profileData.fullName" placeholder="姓名" maxlength="28" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-user"></i> 所在公司</label>
                              <input type="text" v-model="profileData.company" maxlength="100" placeholder="公司名称" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-weizhi"></i> 所在地址</label>
                              <input type="text" v-model="profileData.location" maxlength="100" placeholder="地理位置" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-wangzhi"></i> 网址</label>
                              <input type="text" v-model="profileData.website" maxlength="100" placeholder="URL" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-jianli"></i> 简介</label>
                              <textarea v-model="profileData.bio" class="inputS big" maxlength="140" placeholder="最多140字">关于你的一些介绍</textarea>
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
                      <div class="userCenterTex" style="border-bottom: none;">
                          <span class="mailTex">{{ userEmail }}</span>
                          <span class="accountTex">当前账号</span>
                          <span class="testHint" v-bind:class="{'accountVerified': userVerified.status == 1}">{{ userVerified.text }}</span>
                          <span class="sentLink click" v-show="userVerified.status == 0" v-on:click="activeEmail()">重新发送激活链接</span>
                      </div>
                  </div>
                  <div class="formBox">
                      <div class="warnBox" v-show="nickErro.length != 0" v-for="acErroL in nickErro">{{ acErroL }}</div>

                      <div class="col-2">
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 用户名</label>
                              <input v-model="nick.nick" type="text" placeholder="用户名" maxlength="20" class="inputS"/>
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
                              <input type="password" v-model="changePassport.pwd" maxlenght="16" placeholder="原密码" class="inputS"/>
                          </div>
                          <div class="formBar">
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 新密码</label>
                              <input type="password" v-model="changePassport.newpwd" maxlenght="16" placeholder="新密码" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label><i class="iconfont icon-touxiang"></i> 确认新密码</label>
                              <input type="password" v-model="newpwdCK" placeholder="确认新密码" maxlenght="16" class="inputS"/>
                          </div>
                          <div class="formBar w100">
                              <button class="btn btn42 btnMain" v-on:click="submit(1)">保存</button>
                          </div>
                      </div>
                  </div>
              </div>
              <!--个人中心右侧 结束-->

              <!--我的应用-->
              <div class="myCenterRight" v-show="$route.params.pageFlae == 3">
                  <h3>我的应用</h3>
                  <div class="myappListBox">
                      <div class="apiList myappList" v-for="appList in myAPP">
                          <h4 class="click appNameT">
                            <a href="javascript:;" v-on:click="goDownLoad()" class="fr">下载SDK</a>
                            <input v-show="editAppName"  v-on:blur="quitEdit()" v-on:keyup.enter="quitEdit()" v-model="edAppName" maxlength="6" placeholder="请输入APP名称"/>
                            <span v-show="!editAppName" v-on:click="appDetai($index)">{{ appList.AppName }}</span>
                            <i class="appNameEd"><i v-show="!editAppName && $index != 0" v-on:click="eidtAppName($index)" class="iconfont icon-edit"></i></i>
                            <i class="appNameEd"><i v-show="!editAppName && $index != 0" class="iconfont icon-turnoff"></i></i>
                          </h4>
                          <div class="apiInApp clx">
                              <dl class="click" v-for="apiLi in appList.APIList" v-on:click="appDetai($parent.$index)">
                                  <dt style="width:111px;height:81px;"><img style="height:100%;" v-bind:src="apiLi.Logo"/> </dt>
                                  <dd class="apiName">{{ apiLi.ApiName }}</dd>
                                  <dd class="userApiName">{{ apiLi.nick }}</dd>
                              </dl>
                              <dl class="noapi click" v-on:click="appAddApi()">
                                  <dt><i class="iconfont icon-arrowup"></i> </dt>
                                  <dd class="addAPITex">去订阅API</dd>
                              </dl>
                          </div>
                      </div>
                      <div class="apiList myappList click">
                          <div class="addapiTex" v-on:click="addAPP()"><i class="iconfont icon-jia"></i> 添加APP</div>
                      </div>
                  </div>

              </div>

              <!--我的API-->
              <div class="myCenterRight"  v-show="$route.params.pageFlae == 4">
                  <h3>我的API</h3>
                  <div class="apiListBox myapiListBox">
                      <div class="apiList myappList click" v-for="apiList in myAPI" v-on:click="toApiDetail($index)">
                          <div class="apiListInfo">
                            <!-- issueNot 添加这个样式就是红色的未发布,开发的时候去掉hide-->
                              <div class="issueHintBox" v-bind:class="{'issueNot': apiList.Status == 1 }">
                                <div class="threeUp"></div>
                                <div class="issueTex">{{ apiList.Status == 1 ? '未发布' : '已发布' }}</div>
                                <div class="threeDown"></div>
                              </div>

                              <h4>{{ apiList.ApiName }}</h4>
                              <div class="userFAN">{{ apiList.nick }}</div>
                              <div class="businessImg"><img v-bind:src="apiList.Logo" /></div>
                            </div>
                        </div>
                        <div class="apiList myappList click" v-on:click="addApi()">
                            <div class="addapiTex"><i class="iconfont icon-jia"></i> 发布API</div>
                        </div>
                  </div>
              </div>

              <!--下载SDK-->
              <div class="myCenterRight"  v-show="$route.params.pageFlae == 5">
                  <h3>下载SDK</h3>
                  <div class="apiListBox downSDKBox">
                      <ul class="sdkList">
                          <li v-for="sdkList in SDKlist">
                              <a href="javascript:;" v-on:click="downLoad($index)" class="btn btn36 btnMain fr"><i class="iconfont icon-xiazai"></i> 下载SDK</a>
                              <p class="fl">{{ sdkList.name }} SDK</p>
                          </li>
                      </ul>
                  </div>

              </div>

              <!--用户没有使用的api 开始-->
              <dl class="noData" v-show="false">
                  <dt><i class="iconfont icon-eyes"></i> </dt>
                  <dd>张海海目前没有正在使用的API</dd>
              </dl>
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
      <h2>上传头像</h2>
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
      edAppName: '',     // 我的应用里应用名编辑状态的模型
      editAppName: false,   // 我的应用 是否编辑APP名字状态切换
      uploadFlg: false,
      userVerified: {
        'text': '未验证',
        'status': 0
      },
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
        },
        {
          'type': 'nodejs-server',
          'name': 'NODE JS'
        },
        {
          'type': 'python',
          'name': 'PYTHON'
        }
      ]
    }
  },
  methods: {
    quitEdit () {
      let _this = this
      _this.myAPP[0].AppName = _this.edAppName
      _this.editAppName = false
      // 改APP名字接口未加
    },
    eidtAppName(){
      let _this = this
      _this.edAppName = _this.myAPP[0].AppName
      _this.editAppName = true
      // 添加app功能未开发
    },
    addAPP () {
      // 点击添加APP，暂时功能延后开发
    },
    checkImg () {
      let _this = this
      let files = document.getElementById('imgFile').files
      if (files.length !== 0) {
        if (!/^(\s|\S)+(jpg|png|JPG|PNG)+$/.test(files[0].name)) {
          _this.upFile = null
          window.alert('头像仅支持png和jpg')
          return
        } else {
          if (files[0].size > 2097152) {
            _this.upFile = null
            window.alert('图片不得大于2M')
            return
          }
          let files11 = document.getElementById('imgFile').files[0]
          CommonSvc.upload(files11).done(function(result){
            if (result.status == 200) {
              _this.uploadFlg = true
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
    goDownLoad () {
      // 去下载页面
      window.location.href = getDomain.getUrl('center/5')
    },
    downLoad (code) {
      let _this = this
      let params = {
        langs : _this.SDKlist[code].type ,
        apikey : '7Jn0Za0Gl5Rx3Aw1Md4Br7Ac9Zw2Ui1D',
        apipath : 'http://zyzwyz.gw.apistore.ffan.net/film/v2/cinemas/storeMappingList'
      }
      // 下载sdk
      CommonSvc.post(params, 'sdkzip/sdkdemo', 3).done(function(result){
        window.console.log(result)
        if (result.status == 200) {
          switch (code) {
            case 0:
               window.location.href = result.data.data[0].java
              break
            case 1:
              window.location.href = result.data.data[0].php
              break
            default:

          }
        }
      })
    },
    appAddApi () {
      window.location.href = getDomain.getUrl('')
    },
    appDetai (code) {
      let _this = this
      window.location.href = getDomain.getUrl('appDetail/' + _this.myAPP[code].AppID)
    },
    activeEmail () {
      let _this = this
      if (_this.userVerified.status == 0) {
        CommonSvc.post({'email': _this.userEmail}, 'passport/account-ownership-apply.json', 2).done((result)=>{
          if (result.status == 200) {
            // 激活邮箱
            window.alert(result.message)
          }else {
            window.alert(result.message)
          }
        })
      } else {
        window.alert('您的电子邮箱已经验证过!')
      }

    },
    toApiDetail (code) {
      let _this = this
      // 存储apiID跳转详情页
      window.location.href = getDomain.getUrl('detail/' + _this.myAPI[code].ApiID)
    },
    addApi () {
      window.location.href = getDomain.getUrl('add')
    },
    letNav (code) {
      let _this = this
      // 检测下是否在账户设置页面
      if (code == 1) {
        // 页面加载时先请求下接口
        CommonSvc.get({},'passport/profile.json', 2).done(function(result){
          if (result.status == 200) {
            _this.profileData = result.attachment
            window.location.href = getDomain.getUrl('center/' + code)
          } else {
            window.location.href = getDomain.getUrl('center/' + code)
            window.alert('数据加载失败')
          }
        })
      } else {
        // 改变url控制部分显示
        window.location.href = getDomain.getUrl('center/' + code)
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
          let testRl = /^[^\u4e00-\u9fa5 ]{8,16}$/
          if (testRl.test(_this.changePassport.newpwd)) {

          } else {
            if (_this.changePassportErro.length == 0) {
              _this.changePassportErro.push('密码只能8-16个字符，不得含中文，不得含空格！')
            }
            return
          }
          if (testRl.test(_this.newpwdCK)) {

          } else {
            if (_this.changePassportErro.length == 0) {
              _this.changePassportErro.push('密码只能8-16个字符，不得含中文，不得含空格！')
            }
            return
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
                  window.alert('恭喜您密码修改成功')
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
              getUserInfo.getUserInfo(true)
              window.alert('保存成功啦')
            } else {
              _this.nickErro = []
              _this.nickErro.push(result.message)
            }
          })
          break
        case 3:
          CommonSvc.post(_this.profileData, 'passport/profile-update.json', 2).done(function (result) {
            if (result.status == 200) {
              window.alert('恭喜您保存成功')
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
          _this.uploadFlg = null
          _this.upFile = null
          _this.isAddLogo = false
          break
        case 3:
          let postSrc = _this.preShowSrc + ';' + _this.preShowSrc + ';' + _this.preShowSrc
          if (_this.uploadFlg) {
            CommonSvc.post({face : postSrc},'passport/account-upface.json', 2).done(function(result){
            if(result.status == 200){
              _this.uploadFlg = false
              getUserInfo.getUserInfo(true)
              window.alert('恭喜您添加成功')
              _this.isAddLogo = false
              }
            })
          } else {
            window.alert('请选择您要上传的文件')
          }

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
      window.localStorage.loginCBurl = getDomain.getUrl('center/' + _this.$route.params.pageFlae)
      window.location.href = getDomain.getUrl('login')
    }
    // 页面加载时先请求下接口
    CommonSvc.get({},'passport/profile.json', 2).done(function(result){
      if (result.status == 200) {
        _this.profileData = result.attachment
      }
    })
    // 监测变化，加载我的app和我的api列表
    _this.$watch('$route.params.pageFlae', function(newValue, oldValue){
      if (newValue != 1 && oldValue == 1) {
        _this.profileErro = []
      }
      // 把错误信息清空
      if(newValue != 2 && oldValue == 2) {
        _this.nickErro = []
        _this.changePassportErro = []
        // 清空用户名和密码
        _this.nick.nick = ''
        _this.changePassport.pwd = ''
        _this.changePassport.newpwd = ''
        _this.newpwdCK = ''
      }
      switch (newValue) {
        case '2':
          CommonSvc.get({'uids': userInfo.BaseUserInfo.uid}, 'passport/account-lookup.json', 2).done(function(result){
            if (result.status == 200) {
              _this.userEmail = result.attachment[0].email
              _this.userVerified.status = result.attachment[0].emailchk
              if (result.attachment[0].emailchk == 1) {
                _this.userVerified.text = '已验证'
              }
              if(result.attachment[0].emailchk == 0){
                _this.userVerified.text = '未验证'
              }
            } else {
              window.alert(result.message)
            }
          })
          break
        case '3':
          CommonSvc.get({'type': 'all'}, 'v1/user_app/my', 1).done(function(result){
            if (result.status == 200) {
              _this.myAPP = result.data.Apps
              // 查询下api作者字段没有，给字典查询下
              for (var i = 0; i < _this.myAPP.length; i++) {
                for (var j = 0; j < _this.myAPP[i].APIList.length; j++) {
                  _this.myAPP[i].APIList[j].nick = result.data.UsersInfo[_this.myAPP[i].APIList[j].UserID].nick
                  if (_this.myAPP[i].APIList[j].Logo == '') {
                    _this.myAPP[i].APIList[j].Logo = require('../../images/apiLogo.jpg')
                  }
                }
              }
            } else {
              window.alert(result.message)
            }
          })
          break
        case '4':
          CommonSvc.get({'type': 'all'}, '/v1/uapi/my', 1).done(function(result){
            if (result.status == 200) {
              if (result.data.Apis != null) {
                _this.myAPI = result.data.Apis
              }
              // 查询下api作者
              for (let i = 0; i < _this.myAPI.length; i++) {
                _this.myAPI[i].nick = result.data.UsersInfo[_this.myAPI[i].UserID].nick
                if (_this.myAPI[i].Logo == '') {
                  _this.myAPI[i].Logo = require('../../images/apiLogo.jpg')
                }
              }
            }else {
              window.alert(result.message)
            }
          })
          break
        default:

      }
    })
    // 页面首次渲染看是否为列表页
    switch (_this.$route.params.pageFlae) {
      case '2':
        CommonSvc.get({'uids': userInfo.BaseUserInfo.uid}, 'passport/account-lookup.json', 2).done(function(result){
          if (result.status == 200) {
            _this.userEmail = result.attachment[0].email
            _this.userVerified.status = result.attachment[0].emailchk
            if (result.attachment[0].emailchk == 1) {
              _this.userVerified.text = '已验证'
            }
            if(result.attachment[0].emailchk == 0){
              _this.userVerified.text = '未验证'
            }
          } else {
            window.alert(result.message)
          }
        })
        break
      case '3':
        CommonSvc.get({'type': 'all'}, 'v1/user_app/my', 1).done(function(result){
          if (result.status == 200) {
              _this.myAPP = result.data.Apps
            // 查询下api作者字段没有，给字典查询下
            for (var i = 0; i < _this.myAPP.length; i++) {
              for (var j = 0; j < _this.myAPP[i].APIList.length; j++) {
                _this.myAPP[i].APIList[j].nick = result.data.UsersInfo[_this.myAPP[i].APIList[j].UserID].nick
                if (_this.myAPP[i].APIList[j].Logo == '') {
                  _this.myAPP[i].APIList[j].Logo = require('../../images/apiLogo.jpg')
                }
              }
            }
          } else {
            window.alert(result.message)
          }
        })
        break
      case '4':
        CommonSvc.get({'type': 'all'}, '/v1/uapi/my', 1).done(function(result){
          if (result.status == 200) {
            _this.myAPI = result.data.Apis
            // 查询下api作者
            for (let i = 0; i < _this.myAPI.length; i++) {
              _this.myAPI[i].nick = result.data.UsersInfo[_this.myAPI[i].UserID].nick
              if (_this.myAPI[i].Logo == '') {
                _this.myAPI[i].Logo = require('../../images/apiLogo.jpg')
              }
            }
          }else {
            window.alert(result.message)
          }
        })
        break
      default:

    }
  }
}
</script>
<style scoped>
#myCenterRight{
  min-height: 0px;
}
.accountVerified{
  background: #4eca98;
}
.appNameEd{
  visibility: hidden;
}
.appNameT:hover .appNameEd{
  visibility: visible;
}
</style>

<template>
  <div class="mainBox">
      <div class="mainIn clx">
          <!--右侧功能区域开始-->
          <div class="mRightBox noMenu">

              <!--新建api 开始-->
              <div class="myCenterRight addAPIRight">
                  <h3>发布API</h3>
                  <div class="formBox">
                      <!--<div class="warnBox">您的邮箱没有验证</div>-->
                      <select class="selectS">
                          <option>导入您的文档 (可选)</option>
                      </select>
                      <div class="importApi clx">
                          <div class="importApiInfo">
                              <p>格式(目前BO开放平台只支持swagger 1.2定义文件)</p>
                              <select class="selectS">
                                  <option>swagger 1.2</option>
                              </select>
                              <div class="fileBox">
                                  <span class="btn btn28 btnMinor">选择文件</span> <span>{{  }}未选择任何文件</span>
                                  <input id="swgFile" type="file" class="fileS" v-on:change="uploadFile()" v-model="swgFile"/>
                              </div>
                          </div>
                      </div>

                      <!--<fieldset><legend>OR</legend></fieldset>-->

                        <div class="formBar">
                            <label>基础URL</label>
                            <input type="text" v-model="addApi.TargetBaseUri" v-on:change="checkEmail()" placeholder="http://api.yourdomain.com" class="inputS"  maxlength='255' />
                        </div>
                          <div class="formBar">
                              <label>API名称</label>
                              <input type="text" v-model="addApi.apiName" placeholder="API名称不得超过14位" class="inputS" maxlength="14"/>
                          </div>
                          <div class="formBar">
                              <label>选择标签</label>
                              <div class="inputS labelLi">
                                  <ul class="clx">
                                      <li class="click" v-for="selclabe in addApi.Categories" track-by="$index">{{ selclabe.Name }}<span v-on:click="removeLabel($index)"><i class="iconfont icon-turnoff"></i></span></li>
                                  </ul>
                              </div>
                              <ul class="labelLi clx">
                                  <li class="click" v-for="item in labelLi" track-by="$index" v-on:click="addLabel($index)">{{ item.Name }}</li>
                              </ul>

                          </div>
                          <div class="formBar">
                              <button class="btn btn42 btnMain" v-on:click="submit()">添加新的API</button>
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
import addApi from '../../models/md_addApi.js'
import mdadd1 from '../../models/md_add1.js'
import changeLoc from '../../controllers/changeLoc.js'
import CommonSvc from '../../services/CommonSvc.js'
import getUserInfo from '../../controllers/getUserInfo.js'
import getDomain from '../../controllers/getDomain.js'
export default{
  data () {
    return {
      getDomain,
      getUserInfo,
      addApi,
      mdadd1,
      CommonSvc,
      changeLoc,
      labelLi: [],
      swgFile: null
    }
  },
  methods: {
    uploadFile () {
      let _this = this
      let files = document.getElementById('swgFile').files
      window.console.log(_this.swgFile);
      if (files.length !== 0) {
        window.console.log(files[0].type)
        let fileType = _this.swgFile.split('.')
        if (fileType[fileType.length - 1] == 'json') {
        } else {
          window.alert('目前上传仅支持json类型文件！')
          _this.swgFile = ''
        }
      } else {
        window.alert('您还未选择文件！')
      }
    },
    checkEmail () {
      let theurl=/^[^\u4e00-\u9fa5]{0,}$/
      if (theurl.test(addApi.TargetBaseUri)) {
      }else {
        window.alert('请输入正确基础URL')
      }
    },
    removeLabel (code) {
      // 截取会引发视图渲染
      let temp = addApi.Categories.splice(code, 1)
      this.labelLi.push(temp[0])
    },
    addLabel (index) {
      if (addApi.Categories.length < 3) {
        // 点击增加标签
        let temp = this.labelLi.splice(index, 1)
        addApi.Categories.push(temp[0])
      } else {
        window.alert('每个API最多选择三个标签')
      }
    },
    submit () {
      let theurl=/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
      if (theurl.test(addApi.TargetBaseUri)) {
        // 校验必填项
        if (addApi.Categories.length != 0 && addApi.apiName != '' && addApi.TargetBaseUri != '') {
          let tempAR = []
          // 把id拼成字符串
          for (let i = 0; i < addApi.Categories.length; i++) {
            tempAR.push(addApi.Categories[i].Id)
          }
          CommonSvc.post({'Categories': tempAR.join(','),'ApiName': addApi.apiName,'TargetBaseUri': addApi.TargetBaseUri}, 'v1/uapi', 1).done(function(result){
            if(result.status == 200){
              // 放到下一步模型里以备下一步用
              mdadd1.step1.ApiID = result.data.ApiID
              // 存起来添加描述用
              window.localStorage.addDescApiID = result.data.ApiID
              // 然后跳转到下一步
              changeLoc.toAdd1(result.data.ApiID)
            } else {
              window.alert(result.message)
            }
          })
        } else {
          window.alert('基础URL,API名称,标签均不能为空。')
        }
      }else {
        window.alert('请输入正确基础URL')
      }
    }
  },
  ready: function () {
    let _this = this
    // 判断用户登录状态，若未登录，请先登录
    if (getUserInfo.getUserInfo()) {

    } else {
      window.alert('请先登录')
      window.location.href = getDomain.getUrl('login')
      window.localStorage.loginCBurl = getDomain.getUrl('add')
    }
    CommonSvc.get({}, 'v1/category/', 1).done(function (resault) {
      if (resault.status == 200) {
        _this.labelLi = resault.data
      }else {
        window.alert(resault.message)
      }
    })
  },
  destroyed: function () {
    // 当页面离开时，表单内数据清空
    addApi.apiName = ''
    addApi.Categories = []
    addApi.TargetBaseUri = ''
  }
}
</script>
<style scoped>
</style>

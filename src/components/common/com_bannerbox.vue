<template>
<div class="bannerBox">
    <div class="bannerIn apiBanner">
        <!--<div class="fr bannerRight">-->
            <!--<ul class="">-->
                <!--<li>-->
                    <!--<span>1</span>-->
                    <!--<span>开发人员</span>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<span>1</span>-->
                    <!--<span>追随者</span>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div>-->
                <!--<a href="#" class="btn">邀请开发者</a>-->
            <!--</div>-->
        <!--</div>-->
        <div class="fl bannerLeft">
            <dl class="clx">
                <dt v-on:click="addLogo(1)">
                  <img v-bind:src="apiDetail.Logo" />
                  <div class="changeLogo">点击更换logo</div>
                </dt>
                <dd class="apiName"><i class="iconfont icon-lock"></i> <b>{{ apiDetail.ApiName }}</b></dd>
                <dd class="userApiName"><i class="iconfont icon-touxiang"></i>{{ apiDetail.UserName }}<i class="iconfont icon-shizhong"></i>{{ apiDetail.CreateTime }}</dd>
            </dl>
            <a href="javascript:;" v-show="apiDetail.ApiDesc == ''" v-on:click="addDesc(1)" class="linkS">给API添加一个描述</a>
            <a href="javascript:;" id="apiDesc" v-show="apiDetail.ApiDesc !== ''" class="linkS">{{ apiDetail.ApiDesc }}</a>
        </div>


    </div>
</div>

<!--弹层 开始-->
<div class="tipBox" id="tipBox" v-show="isAddDesc">
    <div class="mask"></div>
<!--编辑描述-->
<div class="tipBoxIn editPathTip">
    <div class="tipHeader">
        <h2>描述</h2>
        <div class="closeTip click" id="close" v-on:click="addDesc(2)">×</div>
    </div>
    <div class="tipMain">
        <div class="formBar">
            <textarea class="inputS big" maxlength="140"  placeholder="最大字数140" v-model="ApiDesc.ApiDesc"></textarea>
        </div>
    </div>
    <div class="tipFooter">
        <button class="btn btn36 btnMinor" v-on:click="addDesc(2)">取消</button>
        <button class="btn btn36 btnMain" v-on:click="addDesc(3)">确定</button>
    </div>
</div>

</div>

<div class="tipBox" id="tipBox" v-show="isAddLogo">
  <div class="mask"></div>
<!--上传LOGO-->
<div class="tipBoxIn editPathTip logoBox">
  <div class="tipHeader">
      <h2>上传LOGO</h2>
      <div class="closeTip click" id="close" v-on:click="addLogo(2)">×</div>
  </div>
  <div class="tipMain">
    <div class="logoPic"><img v-bind:src="logoSrc" /></div>
    <div class="logoStic">
      <p>要求：请上传API高清图片</p>
      <p>建议400*400像素，PNG、JPG格式，大小不超过300KB</p>
      <a class="file">选择文件
      　　<input type="file" id="imgFile" v-on:change="checkImg()" value="选择文件" multiple size="80" v-model="imgFile" class="selectDoc" />
      </a>
    </div>
  </div>
  <div class="tipFooter upLogo">
      <button class="btn btn36 btnMain" v-on:click="addLogo(3)">确定</button>
  </div>
</div>

</div>
<!--弹层 结束-->
</template>
<script>
import $ from '../../../static/js/jquery-1.11.3.min.js'
window.$ = $
window.jQuery = $
import CommonSvc from '../../services/CommonSvc.js'
import uploadImg from '../../services/uploadImg.js'
export default{
  data () {
    return {
      uploadFlage: false,
      isAddDesc: false,
      isAddLogo: false,
      ApiDesc: {
        'ApiDesc': ''
      },
      apiDetail: {},
      logoSrc: require('../../images/apiLogo.jpg'),
      imgFile: '',
      md5Val: '',
      apiSrc: require('../../images/apiLogo.jpg')
    }
  },
  methods: {
    updata () {
      // 用于加载api资料
      let _this = this
      // 加载api信息
      let url = 'v1/uapi/' + _this.$route.params.ApiID
      CommonSvc.get({}, url, 1).done(function(result){
        if (result.status == 200) {
          // 看一下api是否有描述
          _this.apiDetail = result.data
          if (_this.apiDetail.Logo == '') {
            _this.apiDetail.Logo = require('../../images/apiLogo.jpg')
          }
          // 创建日期只要前几位，截取下
          _this.apiDetail.CreateTime = _this.apiDetail.CreateTime.substr(0, 10)
        }
      })
    },
    checkImg () {
      let _this = this
      let files = document.getElementById('imgFile').files
      if (files.length !== 0) {
        if (!/^(\s|\S)+(jpg|png|JPG|PNG)+$/.test(files[0].name)) {
          _this.imgFile = null
          window.alert('logo仅支持png和jpg')
          return
        } else {
          if (files[0].size > 2097152) {
            _this.imgFile = null
            window.alert('图片不得大于2M')
            return
          }
          let files1 = document.getElementById('imgFile').files[0]
           CommonSvc.upload(files1).done(function(result){
             if (result.status == 200) {
               _this.uploadFlage = true
               _this.logoSrc = 'http://img1.ffan.com/' + result.data
               _this.md5Val = result.data
               let img = new Image()
               img.src =  'http://img1.ffan.com/' + result.data
               img.onload = function () {
                 window.console.log(img.width)
                 window.console.log(img.height)
               }
             } else {
               window.alert('上传失败，请再试一次')
             }
          })
        }
      } else {
        window.alert('您还未选择任何文件')
      }
    },
    addDesc (code) {
      let _this = this
      switch (code) {
        case 1:
          _this.isAddDesc = true
          break
        case 2:
          _this.isAddDesc = false
          break
        case 3:
          let ApiID = _this.$route.params.ApiID
          if (ApiID != undefined && ApiID != '') {
            let url = 'v1/uapi/edit_desc/' + _this.$route.params.ApiID
            CommonSvc.put(_this.ApiDesc,url, 1).done(function(result){
              if(result.status == 200){
                _this.updata()
                window.alert('添加成功')
              }
            })
          } else {
            window.alert('先走第一步吧')
          }
          _this.isAddDesc = false
          break
        default:
      }
    },

    addLogo (code) {
      let _this = this
      switch (code) {
        case 1:
          let temp = _this.apiDetail.Logo
          _this.logoSrc = temp
          _this.imgFile = null
          _this.uploadFlage = false
          _this.isAddLogo = true
          break
        case 2:
          _this.imgFile = null
          _this.uploadFlage = false
          _this.isAddLogo = false
          break
        case 3:
          let url = 'v1/uapi/setLogo/' + _this.$route.params.ApiID
          let postSrc = 'http://img1.ffan.com/' + _this.md5Val
          if (_this.uploadFlage) {
            CommonSvc.put({logo : postSrc},url, 1).done(function(result){
              if(result.status == 200){
                _this.uploadFlage = false
                _this.updata()
                window.alert('添加成功')
              }
            })
          } else {
            window.alert('请选择您要更改的图片')
            return
          }
          _this.isAddLogo = false
          break
        default:

      }
    }
  },
  ready: function (){
    // 加载api资料
    this.updata()
  }
}
</script>
<style>
</style>

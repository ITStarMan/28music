<template>
<div class="bannerBox detailBannerBox">
  <div class="bannerIn apiBanner clx detailTop">
      <div class="fr bannerRight">
          <div v-bind:class="{'hide': info.result.Status !== 1}">
              <a class="btn btn42 btnGreen" v-on:click="ifPublish()">发布</a>
              <a class="btn btn42 btnRed" v-on:click="delApi()">删除</a>
          </div>
          <div class="offshelf" v-bind:class="{'hide': info.result.Status == 1 || info.result.IsOwner == 0}">
              <a class="btn btn42 btnRed" v-on:click="offShelf()">下架</a>
          </div>
      </div>
      <div class="fl bannerLeft">
          <dl class="clx">
              <dt v-on:click="sendLogo()">
                <img v-bind:src="logoPic" />
                <div v-bind:class="{'changeLogo': info.result.IsOwner == 1}">点击更换logo</div>
              </dt>
              <dd class="apiName"><i class="iconfont icon-lock" v-bind:class="{'hide': info.result.IsEdit == 0}"></i> <b>{{info.result.ApiName}}</b> <span class="apiHint" v-bind:class="{'hide': info.result.Status !== 1}">未发布</span><div class="detailCollectBox" v-on:click="like()" v-bind:class="{'hide': info.result.Status == 1}"><i class="iconfont" v-bind:class="{'icon-wujiaoxing': follow == true,'icon-uncollected': follow == false}"></i></div></dd>
              <dd class="userApiName"><i class="iconfont icon-touxiang" v-bind:class="{'hide': info.result.UserName == ''}"></i> {{info.result.UserName}}<i class="iconfont icon-biaoqian" v-bind:class="{'hide': info.result.Categories == ''}"></i> {{info.result.Categories}}<i class="iconfont icon-shizhong"> {{dates}}</i></dd>
              <dd class="userApiName" v-bind:class="{'hide': info.result.IsOwner == 0}" ><i class="iconfont icon-wangzhi" ></i> {{info.result.TargetBaseUri}}</dd>
          </dl>
          <a>{{info.result.ApiDesc}} <i class="iconfont icon-edit" v-on:click="addDesc()" v-bind:class="{'hide': info.result.IsOwner == 0}"></i></a>
      </div>
  </div>
</div>
<div class="tipBox" id="tipBox" v-show="isAddDesc">
  <div class="mask"></div>
  <!--编辑描述-->
  <div class="tipBoxIn editPathTip" v-bind:class="{ 'hide': descStatus == 0}">
      <div class="tipHeader">
          <h2>描述</h2>
          <div class="closeTip click" id="close" v-on:click="showDesc()">×</div>
      </div>
      <div class="tipMain">
          <div class="formBar">
              <textarea class="inputS big" v-model="ApiDesc" maxlength="140"  placeholder="最大字数140" ></textarea>
          </div>
      </div>
      <div class="tipFooter">
          <button class="btn btn36 btnMinor" v-on:click="showDesc()">取消</button>
          <button class="btn btn36 btnMain" v-on:click="editDesc()">确定</button>
      </div>
  </div>

  <div class="tipBoxIn editPathTip logoBox" v-bind:class="{ 'hide': logo == 0}">
      <div class="tipHeader">
          <h2>上传LOGO</h2>
          <div class="closeTip click" id="close" v-on:click="showDesc()">×</div>
      </div>
      <div class="tipMain">
        <div class="logoPic"><img v-bind:src="editPic" /></div>
        <div class="logoStic">
          <p>要求：请上传API高清图片</p>
          <p>建议400*400像素，PNG、JPG格式，大小不超过300KB</p>
          <a class="file">选择文件
          　　<input type="file" value="选择文件" class="selectDoc" id="imgFile" v-on:change="checkImg()" value="选择文件" multiple size="80" v-model="imgFile" />
          </a>
        </div>
      </div>
      <div class="tipFooter upLogo">
          <button class="btn btn36 btnMain" v-on:click="editLogo()">确定</button>
      </div>
  </div>

  <div class="tipBoxIn subscribeTip" v-bind:class="{ 'hide': publish == 0}">
    <div class="tipHeader">
    </div>
    <div class="tipMain">
      <p>确认发布API？</p>
    </div>
    <div class="tipFooter">
      <button class="btn btn36 btnMinor" v-on:click="hidePublish()">取消</button>
      <button class="btn btn36 btnMain" v-on:click="isPublish()">确定</button>
    </div>
  </div>

  <div class="tipBoxIn subscribeTip" v-bind:class="{ 'hide': ispublish == 0}">
    <div class="tipHeader">
    </div>
    <div class="tipMain">
      <p>发布成功！</p>
    </div>
    <div class="tipFooter">
    </div>
  </div>
</div>
</template>
<script>
import getinfo from '../../controllers/apiInfo'
import info from '../../models/md_apiInfo'
import CommonSvc from '../../services/CommonSvc'
import islogin from '../../controllers/getUserInfo'
import getDomain from '../../controllers/getDomain.js'
import uploadImg from '../../services/uploadImg.js'
export default{
  data () {
    return {
      info,
      dates: '',
      login: false,
      isAddDesc: false,
      ApiDesc: '',
      descStatus: 0,
      publish: 0,
      ispublish: 0,
      logo: 0,
      logoPic: '',
      editPic: '',
      imgFile: '',
      md5Val: '',
      uploadFlage: false,
      follow: false
    }
  },
  ready: function () {
    // 页面加载自动生成模板列表
    getinfo.ready(this.$route.params.ApiID)
    if(this.info.result.Logo == ''){
      this.logoPic = require('../../images/apiLogo.jpg')
    }else{
      this.logoPic = this.info.result.Logo
    }
    this.login = islogin.getUserInfo()
    this.getMyFollow(this.info.result.ApiID)
    this.editPic = this.logoPic
    this.getDate(this.info.result.CreateTime)
    this.changeDesc()
  },
  methods: {
    ifPublish () {
      if(this.info.result.Endpoint == null){
        alert('请至少添加一个路径')
      }else{
        this.isAddDesc = true
        this.publish = 1        
      }
    },

    hidePublish () {
      this.publish = 0
      this.isAddDesc = false
    },

    isPublish () {
      let api = this.info.result.ApiID
      let data = {}
      let perurl = 'v1/uapi/publish/' + api
      let _this = this
      CommonSvc.put(data, perurl ,1).done(function(result){
        if (result.status == 200) {
          _this.publish = 0
          _this.ispublish = 1
          setTimeout(function(){
            window.location.reload()
          },1000)
        }else {
          window.alert(result.message)
        }
      })
    },

    getDate (date) {
      let year = date.slice(0,4)
      let month = date.slice(5,7)
      let day = date.slice(8,10)
      let createtime = year + '.'+ month + '.' + day
      this.dates = createtime
    },

    showDesc () {
      this.isAddDesc = false
      this.logo = 0
      this.descStatus = 0
      this.imgFile = null
      this.md5Val = null
      this.uploadFlage = false
      this.editPic = this.logoPic
    },

    addDesc () {
      this.isAddDesc = true
      this.descStatus = 1
    },

    changeDesc () {
      this.ApiDesc = this.info.result.ApiDesc
    },

    editDesc () {
      let url = 'v1/uapi/edit_desc/' + this.info.result.ApiID
      let data = {
        ApiDesc: this.ApiDesc
      }
      let _this = this
      CommonSvc.put(data,url, 1).done(function(result){
        if(result.status == 200){
          getinfo.ready(_this.info.result.ApiID)
          window.alert('修改成功！')
        }
      })
      this.showDesc()
    },

    sendLogo () {
      if(this.info.result.IsOwner == 1){
        this.isAddDesc = true
        this.logo = 1
      }
    },

    editLogo () {
      let url = 'v1/uapi/setLogo/' + this.info.result.ApiID
      let postSrc = 'http://img1.ffan.com/' + this.md5Val
      if (this.uploadFlage) {
      	let _this = this
        CommonSvc.put({logo : postSrc},url, 1).done(function(result){
          if(result.status == 200){
          	_this.logoPic = _this.editPic
            window.alert('添加成功！')
            _this.uploadFlage = false
        	_this.showDesc()
          }else{
          	_this.uploadFlage = false
        	_this.showDesc()
          }
        })

      }else{
        window.alert('请选择您要更改的图片')
        return
      }
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
              _this.editPic = 'http://img1.ffan.com/' + result.data
              _this.md5Val = result.data
             }else {
              window.alert('上传失败，请再试一次')
             }
          })
        }
      } else {
        window.alert('您还未选择任何文件')
      }
    },

    like () {
      if(this.login){
        if(this.follow){
          let perData = {}
          let perUrl = 'v1/follow/' + this.info.result.ApiID
          let _this = this
          CommonSvc.det(perData, perUrl,1).done(function (result) {
            if (result && result.status === 200) {
              _this.getMyFollow(_this.info.result.ApiID)                   
            }
          })         
        }else{
          let perData = {}
          let perUrl = 'v1/follow/' + this.info.result.ApiID
          let _this = this
          CommonSvc.put(perData, perUrl,1).done(function (result) {
            if (result && result.status === 200) {
              _this.getMyFollow(_this.info.result.ApiID)             
            }
          })
        }
      }else{
        if(confirm("您还未登录,是否跳转到登录页面？")){
          window.location.href = getDomain.getUrl('login?callbackurl=' +  getDomain.getUrl('detail/' + this.info.result.ApiID))
        }
      }
    },

    getMyFollow (apis) {
      if(this.login){
        let perData = {
          'apiIds': apis
        }
        let _this =this
        let perUrl = 'v1/follow/ifMyFollowApis'
        CommonSvc.get(perData, perUrl,1).done(function (result) {
          if (result && result.status === 200) {
            if(result.data[_this.info.result.ApiID] == undefined){
              _this.follow = false
            }else{
              _this.follow = true
            }
          }
        })
      }
    },

    delApi () {

    },

    offShelf () {
    
    }
  }
}
</script>
<style>
</style>

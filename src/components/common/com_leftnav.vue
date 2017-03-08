<template>
  <div class="mLeftBox listLeft" v-show="label.status">
    <div class="createApi" v-on:click="toAddApi()"><i class="iconfont icon-create"></i> 创建API</div>
    <ul class="menuBox menuTop">
      <li v-on:click="toMyApi()">
        <span  v-bind:class="{ 'liBtn': select === $index+1}"><i class="iconfont icon-application"></i> 我的API</span>
      </li>
      <li v-on:click="toDoc()">
        <span><i class="iconfont icon-file"></i> 开发者文档</span>
      </li>
    </ul>
    <ul class="menuBox">
      <li v-on:click="changeAll()">
        <span v-bind:class="{ 'liBtn': select === 0}"><i class="iconfont icon-biaoqian"></i> 全部标签</span>
      </li>
      <li v-for="item in label.result" v-on:click="change($index)">
        <span v-bind:class="{ 'liBtn': select === $index+1}"><i class="iconfont" v-bind:class="item.LogoUri"></i> {{item.Name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import label from '../../models/md_label'
import getapi from '../../controllers/getApi'
import getlab from '../../controllers/getLabel'
import tolocation from '../../controllers/changeLoc'
import getDomain from '../../controllers/getDomain.js'
import islogin from '../../controllers/getUserInfo'
import apilist from '../../models/md_apiList'
import follow from '../../models/md_follow'
import CommonSvc from '../../services/CommonSvc'
import logo from '../../models/md_logo'
export default{
  data () {
    return {
      label,
      select: 0,
      apilist,
      logo,
      follow,
      login: false
    }
  },
  methods: {
    change (index) {
      this.select = index + 1
      this.label.listid = label.result[index].Id   
      getapi.ready(label.result[index].Id)
      this.getMyFollow(this.apilist.result.ApiIDSets)
      this.getLogo()
      $(document).scrollTop(0)
    },
    changeAll () {
      this.select = 0
      this.label.listid = 0
      getapi.ready(0)
      this.getMyFollow(this.apilist.result.ApiIDSets)
      this.getLogo()
      $(document).scrollTop(0)
    },
    getMyFollow (apis) {
      this.login = islogin.getUserInfo()
      if(this.login){
        let perData = {
          'apiIds': apis
        }
        let _this =this
        let perUrl = 'v1/follow/ifMyFollowApis'
        CommonSvc.get(perData, perUrl,1).done(function (result) {
          if (result && result.status === 200) {
            _this.follow.list = result.data
          }
        })
      }
    },
    getLogo () {
      if(this.apilist.result.Apis !== null){
        for(let i = 0;i<this.apilist.result.Apis.length;i++){
            if(this.apilist.result.Apis[i].Logo == ''){
                this.logo[i] = require('../../images/apiLogo.jpg')
            }else{
                this.logo[i] = this.apilist.result.Apis[i].Logo
            }
        }
      }        
    },
    toMyApi () {
      if(this.login){
        window.location.href = getDomain.getUrl('center/4')
      }else{
        if(confirm("您还未登录,是否跳转到登录页面？")){
          window.location.href = getDomain.getUrl('login')
          window.localStorage.loginCBurl = getDomain.getUrl('')
        }      
      }
      
    },
    toAddApi () {     
      if(this.login){
        tolocation.toAdd()
      }else{
        if(confirm("您还未登录,是否跳转到登录页面？")){
          window.location.href = getDomain.getUrl('login')
          window.localStorage.loginCBurl = getDomain.getUrl('')
        }        
      }
    },
    toDoc () {
      window.location.href = getDomain.getUrl('doc')
    }
  },
  ready: function () {
    getlab.ready()
    this.login = islogin.getUserInfo()
  }
}
</script>
<style>
</style>

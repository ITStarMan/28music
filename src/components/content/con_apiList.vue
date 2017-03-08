<template>
<!--<div v-bind:class="{ 'mRightBox': hidestu === 0,'mRightBox noMenu': hidestu !== 0}" class="mRightBox1">-->
<div class="mRightBox listRight">
  <div class="viewImg">
    <ul>
      <li><img src="../../images/img.jpg" alt="" title=""/> </li>
    </ul>
  </div>
  <div class="rightTop clx">
        <div class="siftBox fr">
            <div class="siftRequirement">
                <!--<label>排序：</label>-->
                <select class="selectS">
                    <option value="">默认排序</option>
                </select>
            </div>
            <div class="siftRequirement">
                <!--<label>价格区间：</label>-->
                <select class="selectS">
                    <option value="">价格排序</option>
                </select>
            </div>
        </div>
        <!--<div class="hideBtn fl" v-on:click="hide()" >-->
        <div class="hideBtn fl">
            <i class="iconfont icon-hot-control"></i> 热门API
        </div>
    </div>

    <!--市场列表页 开始-->
    <div class="apiListBox">
        <div class="apiList" v-for="item in apilist.result.Apis" v-on:click.stop="link($index)">
          <!--icon-uncollected 空心五角星-->
            <div class="collectBox" v-on:click.stop="like($index)" v-bind:class="{'collected': follow.list[item.ApiID] !== undefined}"><i class="iconfont" v-bind:class="{'icon-wujiaoxing': follow.list[item.ApiID] !== undefined,'icon-uncollected': follow.list[item.ApiID] == undefined}"></i></div>
            <div class="apiListInfo">
                <h4>{{item.ApiName}}</h4>
                <!--<div class="userFAN" v-on:click.stop="toDeve($index)"><img v-bind:src="apilist.result.UsersInfo[item.UserID].face" />{{apilist.result.UsersInfo[item.UserID].nick}}</div>-->
                <div class="userFAN" v-on:click.stop="toDeve($index)"><span class="ffanBg"><img src="../../images/userLogo.png"/></span> {{apilist.result.UsersInfo[item.UserID].nick}}</div>
                <div class="businessImg"><img v-bind:src="logo[$index]" /></div>
                <div class="businessInfo">
                    {{item.ApiDesc}}
                </div>
            </div>
            <div class="listBottom">
                <div class="freeBtn">免费</div>
                <div class="apiInfo">
                    <ul class="clx">
                        <li><i class="iconfont icon-user"></i> {{item.DeveloperAmount}}</li>
                        <li><i class="iconfont icon-wujiaoxing"></i> {{item.FollowerAmount}}</li>
                        <li><i class="iconfont icon-arrowup"></i> 100%</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--市场列表页结束-->
</div>
<!--右侧功能区域结束-->
</template>
<script>
import getapi from '../../controllers/getApi'
import tolocation from '../../controllers/changeLoc'
import islogin from '../../controllers/getUserInfo'
import apilist from '../../models/md_apiList'
import labels from '../../models/md_label'
import CommonSvc from '../../services/CommonSvc'
import getDomain from '../../controllers/getDomain.js'
import label from '../../models/md_label'
import logo from '../../models/md_logo'
import follow from '../../models/md_follow'
import scroll from '../../models/md_scroll'
import $ from '../../../static/js/jquery-1.11.3.min.js'
export default{
  data () {
    return {
      apilist,
      login: false,
      follow,
      hidestu: 0,
      labels,
      logo,
      scroll
    }
  },
  ready: function () {
    // 页面加载自动生成模板列表
    if(scroll.top == 0){
        $('body').animate( {scrollTop: 0}, 500)
    }else{
        $(document).scrollTop(scroll.top)
    }
    scroll.top = 0
    getapi.ready(0)
    this.getLogo()
    this.getMyFollow(this.apilist.result.ApiIDSets)
  },
   methods: {
    hide () {
        if(this.hidestu == 1){
            this.hidestu = 0
            label.status = true
        }else{
            this.hidestu = 1
            label.status = false
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
    link (index) {
        this.scroll.top = $(document).scrollTop()
        window.location.href = getDomain.getUrl('detail/' + this.apilist.result.Apis[index].ApiID)
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
    like (index) {
        if(this.login){
            if(this.follow.list[this.apilist.result.Apis[index].ApiID] == undefined){
                let perData = {}
                let perUrl = 'v1/follow/' + this.apilist.result.Apis[index].ApiID
                let _this = this
                CommonSvc.put(perData, perUrl,1).done(function (result) {
                  if (result && result.status === 200) {
                    getapi.ready(_this.labels.listid)
                    _this.getMyFollow(_this.apilist.result.ApiIDSets)             
                  }
                })
            }else{
                let perData = {}
                let perUrl = 'v1/follow/' + this.apilist.result.Apis[index].ApiID
                let _this = this
                CommonSvc.det(perData, perUrl,1).done(function (result) {
                  if (result && result.status === 200) {
                    getapi.ready(_this.labels.listid)
                    _this.getMyFollow(_this.apilist.result.ApiIDSets)                   
                  }
                })
            }
        }else{
            if(confirm("您还未登录,是否跳转到登录页面？")){
                window.location.href = getDomain.getUrl('login')
                window.localStorage.loginCBurl = getDomain.getUrl('')
            }     
        }
    },
    toDeve (index) {
        this.scroll.top = $(document).scrollTop()
        window.location.href = getDomain.getUrl('developer/' + this.apilist.result.Apis[index].UserID)
    }
  }
}
</script>
<style>
</style>

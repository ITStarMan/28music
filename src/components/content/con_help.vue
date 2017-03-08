<template>
<div class="subNavBox detailNav">
  <div class="subNavBoxIn">
      <ul class="">
          <li v-on:click="toDoc()"><a>文档</a></li>
          <li class="active"><a>帮助</a></li>
          <li v-on:click="toSet()" v-bind:class="{'hide': info.result.IsOwner == 0}"><a>设置</a></li>
          <li v-on:click="toData()" v-bind:class="{'hide': info.result.Status == 1}"><a>数据</a></li>
      </ul>
  </div>
</div>

<div class="mainBox">
    <div class="mainIn clx">
        <!--左侧菜单 开始-->
        <div class="mLeftBox detailLeft helpLeft">
            <div class="createApi" v-on:click="addHelp2()" v-bind:class="{'hide': info.result.IsEdit !== 1}"><i class="iconfont icon-create"></i> 增加新条目</div>
            <ul class="detailLeftBtn">
                <li v-for="item in helplist.result" v-bind:class="{'active': helpleft == $index}" v-on:click="toHelp($index,item.UsageId)">
                <span><b>{{item.Title}}</b></span>
                </li>
                <li v-for="item in addhelp" class="active">
                <span><b>{{item.Title}}</b></span>
                </li>
            </ul>
        </div>
        <!--左侧菜单 结束-->

        <!--右侧功能区域 开始-->
        <div class="mRightBox col-2">
          <div class="helpBox">
            <ul>
              <li v-for="item in helplist.result">
                        <div class="titleBox">
                            <div contenteditable="false" class="helptitle" v-bind:class="{'edit': editstatus == $index}" v-bind:id="-item.UsageId" v-on:keyup="changeText($index,14,1)">{{item.Title}}</div><i v-bind:class="{'hide': info.result.IsEdit == 0 || editstatus == $index}" class="iconfont icon-edit" v-on:click="editHelp($index)" ></i>
                        </div>
                <div contenteditable="false" v-bind:class="{'edit': editstatus == $index}" class="helpcontent" v-bind:id="item.UsageId">{{{item.Text}}}</div>
                        <button class="btn btn36 btnMain" v-on:click="sendEdit(item.UsageId,$index)" v-bind:class="{'hide': editstatus !== $index}">确定</button>
                        <button class="btn btn36 btnMain del" v-bind:class="{'hide': editstatus !== $index}" v-on:click="detHelp(item.UsageId)">删除</button>
                        <button class="btn btn36 btnMinor" v-bind:class="{'hide': editstatus !== $index}" v-on:click="stopEdit()">取消</button>
              </li>
                    <li v-for="item in addhelp">
                        <div class="titleBox">
                            <div contenteditable="plaintext-only" class="addtitle edit" v-on:keyup="changeAddText($index,14,1)" id="addtitle">{{item.Title}}</div>
                        </div>
                        <div contenteditable="plaintext-only" class="addcontent edit" id="add">{{item.Text}}</div>
                        <button class="btn btn36 btnMain" v-on:click="sendAdd($index)">提交</button>
                        <button class="btn btn36 btnMinor" v-on:click="stopAdd()">取消</button>
                    </li>
            </ul>           
          </div>
        </div>
        <!--右侧功能区域 结束-->
    </div>
</div>
</template>
<script>
import getDomain from '../../controllers/getDomain.js'
import helplist from '../../models/md_help'
import CommonSvc from '../../services/CommonSvc'
import getinfo from '../../controllers/apiInfo'
import info from '../../models/md_apiInfo'

export default{
  data () {
    return {
      info,
      IsEdit: 1, 
      helplist,
      addhelp: [],
      addstatus: 0,
      editstatus: -1,
      helpleft: 0
    }
  },
  methods: {
    toDoc () {
        window.location.href = getDomain.getUrl('detail/' + this.$route.params.ApiID)
    },
    toData () {
        window.location.href = getDomain.getUrl('data/' + this.$route.params.ApiID)
    },
    toSet () {
        window.location.href = getDomain.getUrl('setup/' + this.$route.params.ApiID)
    },

    editHelp (index) {
        this.stopEdit()
        this.editstatus = index
        let content = document.getElementsByClassName('helpcontent')
        for(let i=0;i<content.length;i++){
            if(i == index){
                content[i].contentEditable = 'plaintext-only'
            }else{
                content[i].contentEditable = false
            }
        }
        let title = document.getElementsByClassName('helptitle')
        for(let i=0;i<title.length;i++){
            if(i == index){
                title[i].contentEditable = 'plaintext-only'
            }else{
                title[i].contentEditable = false
            }
        }
    },

    //点击帮助左边栏
    toHelp (index,id) {
        this.helpleft = index
        //document.getElementById("id").scrollIntoView();
        this.naver(id)
    },

    //帮助信息滚轮定位
    naver (id) {
      let obj = document.getElementById(id);
      let oPos = obj.offsetTop;
      return window.scrollTo(0, oPos-36);
    },

    //取消编辑帮助
    stopEdit () {
        this.editstatus = -1
        let content = document.getElementsByClassName('helpcontent')
        for(let i=0;i<content.length;i++){
            content[i].contentEditable = false
            content[i].innerHTML = this.helplist.result[i].Text
        }
        let title = document.getElementsByClassName('helptitle')
        for(let i=0;i<title.length;i++){
            title[i].contentEditable = false
            title[i].innerHTML = this.helplist.result[i].Title
        }
    },

    //增加一条帮助
    addHelp () {
        let _this = this
        let detail = [{"Title": "请输入帮助名称","Text": "请输入一条帮助信息"}]
        let data = {
            Detail: JSON.stringify(detail)
        }
        CommonSvc.put(data, 'v1/uapiUsage/' + this.$route.params.ApiID, 1, 2).done(function(result){
            if (result.status == 200) {
                _this.gethelp()
                setTimeout(function(){
                    _this.editHelp(_this.helplist.result.length-1)
                    _this.toHelp(_this.helplist.result.length-1,_this.helplist.result[_this.helplist.result.length-1].UsageId)
                },100)
            }else {
              window.alert(result.message)
            }
        })
    },

    addHelp2 () {
        if(this.addstatus == 0){
            this.addstatus = 1
            this.helpleft = -1
            this.addhelp = [{
                Title: "请输入帮助名称",
                Text: "请输入一条帮助信息"
            }]
            let _this = this
            setTimeout(function(){
                _this.naver('add')
            },100)
        }else{
            alert('您还有正在编辑的新增加条目')
        }

    },

    stopAdd () {
        this.addhelp = []
        this.addstatus = 0
        this.toHelp(0,this.helplist.result[0].UsageId)
    },

    sendAdd (index) {
        let content = document.getElementsByClassName('addcontent')
        let title = document.getElementsByClassName('addtitle')
        if(title[index].innerHTML == "" || content[index].innerHTML == ""){
            alert('信息不能为空')
        }else{
            let _this = this
            let detail = [{"Title": title[index].innerHTML,"Text": content[index].innerHTML}]
            let data = {
                Detail: JSON.stringify(detail)
            }
            CommonSvc.put(data, 'v1/uapiUsage/' + this.$route.params.ApiID, 1, 2).done(function(result){
                if (result.status == 200) {
                    _this.gethelp()
                    _this.addhelp = []
                    _this.addstatus = 0
                    setTimeout(function(){
                        _this.toHelp(0,_this.helplist.result[0].UsageId)
                        _this.stopEdit()
                    },100)
                }else {
                  window.alert(result.message)
                }
            })
        }
    },

    //获取帮助列表
    gethelp () {
        let _this = this
        let data = {}
        CommonSvc.get(data, 'v1/uapiUsage/' + this.$route.params.ApiID, 1, 2).done(function(result){
            if (result.status == 200) {
                _this.helplist.result = result.data
            }else {
              window.alert(result.message)
            }
        })
    },

    //删除一条帮助信息
    detHelp (id) {
        let _this = this
        let data = {}
        CommonSvc.det(data, 'v1/uapiUsage/' + this.$route.params.ApiID + '/' + id, 1).done(function(result){
            if (result.status == 200) {
                _this.gethelp()
                setTimeout(function(){
                    _this.toHelp(0,_this.helplist.result[0].UsageId)
                },100)
            }else {
              window.alert(result.message)
            }
        })
    },

    //编辑帮助信息
    sendEdit (id,index) {
        let content = document.getElementsByClassName('helpcontent')
        let title = document.getElementsByClassName('helptitle')
        if(title[index].innerHTML == "" || content[index].innerHTML == ""){
            alert('信息不能为空')
        }else{
            let _this = this
            let detail = [{"UsageId": id,"Title": title[index].innerHTML,"Text": content[index].innerHTML}]
            let data = {
                Detail: JSON.stringify(detail)
            }
            CommonSvc.put(data, 'v1/uapiUsage/' + this.$route.params.ApiID, 1).done(function(result){
                if (result.status == 200) {
                    _this.gethelp()
                    _this.stopEdit()
                }else {
                  window.alert(result.message)
                }
            })
        }
    },

    //超过截取后光标定位到最后
    keyAction (obj) {
        let textbox = document.getElementById(obj)
        let sel = window.getSelection()
        let range = document.createRange()
        range.selectNodeContents(textbox)
        range.collapse(false)
        sel.removeAllRanges()
        sel.addRange(range)
    },

    //检查输入框字符数 超过num自动截取 id=1是title 2是text
    changeText (index,num,id) {
        let content = document.getElementsByClassName('helpcontent')
        let title = document.getElementsByClassName('helptitle')
        if(id == 1){
            if(title[index].innerHTML.length > num){
                title[index].innerHTML = title[index].innerHTML.substr(0,num)
                this.keyAction(title[index].id)
            }
        }else{
            if(content[index].innerHTML.length > num){
                content[index].innerHTML = content[index].innerHTML.substr(0,num)
                this.keyAction(content[index].id)
            }
        }
    },

    changeAddText (index,num,id) {
        let content = document.getElementsByClassName('addcontent')
        let title = document.getElementsByClassName('addtitle')
        if(id == 1){
            if(title[index].innerHTML.length > num){
                title[index].innerHTML = title[index].innerHTML.substr(0,num)
                this.keyAction(title[index].id)
            }
        }else{
            if(content[index].innerHTML.length > num){
                content[index].innerHTML = content[index].innerHTML.substr(0,num)
                this.keyAction(content[index].id)
            }
        }
    },

    helpScroll () {
      let _this = this
      $(window).scroll(function(){
        if(_this.ifhelp == 1){
          if($(window).scrollTop() >= 200){
            $('.detailNav').addClass('scrollFix')
            $('.detailBannerBox').css('display','none')
            $('.detailLeft').addClass('leftFix')
            $('.mRightBox').addClass('contentFix')      
          }else{
            $('.detailNav').removeClass('scrollFix')
            $('.detailBannerBox').css('display','block')
            $('.detailLeft').removeClass('leftFix')
            $('.mRightBox').removeClass('contentFix')
          }
        }       
      });
    },
  },
  ready: function () {
    getinfo.ready(this.$route.params.ApiID)
    this.gethelp()
  }
}
</script>
<style>
.scrollFix{
  position: fixed;
    width: 100%;
    top: 77px;
    z-index: 5;
}
.leftFix{
  position: fixed;
  top: 130px;
  height: 100%
}
.contentFix{
  display: block;
  margin: 330px 0 0 210px
}
</style>

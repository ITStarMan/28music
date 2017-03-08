<template>
<div class="subNavBox detailNav">
  <div class="subNavBoxIn">
      <ul class="">
          <li v-on:click="toDoc()"><a>文档</a></li>
          <li v-on:click="toHelp()"><a>帮助</a></li>
          <li class="active"><a>设置</a></li>
          <li v-on:click="toData()" v-bind:class="{'hide': info.result.Status == 1}"><a>数据</a></li>
      </ul>
  </div>
</div>
<div class="mainBox">
  <div class="mainIn clx">
    <div class="setupBox">
      <div class="formBox">
        <div class="warnBox" v-show="erroMsg!= ''">{{ erroMsg }}</div>
        <div class="formIn">
          <h4>API基础信息</h4>
          <div class="formBar">
            <label>API名称：</label>
            <div class="inputR">
              <input type="text" placeholder="城市坐标" class="inputS"/>
            </div>
          </div>
          <div class="formBar">
            <label>基础URL：</label>
            <div class="inputR">
              <input type="text" placeholder="城市坐标" class="inputS"/>
            </div>
          </div>
          <div class="formBar">
            <label>标签：</label>
            <div class="inputR">
              <div class="inputS labelLi">
                <ul class="clx">
                  <li>tools<span><i class="iconfont icon-turnoff"></i></span></li>
                </ul>
              </div>
              <ul class="labelLi clx">
                <li>tools</li>
                <li>tools</li>
                <li>tools</li>
                <li>tools</li>
                <li>tools</li>
              </ul>
            </div>
          </div>
          <div class="formBar">
            <label>描述：</label>
            <div class="inputR">
              <textarea class="inputS"></textarea>
            </div>
          </div>

          <h4>API安全设置</h4>
          <div class="formBar">
            <label>请求次数限制：</label>
            <div class="inputR">
              <input type="text" placeholder="" class="inputS haveNuit"/>
              <span class="nuitTex">次/天</span>
              <span>(不超过)</span>
            </div>
          </div>
          <div class="formBar">
            <label>请求频率限制：</label>
            <div class="inputR">
              <input type="text" placeholder="" class="inputS haveNuit"/>
              <span class="nuitTex">次/秒</span>
              <span>(不超过)</span>
            </div>
          </div>
          <div class="formBar">
            <label>报文大小限制：</label>
            <div class="inputR">
              <input type="text" placeholder="" class="inputS haveNuit"/>
              <span class="nuitTex">KB</span>
              <span>(不超过)</span>
            </div>
          </div>
          <div class="formBar">
            <label>白名单：</label>
            <div class="inputR flexBox">
              <input type="text" placeholder="请输入APP KEY" class="inputS"/>
              <span class="btn btn28 btnMain">添加</span>
              <ul class="labelLi clx">
                <li>tools<span><i class="iconfont icon-turnoff"></i></span></li>
                <li>tools<span><i class="iconfont icon-turnoff"></i></span></li>
                <li>tools<span><i class="iconfont icon-turnoff"></i></span></li>
              </ul>
            </div>
          </div>
          <div class="formBar">
            <label>黑名单：</label>
            <div class="inputR flexBox">
              <input type="text" placeholder="请输入APP KEY" class="inputS"/>
              <span class="btn btn28 btnMain">添加</span>
              <ul class="labelLi clx">
                <li class="ellipsis">这里有16个汉字的最少字符最少字符<span><i class="iconfont icon-turnoff"></i></span></li>
                <li class="ellipsis">tools<span><i class="iconfont icon-turnoff"></i></span></li>
                <li class="ellipsis">tools<span><i class="iconfont icon-turnoff"></i></span></li>
              </ul>
            </div>
          </div>
          <div class="formBar mt50">
            <label></label>
            <div class="inputR btnGrounp2">
              <button class="btn btn42 btnMinor">取消</button>
              <button class="btn btn42 btnMain">确认</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import getDomain from '../../controllers/getDomain.js'
import getinfo from '../../controllers/apiInfo'
import info from '../../models/md_apiInfo'

export default{
  data () {
    return {
      info
    }
  },
  methods: {
    toDoc () {
        window.location.href = getDomain.getUrl('detail/' + this.$route.params.ApiID)
    },
    toHelp () {
        window.location.href = getDomain.getUrl('help/' + this.$route.params.ApiID)
    },
    toSet () {
        window.location.href = getDomain.getUrl('setup/' + this.$route.params.ApiID)
    }
  },
  ready: function () {
    getinfo.ready(this.$route.params.ApiID)
  }
}
</script>
<style>
</style>

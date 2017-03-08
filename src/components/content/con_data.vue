<template>
<div class="subNavBox detailNav">
  <div class="subNavBoxIn">
      <ul class="">
          <li v-on:click="toDoc()"><a>文档</a></li>
          <li v-on:click="toHelp()"><a>帮助</a></li>
          <li v-on:click="toSet()" v-bind:class="{'hide': info.result.IsOwner == 0}"><a>设置</a></li>
          <li class="active"><a>数据</a></li>
      </ul>
  </div>
</div>

<div class="mainBox">
  <div class="mainIn clx">
    <div class="dbBox" v-for="item in url">
      <iframe src="{{item.src}}" frameborder="0"></iframe>
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
      url: [{
        'src': getDomain.getDashborad('dashboard-solo/db/for-every-api?var-apiId='+ this.$route.params.ApiID + '&panelId=4')
      },
      {
        'src': getDomain.getDashborad('dashboard-solo/db/for-every-api?var-apiId='+ this.$route.params.ApiID + '&panelId=2')
      },
      {
        'src': getDomain.getDashborad('dashboard-solo/db/for-every-api?var-apiId='+ this.$route.params.ApiID + '&panelId=11')
      }],
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
.dbBox iframe{
  width: 100%;
  height: 260px;
}
.dbBox{
  margin: 10px 0;
}
</style>

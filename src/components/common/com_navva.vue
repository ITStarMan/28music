<template>
 <div class="fenzong"> 
    <div class="fenlei" > 
      <span class="select">分类：</span>
      <a><span class="all" v-on:click="toInfor(0)" v-bind:class="{'select': code == 0}">全部</span></a>
      <a v-for="item in labellist.result" v-on:click="toInfor(item.labelID)" v-bind:class="{'select': code == item.labelID}">{{item.labelName}}</a>
      <div class="fenlei-rg">
         <span class="select">默认</span>
         <a href="">价格</a>
         <div class="sanjiao"></div>
         <a href="">上架时间</a>
         <div class="jiantou"></div>
      </div>
    </div>
</div>
</template>
<script>
import goods from '../../models/md_goodsList'
import labellist from '../../models/md_label'

export default{
  data () {
    return {
      labellist,
      goods,
      code: 0
    }
  },
  ready: function () {
  	this.getListSecond()
  },
  methods: {
    getListSecond () {
      let _this = this
      $.ajax({
        url:'http://www.28dagang.com/api/getAllGoods.php?CegID=' +  this.$route.params.CegID,
        data:{},
        dataType:'JSON',
        type:'GET',
        success:function(data){
          console.log(data)
          _this.labellist.result = data.label
        }
      })
    },
     toInfor (id) {
            this.code = id
            let _this = this
            let sendData = {}
            if(id == 0){
              sendData = {
                'CegID': this.$route.params.CegID
              }
            }else{
              sendData = {
                'CegID': this.$route.params.CegID,
                'labelID': id
              }
            }
            $.ajax({
                url:'http://www.28dagang.com/api/getAllGoods.php',
                data: sendData,
                DataType:'JSON',
                type:'GET',
                success:function(data){
                   console.log(data)
                    _this.goods.result.label = data.label
                    console.log(_this.goods.label)
                }
            })
         },
  }
}
</script>
<style scoped>
.fenzong{height:8-px;background:#eeeeee;}
.fenlei{width:1090px;height:100px; margin:0 auto;border-bottom:1px solid #eeeeee;background:#ffffff;}
.fenlei span{line-height:120px;}
.fenlei a{padding-left:30px;}
.fenlei a:hover{color:#b4a078;cursor:pointer;}
.select{ color:#b4a078; padding-left:30px;}
.fenlei-rg{width:290px;height:50px;float:right; margin-right:30px;line-height:120px;}
 .sanjiao {display: inline-block;width:20px;height:20px;margin-left: 10px;background: url(../../images/sanjiao.png)no-repeat;}
.jiantou{ display: inline-block; width:20px;height:30px;margin-left: 10px;background: url(../../images/jiantou.png)no-repeat;background-image:cover;}
.all{
  padding-left: 30px;
}
</style>
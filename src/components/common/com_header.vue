<template>
  	<div class="headerBox">
	  	<div class="inner">
	  		<p class="topTitle fl">你想要的，都在这里</p>
	  		<div class="fr">
	  			<a href="" class="login">登录</a>
	  			<a href="" >注册</a>
	  		</div>
	  	</div>
  	</div>
  	<div class="bannerTop">
  		<div class="inner">
  			<a href=""></a>
  			<div class="search fr">
  				<input type="text" placeholder="创意礼物" />
  			</div>
  		</div>
  	</div>
  	<div class="list topList">
  		<div class="inner">
  			<ul>
	  			<li><a v-bind:class="{'active': cegstatus.code == 0}" v-on:click="toList(0)">首页</a></li>
	  			<li v-for="item in ceg"><a v-bind:class="{'active': cegstatus.code == item.CegID}" v-on:click="toList(item.CegID)">{{item.CegName}}</a></li>
	  		</ul>
  		</div>		
  	</div>
  	<div class="tipTop">
  		<div class="inner list">
  			<ul>
	  			<li><a v-bind:class="{'active': cegstatus.code == 0}" v-on:click="toList(0)">首页</a></li>
	  			<li v-for="item in ceg"><a v-bind:class="{'active': cegstatus.code == item.CegID}" v-on:click="toList(item.CegID)">{{item.CegName}}</a></li>
	  		</ul>
	  		<div class="fr">
	  			<a href="" class="login">登录</a>
	  			<a href="" >注册</a>
	  		</div>
  		</div>
  	</div>
</template>
<script>
import commonsvc from '../../services/CommonSvc'
import getDomain from '../../controllers/getDomain'
import cegstatus from '../../models/md_cegstatus'
import goods from '../../models/md_goodsList'
import labellist from '../../models/md_label'

export default{
  data () {
    return {
    	ceg: [],
    	cegstatus,
      goods,
      labellist
    }
  },
  ready: function () {
  	this.getceg()
    $(window).scroll(function(){;
		if($(window).scrollTop() > 232){
			$('.tipTop').css('animation','show .3s')
			$('.tipTop').css('top','0')
		}else{
			$('.tipTop').css('animation','hide .3s')
			$('.tipTop').css('top','-50px')
		}
	})
  },
  methods: {
  	getceg () {
      let perUrl = 'http://www.28dagang.com/api/getCeg.php'
      let perData = {}
      let _this = this
      commonsvc.get(perData, perUrl).done(function(result){
        console.log(result)
        _this.ceg = result
      })
    },
    toList (id) {
    	this.cegstatus.code = id
    	if(id == 0){
    		window.location.href = ''
    	}else{
        let _this = this
        let sendData = {
            'CegID': id
        }
        $.ajax({
            url:'http://www.28dagang.com/api/getAllGoods.php',
            data: sendData,
            DataType:'JSON',
            type:'GET',
            success:function(data){
                _this.goods.result.label = data.label
            }
        })
        $.ajax({
          url:'http://www.28dagang.com/api/getAllGoods.php?CegID=' +  id,
          data:{},
          dataType:'JSON',
          type:'GET',
          success:function(data){
            console.log(data)
            _this.labellist.result = data.label
          }
        })
    		window.location.href = getDomain.getUrl('second/' + id)
    	}
    }
  }
}
</script>
<style scoped>
.headerBox{
	height: 36px;
	background: #333;
	color: #ccc;
	line-height: 36px;
	font-size: 12px;
}
.login{
	margin-right: 20px;	
}
.bannerTop{
	height: 160px;
	position: relative;
}
.bannerTop a{
	position: absolute;
    top: 50px;
    left: 434px;
    z-index: 2;
    display: inline-block;
    width: 180px;
    height: 60px;
    background-position: 0 -222px;
    background-image: url(http://mimg.127.net/hxm/yanxuan-web/p/20150730/style/img/header-s63686fd389-4827c33dfe.png);
    background-repeat: no-repeat;
}
.search{
	line-height: 160px;
	margin-right: 40px;
}
.search input{
	border: none;
	border-bottom: 1px solid #D8CEBC;
    font-size: 12px;
    line-height: 23px;
    color: #333;
    width: 252px;
    margin-top: 9px;
    height: 23px;
    padding-left: 10px;
}
.search input::-webkit-input-placeholder { /* WebKit browsers */ 
color: #b4a078; 
} 
.search input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #b4a078; 
} 
.search input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #b4a078; 
} 
.search input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #b4a078; 
}
.topList{
	height: 36px;
	line-height: 30px;
}
.tipTop{
	position: fixed;
	top: -50px;
	width: 100%;
	height: 50px;
	line-height: 40px;
	background: #fff;
	z-index: 5;
	box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
}
@keyframes show{
	0%{
		top: -50px;
	}
	100%{
		top: 0;
	}
}
@keyframes hide{
	0%{
		top: 0;
	}
	100%{
		top: -50px;
	}
}
</style>

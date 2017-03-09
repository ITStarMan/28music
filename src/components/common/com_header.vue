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
	  			<li><a class="active">首页</a></li>
	  			<li><a>居家</a></li>
	  			<li><a>餐厨</a></li>
	  			<li><a>配件</a></li>
	  			<li><a>服装</a></li>
	  			<li><a>洗护</a></li>
	  			<li><a>婴童</a></li>
	  			<li><a>杂货</a></li>
	  			<li><a>饮食</a></li>
	  			<li><a>其他</a></li>
	  		</ul>
  		</div>		
  	</div>
  	<div class="tipTop">
  		<div class="inner list">
  			<ul>
	  			<li><a class="active">首页</a></li>
	  			<li><a>居家</a></li>
	  			<li><a>餐厨</a></li>
	  			<li><a>配件</a></li>
	  			<li><a>服装</a></li>
	  			<li><a>洗护</a></li>
	  			<li><a>婴童</a></li>
	  			<li><a>杂货</a></li>
	  			<li><a>饮食</a></li>
	  			<li><a>其他</a></li>
	  		</ul>
	  		<div class="fr">
	  			<a href="" class="login">登录</a>
	  			<a href="" >注册</a>
	  		</div>
  		</div>
  	</div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  ready: function () {
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

<?php session_start();  ?>
<!doctype html>
<html>
<head>   
<meta charset="utf-8">   
<title>Examples</title>
<style>
 body{margin:0;}
 a{
	 display: block;
     text-decoration: none;
     margin: 40px;
     height: 60px;
     width: 200px;
     background: #2abfff;
     text-align: center;
     line-height: 60px;
     color: #fff;
     cursor: pointer;
 }
 .head{
	text-align: center;
	background: #000;
	color: #fff;
	margin: 0;
	height: 60px;
	line-height: 60px;
 }
</style>   
</head>
<body>
    <?php
	if($_SESSION['login']=='chenggong'){
	?>
	<p class="head">欢迎<span><?php echo $_SESSION['name']; ?></span>进入管理系统！</p><br>
	<?php }else{
		echo "<script type='text/javascript'>location.href='index.html';</script>";	
		}
	?>
	<a href="send/addCeg.html">添加分类</a>
	<a href="send/addLabel.html">添加标签</a>
	<a href="send/addGood.html">上架商品</a>
</body>
</html>
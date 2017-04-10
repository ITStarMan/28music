<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$mobile=$_GET['mobile'];
$rs=mysql_query("select * from user where mobile='$mobile'");
$num=mysql_num_rows($rs);
if($num>0){
	echo "1";
	}else{
		echo "0";
		}
?>
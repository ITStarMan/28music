<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$username=$_POST['username'];
$password=$_POST['password'];
$rs=mysql_query("select * from user where username='$username' and password='$password'");
$num=mysql_num_rows($rs);
if($num>0){
	$_SESSION['login']='true';
	$_SESSION['name']=$username;
	echo 'true';
	}else{
		echo 'false';
		}
?>
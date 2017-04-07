<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$username=$_POST['username'];
$password=$_POST['password'];
$date=date('y-m-d H:i:s',time());
$sql="insert into user (username,password,regTime) values ('$username','$password','$date')";
$query = mysql_query($sql);
if($query){
	echo 'true';
}else{
	echo 'false';
}
?>
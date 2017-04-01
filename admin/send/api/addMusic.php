<?php
session_start();
header("content-type:text/html;charset=utf-8");
include("mysql.php");
$name=$_GET['name'];
$author=$_GET['author'];
$mname=$_GET['mname'];
$date=date('y-m-d H:i:s',time());
$sql="insert into music (name,author,downname,time) values ('$name','$author','$mname','$date')";
$query = mysql_query($sql);
if($query){
	echo "true";
}else{
	echo "false";
}
?>
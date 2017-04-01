<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$cegName=$_GET['cegName'];
$cegDesc=$_GET['cegDesc'];
$sql="insert into ceglist (CegName,CegDesc) values ('$cegName','$cegDesc')";
$query = mysql_query($sql);
if($query){
	echo "true";
}else{
	echo "false";
}
?>
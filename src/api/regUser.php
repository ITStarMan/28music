<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$mobile=$_POST['mobile'];
$username=$_POST['username'];
$password=$_POST['password'];
$date=date('y-m-d H:i:s',time());
$sql="insert into user (mobile,username,password,regTime) values ('$mobile','$username','$password','$date')";
$query = mysql_query($sql);
if($query){
	$arr = array ('status'=>200);
	echo json_encode($arr);
}else{
	$arr = array ('status'=>400);
	echo json_encode($arr);
}
?>
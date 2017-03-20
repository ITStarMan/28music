<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$result =mysql_query("select * from indexlist");
$aa=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
} 
echo json_encode($aa);
?>
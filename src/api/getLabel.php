<?php
header("content-type:text/json;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$id=$_GET['CegID'];
$result =mysql_query("select * from label where CegID='$id'");
$aa=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
} 
echo json_encode($aa);
?>
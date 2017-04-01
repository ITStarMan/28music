<?php
header("content-type:text/json;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$id=$_GET['goodsID'];
$result =mysql_query("select * from goods where goodsID='$id'");
$r =mysql_query("select * from goodsinfo where goodsID='$id'");
$aa=array();
$bb=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
};
while($row = mysql_fetch_array($r)){
	$bb[]=$row;
};
echo json_encode($bb);
?>
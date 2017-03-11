<?php
header("content-type:text/html;charset=utf-8");
include("mysql.php");
$result =mysql_query("select * from indexlist");
$aa=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
} 
echo json_encode($aa);
?>
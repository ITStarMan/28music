<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$id = $_GET["id"];
$r = mysql_query("select * from goodsinfo where goodsID='$id'");
$cc=array();
while($rw = mysql_fetch_array($r)){
	$cc[]=$rw;
};
$num=$cc[0]["goodsSee"]; 
$nnum=$num + 1;
$sql="update goodsinfo set goodsSee='$nnum' where goodsID='$id'";
if (mysql_query($sql)){
	echo '200';
}else{
	echo "400";
}
?>
<?php
header("content-type:text/json;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$id=$_GET['goodsID'];
$result =mysql_query("select * from goods where goodsID='$id'");
$r =mysql_query("select * from goodsinfo where goodsID='$id'");
$pic =mysql_query("select * from goodspic where goodsID='$id'");
$aa=array();
$bb=array();
$cc=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
};
while($row = mysql_fetch_array($r)){
	$bb[]=$row;
};
while($row = mysql_fetch_array($pic)){
	$cc[]=$row;
};
$bb[0]['goodsPrice'] = $aa[0]['goodsPrice'];
$bb[0]['goodsDesc'] = $aa[0]['goodsDesc'];
$bb[0]['CegID'] = $aa[0]['CegID'];
$bb[0]['CegName'] = $aa[0]['CegName'];
$bb[0]['goodsInfoPic'] = $cc;
echo json_encode($bb);
?>
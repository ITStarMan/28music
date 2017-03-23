<?php
header("content-type:text/json;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$result =mysql_query("select * from goods");
$data =mysql_query("select * from label");
$aa=array();
$cc=array();
while($row = mysql_fetch_array($data)){
	$cc[]=$row;
}
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
}
$arrlength=count($aa);
$arrlen=count($cc);
$bb=array();
for($x=0;$x<$arrlen;$x++) {
	$bb[$x]["labelID"] = $cc[$x]["labelID"];
	$bb[$x]["labelName"] = $cc[$x]["labelName"];
	$bb[$x]["labelDesc"] = $cc[$x]["labelDesc"];
	$i=0;
	$dd=array();
	for($y=0;$y<$arrlength;$y++) {		
		if($aa[$y]["labelID"] == $cc[$x]["labelID"]){
			$dd[$i] = $aa[$y];
			$i++;
		}
	}
	$bb[$x]["goodsList"] = $dd;
}
$ee=array();
$ee['cegID'] = $cc[0]["CegID"];
$ee['cegName'] = $cc[0]["CegName"];
$ee['label'] = $bb;
echo json_encode($ee);
?>
<?php
header("content-type:text/json;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$id=$_GET['CegID'];
if($id == null){
	exit('缺少CegID');
};
$lid=$_GET['labelID'];
if($lid == null){
	$result =mysql_query("select * from goods where CegID='$id'");
	$data =mysql_query("select * from label where CegID='$id'");
}else{
	$result =mysql_query("select * from goods where CegID='$id' and labelID='$lid'");
	$data =mysql_query("select * from label where CegID='$id' and labelID='$lid'");
};
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
	$bb[$x]["labelLogo"] = $cc[$x]["labelLogo"];
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
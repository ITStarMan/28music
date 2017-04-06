<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$CegID=$_POST['CegID'];
$labelID=$_POST['labelID'];
$goodsName=$_POST['goodsName'];
$goodsLogo=$_POST['goodsLogo'];
$goodsPrice=$_POST['goodsPrice'];
$goodsDesc=$_POST['goodsDesc'];
$date=date('y-m-d H:i:s',time());
$onesPic=$_POST['onesPic'];
$onebPic=$_POST['onebPic'];
$twosPic=$_POST['twosPic'];
$twobPic=$_POST['twobPic'];
$threesPic=$_POST['threesPic'];
$threebPic=$_POST['threebPic'];
$foursPic=$_POST['foursPic'];
$fourbPic=$_POST['fourbPic'];
$fivesPic=$_POST['fivesPic'];
$fivebPic=$_POST['fivebPic'];
$result =mysql_query("select * from ceglist where CegID='$CegID'");
$aa=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
};
$CegName=$aa[0]["CegName"]; 
$res=mysql_query("select * from label where labelID='$labelID'");
$bb=array();
while($ro = mysql_fetch_array($res)){
	$bb[]=$ro;
};
$labelName=$bb[0]["labelName"];
$labelLogo=$bb[0]["labelLogo"];
$goodsInfoPic=json_decode($_POST['goodsInfoPic']);
$sql="insert into goods (CegID,CegName,labelID,labelName,labelLogo,goodsName,goodsLogo,goodsPrice,goodsDesc,CreatTime) values ('$CegID','$CegName','$labelID','$labelName','$labelLogo','$goodsName','$goodsLogo','$goodsPrice','$goodsDesc','$date')";
$query = mysql_query($sql);
if($query){
	$r =mysql_query("select * from goods where CreatTime='$date'");
	$cc=array();
	while($rw = mysql_fetch_array($r)){
		$cc[]=$rw;
	};
	$id=$cc[0]["goodsID"]; 
	$goodsSelas=0;
	$goodsSee=0;
	$sql2="insert into goodsinfo (goodsID,goodsName,goodsSelas,goodsSee,onesPic,onebPic,twosPic,twobPic,threesPic,threebPic,foursPic,fourbPic,fivesPic,fivebPic) values ('$id','$goodsName','$goodsSelas','$goodsSee','$onesPic','$onebPic','$twosPic','$twobPic','$threesPic','$threebPic','$foursPic','$fourbPic','$fivesPic','$fivebPic')";
	$query2 = mysql_query($sql2);
	if($query2){
		$code = 1;
		foreach ($goodsInfoPic as $value) {
		  	$sql3="insert into goodspic (goodsID,goodsPic) values ('$id','$value')";
			$query3 = mysql_query($sql3);
			if($query3){

			}else{
				$code = 0;
				break;
			}
		}
		if($code == 1){
			echo 'true';
		}else{
			echo 'false3';
		}
	}else{
		echo "false2";
	}
}else{
	echo "false1";
}
?>
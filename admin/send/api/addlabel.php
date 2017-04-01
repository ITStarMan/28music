<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
include("mysql.php");
$CegID=$_POST['CegID'];
$labelName=$_POST['labelName'];
$labelLogo=$_POST['labelLogo'];
$labelDesc=$_POST['labelDesc'];
$date=date('y-m-d H:i:s',time());
$result =mysql_query("select * from ceglist where CegID='$CegID'");
$aa=array();
while($row = mysql_fetch_array($result)){
	$aa[]=$row;
};
$CegName=$aa[0]["CegName"]; 
$sql="insert into label (CegID,CegName,labelName,labelLogo,labelDesc,CreatTime) values ('$CegID','$CegName','$labelName','$labelLogo','$labelDesc','$date')";
$query = mysql_query($sql);
if($query){
	echo "true";
}else{
	echo "false";
}
?>
<?php
header("content-type:text/html;charset=utf-8");
include("mysql.php");
	$key = $_POST["key"]; 
    $cegName = $_POST["cegName"];
    echo $cegName;
    $cegDesc = $_POST["cegDesc"];
    $sql="update indexlist set cegName='2' where key='1'";
    if (mysql_query($sql)) echo '200';
    else echo "400";
?>
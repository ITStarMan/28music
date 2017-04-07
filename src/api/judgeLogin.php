<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
if($_SESSION['login']=='true'){
	echo 'true';
}else{
	echo 'false';
}
?>
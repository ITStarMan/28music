<?php
header("Access-Control-Allow-Origin: *");
        ##author :Androidyue
        ##sina @androidyue
        ##Blog http://blog.csdn.net/BossDarcy
        ##源码具体讲解  http://blog.csdn.net/BossDarcy/archive/2010/12/20/6086082.aspx
        //判断临时文件存放路径是否包含用户上传的文件
        if(is_uploaded_file($_FILES["uploadfile"]["tmp_name"])){
        //为了更高效，将信息存放在变量中
        $upfile=$_FILES["uploadfile"];//用一个数组类型的字符串存放上传文件的信息
        //print_r($upfile);//如果打印则输出类似这样的信息Array ( [name] => m.jpg [type] => image/jpeg [tmp_name] => C:\WINDOWS\Temp\php1A.tmp [error] => 0 [size] => 44905 )
        $name=$upfile["name"];//便于以后转移文件时命名
        $type=$upfile["type"];//上传文件的类型
        $size=$upfile["size"];//上传文件的大小
        $tmp_name=$upfile["tmp_name"];//用户上传文件的临时名称
        $error=$upfile["error"];//上传过程中的错误信息
        //echo $name;
        //对文件类型进行判断，判断是否要转移文件,如果符合要求则设置$ok=1即可以转移
        switch($type){
            case "image/jpg": $ok=1;
            break;
            case "image/jpeg": $ok=1;
            break;
            case "image/gif" : $ok=1;
            break;
            case "image/png" : $ok=1;
            break;
            case "audio/mpeg" : $ok=1;
            break;
            case "audio/mp3" : $ok=1;
            break;
            default:$ok=0;
            break;
        }
        //如果文件符合要求并且上传过程中没有错误
        if($ok&&$error=='0'){
            //调用move_uploaded_file（）函数，进行文件转移
            move_uploaded_file($tmp_name,'../images/'.$name);
            //操作成功后，提示成功
            //setcookie("image",$name,time()+2*7*24*3600);
            echo 'http://www.28dagang.com/images/'.$name;
        }else{
            //如果文件不符合类型或者上传过程中有错误，提示失败
            echo 400;
        }
    }
?>
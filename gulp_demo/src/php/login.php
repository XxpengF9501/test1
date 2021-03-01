<?php
header('content-type:text/html;charset=utf-8');
$u=$_GET['username'];
$p=$_GET['password'];
$link=mysqli_connect('localhost','root','','sony');
mysqli_set_charset($link,'utf8');
$sql="select * from sony_username where username='$u' and password='$p'";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
    echo '1';
}else{
    echo '0';
}
mysqli_close($link);
?>
<?php
header('content-type:text/html;charset=utf-8');
$link=mysqli_connect('localhost','root','','sony');
mysqli_set_charset($link,'utf8');
$sql='select * from sony_homepage';
$result=mysqli_query($link,$sql);
$arr=[];
while($row=mysqli_fetch_assoc($result)){
  array_push($arr,$row);
}
echo json_encode($arr);
mysqli_close($link);
?>
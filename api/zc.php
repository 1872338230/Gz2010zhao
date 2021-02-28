<?php
$tel=$_POST['tel2'];
$psw=$_POST['password'];

// （1）链接数据库
$con=mysqli_connect('localhost','root','123456','test');


// select
// （2）设置对应的SQL语句
$sql="SELECT*FROM`us` WHERE `tel`='$tel'";

// （3）执行SQL语句
$res=mysqli_query($con,$sql);
if(!$res){
    die('数据库链接错误'.mysqli_error($con));

}
$arr=array();
$row=mysqli_fetch_assoc($res);
while($row){
    // 向数组中添加数据 ： `array_push(需要添加数据的数组，数据);`
    array_push($arr,$row);
    $row=mysqli_fetch_assoc($res);
}
if($arr){
    print_r('用户名已被注册');
}else{
    // print_r('用户名还未被注册');
    $sql1="INSERT INTO `us` VALUES('$tel','$psw')";
    $res1=mysqli_query($con,$sql1);
    print_r('用户名注册成功');

}

?>
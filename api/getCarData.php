<?php
    $tel = $_GET['tel'];

    $con = mysqli_connect('localhost','root','123456','test');

    // $sql = "SELECT * FROM `shop`";
    $sql = "SELECT * FROM `shop` WHERE `tel` = $tel";
   
 
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $arr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    
    // 获取购物车表这个用户所有的数据
    $carSql = "SELECT * FROM `shop` WHERE `tel` = '$tel'";
    $carRes = mysqli_query($con,$carSql); 
    if(!$carRes){
        die('数据路链接错误' . mysqli_error($con));
    }
    $car = array();
    $carRow = mysqli_fetch_assoc($carRes);
    while($carRow){
        array_push($car,$carRow);
         $carRow = mysqli_fetch_assoc($carRes);
    }
    print_r(json_encode($arr,JSON_UNESCAPED_UNICODE));
?>
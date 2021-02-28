<?php
    $tel= $_GET['tel'];
    $id = $_GET['productId'];

    $con = mysqli_connect('localhost','root','123456','test');

    $sql = "DELETE FROM `shop` WHERE `tel` = '$tel' AND `productId`='$id'";


    $res = mysqli_query($con,$sql);


    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    print_r(json_encode(array('code'=>$res,'msg'=>'删除成功'),JSON_UNESCAPED_UNICODE));
?>
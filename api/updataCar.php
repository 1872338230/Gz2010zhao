<?php
    $id = $_GET['productId'];
    $num = $_GET['num'];
    $tel= $_GET['tel'];

    $con = mysqli_connect('localhost','root','123456','test');

    $sql = "UPDATE `shop` SET `num` = '$num' WHERE `tel`= '$tel' AND `productId` = '$id'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接失败'  . mysqli_error($con));
    }

    print_r(json_encode(array('code'=>$res,'msg'=>'修改成功'),JSON_UNESCAPED_UNICODE));

?>
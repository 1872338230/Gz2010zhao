<?php
    $tel = $_POST['tel'];
    $productId = $_POST['id'];

    $con = mysqli_connect('localhost','root','123456','test');

    // 先去判断 这个用户对应的这个productId是否存在，如果存在直接修改这条数据的num
    // 如果不存在  才把这个条数据添加到购物车数据表中

    $sql = "SELECT *  FROM `shop` WHERE `tel` = '$tel' AND `productId` = '$productId'";
   

    $res = mysqli_query($con,$sql);
 
    if(!$res){
        die('数据库链接错误'. mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);
    // print_r($row['num']);

    if(!$row){
        // 说明不存在 这个用户名对应的这个条productId
        // 把这条数据添加到购物车表
        $addSql = "INSERT INTO `shop` VALUES ('$tel', null,'1' , '$productId')";

        $addRes = mysqli_query($con,$addSql);
        if(!$addRes){
            die('数据库链接错误' . mysqli_error($con));
        }
        print_r(json_encode(array('code'=>$addRes,"msg"=>"添加成功"),JSON_UNESCAPED_UNICODE));
    }else{
        print_r($row['num']);
        $num = ++$row['num'];
        // print_r($num );
       
        $updat = "UPDATE `shop` SET `num` = '$num' WHERE `tel` = '$tel' AND `productId` = '$productId'";

        $updataRes = mysqli_query($con,$updat);
        // print_r($updataRes);
    }
?>
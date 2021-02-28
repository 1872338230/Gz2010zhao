<?php

$con = mysqli_connect('localhost','root','123456','test');

  $tel2 = $_POST['tel2'];
  $psw2 = $_POST['psw2'];
  print_r($rel2);

  $sql = "SELECT * FROM `us` WHERE `tel`='$tel2' AND `psw`='$psw2'";

  $res = mysqli_query($con,$sql);

  if (!$res) {
    die('error for mysql: ' . mysqli_error());
  }

  $row = mysqli_fetch_assoc($res);

  if (!$row) {
    // 没有匹配的数据 登录失败
    echo json_encode(array(
      "code" => 0,
      "message" => "登录失败"
    ));
  } else {
    // 有匹配的数据 登录成功
    echo json_encode(array(
      "code" => 1,
      "message" => "登录成功"
    ));
  }
?>

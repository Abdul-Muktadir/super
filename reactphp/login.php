<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$con= mysqli_connect("localhost:3306", "root", "");
mysqli_select_db($con, "react-login");

$data = json_decode(file_get_contents("php://input"));


$email=$data->email;
$password=$data->password;



$result = mysqli_query($con, "SELECT * FROM `register` WHERE email='".$email."' AND password='".$password."' ");

// $result = mysqli_query($con, $sql);
$nums= mysqli_num_rows($result);

$rs= mysqli_fetch_array($result);
if ($nums >= 1) {
    http_response_code(200);
    $outp = "";
    // while ($rs = mysqli_fetch_array($result)) {
    //     if ($outp !="") {
            // $outp .='{"full_name":"' .$rs["full_name"]. '"}';
            $outp .='{"full_name":"' .$rs["full_name"]. '",';
            $outp .='"email":"' .$rs["email"]. '",';
            $outp .='"Status":"200"}';
    //     }
    // }
    echo $outp;
}
else {
    http_response_code(202);
}





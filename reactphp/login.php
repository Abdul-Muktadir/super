<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$con= mysqli_connect("localhost:3306", "root", "");
mysqli_select_db($con, "react-login");

$data = json_decode(file_get_contents("php://input"));


$email=$data->email;
$password=$data->password;



$sql= "SELECT * FROM `register` WHERE email='".$email."' AND password='".$password."' ";

$result = mysqli_query($con, $sql);
if ($result) {
    $response['data']=array('status'=>'valid');
    echo json_encode($response);
}
else{
    $response['data']=array('status'=>'invalid');
    echo json_encode($response);
}





<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//         Access-Control-Allow-Headers, Authorization, X-Requested-With");

// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Headers: *");

// include("DbConnect.php");
// $conn = new DbConnect();
// $db = $conn->connect();
// $method = $_SERVER['REQUEST_METHOD'];
// switch($method) {
//     case 'POST':
//         $user = json_decode(file_get_contents('php://input'));
//         $sql = "INSERT INTO users(`full_name`, `email`, `password`) VALUES(:full_name, :email, :password)";
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam(':full_name', $user->full_name);
//         $stmt->bindParam(':email', $user->email);
//         $stmt->bindParam(':password', $user->password);
//         if($stmt->execute()) {
//             $data = ['status' => 1, 'message' => "Record successfully created"];
//         } else {
//             $data = ['status' => 0, 'message' => "Failed to create record."];
//         }
//         echo json_encode($data);
//         break;
// }

###############################################################################################################

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type,
//         Access-Control-Allow-Headers, Authorization, X-Requested-With");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
// header("Access-Control-Max-Age: 3600");

$data = json_decode(file_get_contents("php://input"));

$full_name=$data->full_name;
$email=$data->email;
$password=$data->password;

$con= mysqli_connect("localhost:3306", "root", "");
mysqli_select_db($con, "react-login");
if ($full_name && $email && $password) {
$sql= "insert into register(
    full_name, 
    email, 
    password)
    values (
    '$full_name', 
    '$email', 
    '$password'
    )";

$result = mysqli_query($con, $sql);
if ($result) {
    $response['data']=array('status'=>'valid');
    echo json_encode($response);
}
else{
    $response['data']=array('status'=>'invalid');
    echo json_encode($response);
}

}





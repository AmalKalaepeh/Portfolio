<?php
// Procedural programming
$conn = mysqli_connect("localhost", "root", "", "Portfolio");
        // Check connection
        if($conn->connect_error){
            die ('connection faild:'.$conn->connect_error);
          }
      
    $name =  $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject =  $_REQUEST['subject'];
    $message =  $_REQUEST['message'];
    $photo =  $_REQUEST['photo'];
        // Performing insert query execution
        // here our table name is html
        $sql = "INSERT INTO cta VALUES ('$name','$email','$subject','$message','$photo')";
       
    if ($conn->query($sql)===TRUE) {
        echo "message sent successfully";     
      }else{
        echo "Error: ".$sql."<br>".$conn->error;
      }
  
      $conn->close();
  ?>

<?php

require_once "connect.php";


$username_ = $_POST['Username'];
$password_ = $_POST['password'];
$name_ = $_POST['name'];
$surname_ = $_POST['surname'];
$email_ = $_POST['email'];
$date_born_ = $_POST['date-acc'];
//$gender_ = $_POST['gender'];



	$zapytanie = @mysql_query("INSERT INTO users
	SET
	username='$username_', password = '$password_', name='$name', surname='$surname',date_born='$date_born_',email='$email'");
		
		//$wynik = mysql_query($zapytanie);
		
	 	// if ($wynik) {
	 	// 	header('Location: index_glowna.php');	
	 	// }
	 
	 	// mysql_close($db);	
		 //(`username`, `password`, `admin`, `name`, `surname`, `date_born`, `email`, `gender`) 
	

?>